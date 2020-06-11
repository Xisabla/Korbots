import moment from 'moment'
import { Document, Model, model, Schema } from 'mongoose'
import fetch from 'node-fetch'

import {
    OpenweatherCurrentAPIResponse,
    OpenweatherDailyAPIResponse
} from '../core/API/IOpenWeather'
import Application from '../core/Application'

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

    // Methods: Checkers
    needsUpdate(): boolean
    needsLocationFieldsUpdate(): boolean
    checkUpdate(isDaily?: boolean): Promise<IWeatherSchema>
    checkLocationFieldsUpdate(): Promise<IWeatherSchema>

    // Methods: Updaters
    updateCurrent(): Promise<IWeatherSchema>
    updateDaily(): Promise<IWeatherSchema>
    updateLocationFields(): Promise<IWeatherSchema>
}

// ---- Model ------------------------------------

export interface IWeather extends Model<IWeatherSchema> {
    // Getters
    getCurrent(lat: number, lon: number): Promise<IWeatherSchema>
    getDaily(lat: number, lon: number, date: Date): Promise<IWeatherSchema>
    getDailyAll(
        lat: number,
        lon: number,
        further?: number
    ): Promise<IWeatherSchema[]>

    // Finders
    findCurrent(lat: number, long: number): Promise<IWeatherSchema[]>
    findCurrentOne(lat: number, long: number): Promise<IWeatherSchema>
    findDaily(lat: number, long: number, date: Date): Promise<IWeatherSchema[]>
    findDailyOne(lat: number, long: number, date: Date): Promise<IWeatherSchema>
    findDailyAll(
        lat: number,
        lon: number,
        further?: number
    ): Promise<IWeatherSchema[]>

    // Document
    fromCurrent(lat: number, lon: number): Promise<IWeatherSchema>
    fromDaily(lat: number, long: number): Promise<IWeatherSchema[]>

    // Fetch
    fetchCurrent(
        lat: number,
        lon: number
    ): Promise<OpenweatherCurrentAPIResponse>
    fetchDaily(lat: number, lon: number): Promise<OpenweatherDailyAPIResponse>

    // Remove
    removeOld(): Promise<any>
}

// ---- Statics ----------------------------------

WeatherSchema.statics.getCurrent = function (
    lat: number,
    lon: number
): Promise<IWeatherSchema> {
    return Weather.findCurrent(lat, lon)
        .then((docs) => {
            if (docs.length > 0) return docs[0]

            return Weather.fromCurrent(lat, lon).then((doc) => doc.save())
        })
        .then((doc) => doc.checkUpdate())
        .then((doc) => doc.checkLocationFieldsUpdate())
}

WeatherSchema.statics.getDaily = function (
    lat: number,
    lon: number,
    date: Date
): Promise<IWeatherSchema> {
    return Weather.findDaily(lat, lon, date)
        .then((docs) => {
            if (docs.length > 0) return docs[0]

            return Weather.fromDaily(lat, lon)
                .then((docs) => Promise.all(docs.map((doc) => doc.save())))
                .then(() => Weather.findDailyOne(lat, lon, date))
        })
        .then((doc) => doc.checkUpdate(true))
        .then((doc) => doc.checkLocationFieldsUpdate())
}

WeatherSchema.statics.getDailyAll = function (
    lat: number,
    lon: number,
    further = 4
): Promise<IWeatherSchema[]> {
    return Weather.findDailyAll(lat, lon, further)
        .then((docs) => {
            if (docs.length >= further) return Promise.resolve(docs)

            return Weather.fromDaily(lat, lon)
                .then((docs) => Promise.all(docs.map((doc) => doc.save())))
                .then(() => Weather.findDailyAll(lat, lon, further))
        })
        .then((docs) => {
            return Promise.all(docs.map((doc) => doc.checkUpdate()))
        })
        .then((docs) =>
            Promise.all(docs.map((doc) => doc.checkLocationFieldsUpdate()))
        )
}

// ---- Statics: Finders -------------------------

WeatherSchema.statics.findCurrent = function (
    lat: number,
    lon: number
): Promise<IWeatherSchema[]> {
    const coordinatesQueryOffset = 0.1

    const tMax = moment().add(2, 'minutes').toDate()
    const tMin = moment().add(-30, 'minutes').toDate()

    return Weather.find({
        // Latitude & longitude interval to allow errors
        latitude: {
            $gte: lat - coordinatesQueryOffset,
            $lte: lat + coordinatesQueryOffset
        },
        longitude: {
            $gte: lon - coordinatesQueryOffset,
            $lte: lon + coordinatesQueryOffset
        },
        date: {
            $gte: tMin,
            $lte: tMax
        }
    })
        .sort({ date: 'descending' })
        .then((docs) => docs)
}

WeatherSchema.statics.findCurrentOne = function (
    lat: number,
    lon: number
): Promise<IWeatherSchema> {
    return Weather.findCurrent(lat, lon).then((docs) =>
        docs.length > 0 ? docs[0] : null
    )
}

WeatherSchema.statics.findDaily = function (
    lat: number,
    lon: number,
    date: Date
): Promise<IWeatherSchema[]> {
    const coordinatesQueryOffset = 0.1

    const tMax = moment(date).add(1, 'days').toDate()
    const tMin = moment(date).add(-1, 'days').toDate()

    return Weather.find({
        latitude: {
            $gte: lat - coordinatesQueryOffset,
            $lte: lat + coordinatesQueryOffset
        },
        longitude: {
            $gte: lon - coordinatesQueryOffset,
            $lte: lon + coordinatesQueryOffset
        },
        date: {
            $gte: tMin,
            $lte: tMax
        }
    })
        .sort({ lastUpdate: 'descending' })
        .then((docs) =>
            docs.filter(
                (doc) =>
                    doc.date.getFullYear() === date.getFullYear() &&
                    doc.date.getMonth() === date.getMonth() &&
                    doc.date.getDate() === date.getDate()
            )
        )
}

WeatherSchema.statics.findDailyOne = function (
    lat: number,
    lon: number,
    date: Date
): Promise<IWeatherSchema> {
    return Weather.findDaily(lat, lon, date).then((docs) =>
        docs.length > 0 ? docs[0] : null
    )
}

WeatherSchema.statics.findDailyAll = function (
    lat: number,
    lon: number,
    further = 4
): Promise<IWeatherSchema[]> {
    const coordinatesQueryOffset = 0.1

    const tMax = moment().add(further, 'days').toDate()
    const tMin = moment().toDate()

    return Weather.find({
        latitude: {
            $gte: lat - coordinatesQueryOffset,
            $lte: lat + coordinatesQueryOffset
        },
        longitude: {
            $gte: lon - coordinatesQueryOffset,
            $lte: lon + coordinatesQueryOffset
        },
        date: {
            $gte: tMin,
            $lte: tMax
        }
    })
        .sort({ date: 'ascending' })
        .then((docs) =>
            docs.filter(
                (doc) =>
                    doc.date.getDate() > new Date().getDate() &&
                    doc.date.getUTCHours() === 12 &&
                    doc.date.getUTCMinutes() === 0 &&
                    doc.date.getUTCSeconds() === 0
            )
        )
}

// ---- Statics: Document ------------------------

WeatherSchema.statics.fromCurrent = function (
    lat: number,
    lon: number
): Promise<IWeatherSchema> {
    return Weather.fetchCurrent(lat, lon).then(
        (data: OpenweatherCurrentAPIResponse) =>
            new Weather({
                temperature: data.main.temp,
                humidity: data.main.humidity,
                wind: data.wind.speed,
                weather: data.weather[0].main,
                latitude: data.coord.lat,
                longitude: data.coord.lon,
                date: new Date(data.dt * 1000),
                lastUpdate: new Date()
            })
    )
}

WeatherSchema.statics.fromDaily = function (
    lat: number,
    lon: number
): Promise<IWeatherSchema[]> {
    return Weather.fetchDaily(lat, lon).then((data) => {
        const docs: IWeatherSchema[] = []

        data.daily.forEach((day) => {
            docs.push(
                new Weather({
                    temperature: day.temp.day,
                    humidity: day.humidity,
                    wind: day.wind_speed,
                    weather: day.weather[0].main,
                    latitude: data.lat,
                    longitude: data.lon,
                    date: new Date(day.dt * 1000),
                    lastUpdate: new Date()
                })
            )
        })

        return Promise.all(docs.map((doc) => doc.updateLocationFields()))
    })
}

// ---- Statics: Fetch ---------------------------

WeatherSchema.statics.fetchCurrent = function (
    lat: number,
    lon: number
): Promise<OpenweatherCurrentAPIResponse> {
    const baseUrl = Application.getAPIBaseUrl('openweather:current')
    const key = Application.getAPIKey('openweather:current')
    const url = `${baseUrl}?lat=${lat}&lon=${lon}&appid=${key}`

    return fetch(url).then((res) => res.json())
}

WeatherSchema.statics.fetchDaily = function (
    lat: number,
    lon: number
): Promise<OpenweatherDailyAPIResponse> {
    const baseUrl = Application.getAPIBaseUrl('openweather:onecall')
    const key = Application.getAPIKey('openweather:current')
    const url = `${baseUrl}?lat=${lat}&lon=${lon}&appid=${key}`

    return fetch(url).then((res) => res.json())
}

// ---- Statics: Remove --------------------------

WeatherSchema.statics.removeOld = function (): Promise<any> {
    return this.deleteMany({
        date: {
            $lte: moment().add(-24, 'hours').toDate()
        }
    })
}

// ---- Methods ----------------------------------

WeatherSchema.methods.needsUpdate = function (): boolean {
    const diff = Math.abs(moment().diff(this.lastUpdate))

    // Updates if difference > 10 minutes
    return diff > 10 * 60 * 1000
}

WeatherSchema.methods.needsLocationFieldsUpdate = function (): boolean {
    // Try to update fields if no name or no country field
    return !this.name || !this.country
}

WeatherSchema.methods.checkUpdate = function (
    isDaily = false
): Promise<IWeatherSchema> {
    if (isDaily) this.needsUpdate() ? this.updateDaily() : this

    return this.needsUpdate() ? this.updateCurrent() : this
}

WeatherSchema.methods.checkLocationFieldsUpdate = function (): Promise<
    IWeatherSchema
> {
    return this.needsLocationFieldsUpdate() ? this.updateLocationFields() : this
}

WeatherSchema.methods.updateCurrent = function (): Promise<IWeatherSchema> {
    return Weather.fetchCurrent(this.latitude, this.longitude).then((data) => {
        this.temperature = data.main.temp
        this.wind = data.wind.speed
        this.humidity = data.main.humidity
        this.weather = data.weather[0].main
        this.date = new Date(data.dt * 1000)
        this.lastUpdate = new Date()

        return this.save()
    })
}

WeatherSchema.methods.updateDaily = function (): Promise<IWeatherSchema> {
    return Weather.fetchDaily(this.latitude, this.longitude).then((data) => {
        const entry = data.daily.find(
            (elem) => elem.dt * 1000 == this.date.getTime()
        )

        if (entry) {
            this.temperature = entry.temp.day
            this.wind = entry.wind_speed
            this.humidity = entry.humidity
            this.weather = entry.weather[0].main
            this.lastUpdate = new Date()

            return this.save()
        }

        return this
    })
}

WeatherSchema.methods.updateLocationFields = function (): Promise<
    IWeatherSchema
> {
    return Weather.fetchCurrent(this.latitude, this.longitude).then((data) => {
        if (data.name) this.name = data.name
        if (data.sys.country) this.country = data.sys.country

        return this
    })
}

// ---- Main export ------------------------------

export const Weather = model<IWeatherSchema, IWeather>('Weather', WeatherSchema)
