import { Document, Model, model, Schema } from 'mongoose'
import fetch from 'node-fetch'

import { OpenweatherCurrentAPIResponse } from '../core/API/IOpenWeather'

// ---- Temp things ------------------------------

// TODO: Move this into a configuration object of any kind
const provider: API = {
    name: 'OpenWeather',
    baseUrl: 'https://api.openweathermap.org/data/2.5/weather',
    envKeyEntry: 'API_OPENWEATHERMAP_KEY'
}

/**
 * This offset will let the query to search for "date" field between now += dtQueryOffset
 *  Value in ms (x minutes = x * 60 * 1000)
 */
const dtQueryOffset = 30 * 60 * 1000

/**
 * Offset for latitude and longitude values while querying
 */
const llQueryOffset = 0.1

// ---- Schema -----------------------------------

export const WeatherSchema = new Schema(
    {
        temperature: { type: Number, required: true },
        humidity: { type: Number, required: true },
        wind: { type: Number, required: true },
        weather: { type: String, required: true },
        latitude: { type: Number, required: true },
        longitude: { type: Number, required: true },
        country: String,
        name: String,
        date: { type: Date, required: true },
        lastUpdate: { type: Date, required: true }
    },
    { collection: 'weather' }
)

// ---- Model Interfaces -------------------------

export interface IWeatherSchema extends Document {
    temperature: number
    humidity: number
    wind: number
    weather: string
    latitude: number
    longitude: number
    country?: string
    name?: string
    date: Date
    lastUpdate: Date
}

export interface IWeather extends Model<IWeatherSchema> {
    getData(
        latitude: number,
        longitude: number,
        date: Date
    ): Promise<IWeatherSchema>

    fromOpenweatherCurrent(
        data: OpenweatherCurrentAPIResponse
    ): Promise<IWeatherSchema>

    fetchCurrent(latitude: number, longitude: number): Promise<IWeatherSchema>
}

// ---- Statics ----------------------------------

/**
 * Do whatever it needs to register and get a Weather document
 *  - fetch new values if needed (update/create)
 *  - return most recent entry
 */
WeatherSchema.statics.getData = (
    latitude: number,
    longitude: number,
    date: Date
) => {
    // Note: mongodb query: https://docs.mongodb.com/manual/reference/operator/query/
    // Note²: mongoose sort: https://mongoosejs.com/docs/api.html#query_Query-sort

    // Initialize time interval (tMax could only be "date" as we are note that much in the past)
    const tMin = new Date(date)
    const tMax = new Date(date)
    tMin.setTime(tMin.getTime() - dtQueryOffset)
    tMax.setTime(tMax.getTime() + dtQueryOffset)

    // Try to look for existing entries
    return (
        Weather.find({
            // Latitude & longitude interval to allow errors
            latitude: {
                $gte: latitude - llQueryOffset,
                $lte: latitude + llQueryOffset
            },
            longitude: {
                $gte: longitude - llQueryOffset,
                $lte: longitude + llQueryOffset
            },
            // Date interval
            date: {
                $gte: tMin,
                $lte: tMax
            }
        })
            // Order by date, most recent first
            .sort({ date: 'descending' })
            .then((documents) => {
                // If there is at least one document found, return the first of the list
                if (documents.length > 0 /* && document[0].lastUpdate <= ? */)
                    return documents[0]
                // Note: this works pretty well for the current weather, but we will need to continue the process for the values of tomorrow+ and check the lastUpdate
                //  We can think about: Weather.find(...).sort(...).then(...).checkLastUpdate()
                //  Where "checkLastUpdate" is a Schema (instance) method (https://mongoosejs.com/docs/guide.html#methods)
                //    that checks if the lastUpdate value is ok, and update the values if it is not
                //    This means that we may need a "fetchUpdate" method that will fetch data from the API and update the document inside the database

                // Otherwise, no or no recent one found, so fetch one from the API
                return Weather.fetchCurrent(latitude, longitude)
            })
    )
}

/**
 * Get a Weather document from OpenWeather API "Current" fetch
 */
WeatherSchema.statics.fromOpenweatherCurrent = function (
    data: OpenweatherCurrentAPIResponse
) {
    const weather = new Weather({
        temperature: data.main.temp,
        humidity: data.main.humidity,
        wind: data.wind.speed,
        weather: data.weather[0].main,
        latitude: data.coord.lat,
        longitude: data.coord.lon,
        date: new Date(data.dt * 1000),
        lastUpdate: new Date()
    })

    if (data.name) weather.name = data.name
    if (data.sys.country) weather.country = data.sys.country

    return weather
}

/**
 * Fetch the data from the API for a given position, then create the Weather document and save it into the database
 */
WeatherSchema.statics.fetchCurrent = function (
    latitude: number,
    longitude: number
) {
    const { baseUrl, envKeyEntry } = provider
    const api_key = process.env[envKeyEntry]

    const url = `${baseUrl}?lat=${latitude}&lon=${longitude}&appid=${api_key}`

    return fetch(url)
        .then((res) => res.json())
        .then((data) => Weather.fromOpenweatherCurrent(data))
        .then((doc) => doc.save())
        .catch((err) => console.error(err))
}

// TODO: Create a dumpOld/clear/removeOld static method to remove old entries from the database (dt <= now - x * dtQueryOffset, just need to define a 'x' value)

// ---- Model ------------------------------------

export const Weather = model<IWeatherSchema, IWeather>('Weather', WeatherSchema)
