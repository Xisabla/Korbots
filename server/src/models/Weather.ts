import moment from 'moment'
import { Document, Model, model, Schema } from 'mongoose'
import fetch from 'node-fetch'

import {
    OpenweatherCurrentAPIResponse,
    OpenweatherDailyAPIResponse
} from '../core/API/IOpenWeather'
import Application from '../core/Application'

// ---- Input Interfaces -------------------------

export interface LocationCoordinates {
    /** Latitude */
    lat: number
    /** Longitude */
    lon: number
}

/** Location can be coordinates or city name or "city_name,country_code", which are strings */
export type Location = LocationCoordinates | string

// TODO: Use 'Location' instead of 'lat' and 'lon', also make a method to find coordinates from city name for Daily entries (they only work with coordinate)
//  However, use city name (if it is a string) for Current
//  Change only the content of fetching methods, and only declaration of the others

// ---- Schema -----------------------------------

/**
 * Mongoose Schema of the Weather Model Document, works in the "weather" collection
 * See "Document" inside all the documentation of this file as instance of this Schema
 */
export const WeatherSchema = new Schema(
    {
        temperature: { type: Number, required: true },
        humidity: { type: Number, required: true },
        wind: { type: Number, required: true },
        weather: { type: String, required: true },
        weatherDescription: { type: String, required: true },
        latitude: { type: Number, required: true },
        longitude: { type: Number, required: true },
        country: String,
        name: String,
        date: { type: Date, required: true },
        lastUpdate: { type: Date, required: true },
        updateScore: { type: Number, required: true }
    },
    { collection: 'weather' }
)

/**
 * Detailed Weather Document (WeatherSchema) interface
 */
export interface IWeatherSchema extends Document {
    /** Temperature in Ke */
    temperature: number
    /** Humidity in % */
    humidity: number
    /** Wind speed in m/s */
    wind: number
    /** Weather short description */
    weather: string
    /** Weather complete description */
    weatherDescription: string
    /** Latitude of the location */
    latitude: number
    /** Longitude of the location */
    longitude: number
    /** Country of the location */
    country?: string
    /** City name of the location */
    name?: string
    /** Date of the forecast */
    date: Date
    /** Last update from the internal database */
    lastUpdate: Date
    /** Score that increase on update checking, decrease on cron update */
    updateScore: number

    // ---- Methods: Modifiers -----------------------

    /**
     * Decrement the value of updateScore
     * @param value Value to subtract to the current updateScore(default: 0.2)
     */
    decrementUpdateScore(value?: number): Promise<IWeatherSchema>

    /**
     * Increment the value of updateScore
     * @param value Value to add to the current updateScore (default: 1)
     */
    incrementUpdateScore(value?: number): Promise<IWeatherSchema>

    // ---- Methods: Checkers ------------------------

    /**
     * @returns True if the current Document needs to be updated from the API data
     *
     *
     *```typescript
     * if entry.needsUpdate() {
     *      entry.updateCurrent().then(...)
     * }
     *```
     */
    needsUpdate(): boolean
    /**
     * @returns True if the current Document name of country fields are empty and needs to be updated
     *
     * ```typescript
     * if entry.needsLocationFieldsUpdate() {
     *      entry.updateLocationFields().then(...)
     * }
     * ```
     */
    needsLocationFieldsUpdate(): boolean
    /**
     * Check if the the Document needs to be updated and update it if needed (calls updateCurrent/updateDaily if needsUpdate returns true)
     * @param isDaily Set on true if the Document is a Daily Forecast
     * @returns The updated Document (save Promise) or the same Document as before if no update performed
     *
     * For a Current entry:
     * ```typescript
     * entry.checkUpdate().then(...)
     * ```
     *
     * For a Daily entry:
     * ```typescript
     * entry.checkUpdate(true).then(...)
     * ```
     */
    checkUpdate(isDaily?: boolean): Promise<IWeatherSchema>
    /**
     * Check if the Documents needs to have it's location fields updated and update them if needed (calls updateLocationFields if needsLocationFieldsUpdate returns true)
     * @returns The updated Document (save Promise) or the same Document as before if no update performed
     */
    checkLocationFieldsUpdate(): Promise<IWeatherSchema>

    // Methods: Updaters

    /**
     * Update the main fields of the Document dealing with Current Weather data
     * @returns The updated Document (save Promise)
     */
    updateCurrent(): Promise<IWeatherSchema>
    /**
     * Update the main fields of the Document dealing with Daily Weather data
     * @returns The updated Document (save Promise)
     */
    updateDaily(): Promise<IWeatherSchema>
    /**
     * Update the location fields of the Document, will look for the name and country fields on a Current Weather API call
     * @returns The updated Document (save Promise)
     */
    updateLocationFields(): Promise<IWeatherSchema>
}

// ---- Model ------------------------------------

export interface IWeather extends Model<IWeatherSchema> {
    // ---- Getters ----------------------------------

    /**
     * Look for existing Document or create a new one for the Current weather at the given location
     * Also perform update actions if needed
     * @param lat Latitude of the location
     * @param lon Longitude of the location
     * @returns A promise of the Document
     *
     * ```typescript
     * Weather.getCurrent(51.51, -0.13).then((doc) => {
     *      console.log('London temperature:', doc.temperature)
     * })
     * ```
     */
    getCurrent(lat: number, lon: number): Promise<IWeatherSchema>

    /**
     * Look for existing Document or create a new one for the Daily weather at the given location and date
     * @param lat Latitude of the location
     * @param lon Longitude of the location
     * @param date A promise of the Document
     *
     * ```typescript
     * const tomorrow = moment().add(1, 'days').toDate()
     *
     * Weather.getDaily(51.51, -0.13, tomorrow).then((doc) => {
     *      console.log('London temperature tomorrow:', doc.temperature)
     * })
     * ```
     */
    getDaily(lat: number, lon: number, date: Date): Promise<IWeatherSchema>

    /**
     * Get all (look for or create if needed) the Daily weather Documents for next further days (begin: tomorrow) at the given location
     * @param lat Latitude of the location
     * @param lon Longitude of the location
     * @param further Number of further days (1 means only tomorrow) (default: 4)
     * @returns A promise of an Array of the Documents
     *
     * ```typescript
     * Weather.getDailyAll(51.51, -0.13).then((docs) => {
     *      console.log('London temperature tomorrow:', docs[0].temperature)
     * })
     * ```
     */
    getDailyAll(
        lat: number,
        lon: number,
        further?: number
    ): Promise<IWeatherSchema[]>

    // ---- Finders ----------------------------------

    /**
     * Look for Documents inside the Database for the Current weather at a specific location
     * Time interval: [now - 30 minutes; now + 2 minutes]
     * @param lat Latitude of the location (+/- 0.1 from the API)
     * @param long Longitude of the location (+/- 0.1 from the API)
     * @returns All of the Documents found inside a Promise
     */
    findCurrent(lat: number, long: number): Promise<IWeatherSchema[]>

    /**
     * Same as findCurrent but only returns the first entry
     * @param lat Latitude of the location (+/- 0.1 from the API)
     * @param long  Longitude of the location (+/- 0.1 from the API)
     * @returns A Promise of the Document
     */
    findCurrentOne(lat: number, long: number): Promise<IWeatherSchema>

    /**
     * Look for Documents inside the Database for the Daily weather at a specific location and date
     * Time interval: Same day as date
     * @param lat Latitude of the location (+/- 0.1 from the API)
     * @param long Longitude of the location (+/- 0.1 from the API)
     * @param date Day of the weather entry to look for
     * @returns A Promise of all the Documents (Array)
     */
    findDaily(lat: number, long: number, date: Date): Promise<IWeatherSchema[]>

    /**
     * Same as findDaily but only returns the first entry
     * @param lat Latitude of the location (+/- 0.1 from the API)
     * @param long  Longitude of the location (+/- 0.1 from the API)
     * @param date Day of the weather entry to look for
     * @returns A Promise of the Document
     */
    findDailyOne(lat: number, long: number, date: Date): Promise<IWeatherSchema>

    /**
     * Look for all Daily weather entries for next further days (begin: tomorrow) at the given location
     * @param lat Latitude of the location (+/- 0.1 from the API)
     * @param long  Longitude of the location (+/- 0.1 from the API)
     * @param further Number of further days (1 means only tomorrow) (default: 4)
     * @returns A Promise of an Array of Document
     */
    findDailyAll(
        lat: number,
        lon: number,
        further?: number
    ): Promise<IWeatherSchema[]>

    /**
     * Look for all the Current entries that can be updated
     * @returns A Promise of an Array of Document
     */
    findOutdatedCurrent(): Promise<IWeatherSchema[]>

    // ---- Document ---------------------------------

    /**
     * Run a fetch call to the API for the Current entry of a location and create a Document for it
     * @param lat Latitude of the location
     * @param lon Longitude of the location
     * @returns A Promise of a Document
     */
    fromCurrent(lat: number, lon: number): Promise<IWeatherSchema>

    /**
     * Run a fetch call to the API for the Daily entries of a location and create a Document for each entry
     * @param lat Latitude of the location
     * @param lon Longitude of the location
     * @returns A Promise of a Document Array
     */
    fromDaily(lat: number, long: number): Promise<IWeatherSchema[]>

    // ---- Fetch ------------------------------------

    /**
     * Run a fetch call to the API to get the Current entry of the given location
     * @param lat Latitude of the location
     * @param lon Longitude of the location
     * @returns An Object of all the data queried from the API inside a Promise
     */
    fetchCurrent(
        lat: number,
        lon: number
    ): Promise<OpenweatherCurrentAPIResponse>

    /**
     * Run a fetch call to the API to get the Daily entries of the given location from today
     * @param lat Latitude of the location
     * @param lon Longitude of the location
     * @returns An Object of all the data queried from the API inside a Promise
     */
    fetchDaily(lat: number, lon: number): Promise<OpenweatherDailyAPIResponse>

    // ---- Remove -----------------------------------

    /**
     * Will remove all Documents older than 24 hours to avoid useless entries in the Database
     */
    removeOld(): Promise<any>

    /**
     * Will remove all Documents with a low updateScore
     */
    removeLowScored(): Promise<any>

    /**
     * Will remove all duplicated entries
     */
    // TODO: removeDuplicated(): Promise<any>
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
            return Promise.all(docs.map((doc) => doc.checkUpdate(true)))
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

    const tMax = moment()
        .add(further + 1, 'days')
        .toDate()
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

WeatherSchema.statics.findOutdatedCurrent = function (): Promise<
    IWeatherSchema[]
> {
    const tMax = moment().add(2, 'minutes').toDate()
    const tMin = moment().add(-12, 'hours').toDate()

    return Weather.find({
        date: {
            $gte: tMin,
            $lte: tMax
        },
        // Don't look for the ones that are more updated than prompted
        updateScore: {
            $gte: 0
        }
    }).then((docs) => docs)
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
                weatherDescription: data.weather[0].description,
                latitude: data.coord.lat,
                longitude: data.coord.lon,
                date: new Date(data.dt * 1000),
                lastUpdate: new Date(),
                updateScore: 0
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
                    weatherDescription: day.weather[0].description,
                    latitude: data.lat,
                    longitude: data.lon,
                    date: new Date(day.dt * 1000),
                    lastUpdate: new Date(),
                    updateScore: 0
                })
            )
        })

        // Resolve all documents location fields
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

WeatherSchema.statics.removeLowScored = function (): Promise<any> {
    return this.deleteMany({
        updateScore: {
            $lte: -10
        }
    })
}

// ---- Methods: Modifiers -----------------------

WeatherSchema.methods.decrementUpdateScore = function (
    value = 0.2
): Promise<IWeatherSchema> {
    return this.incrementUpdateScore(-value)
}

WeatherSchema.methods.incrementUpdateScore = function (
    value = 1
): Promise<IWeatherSchema> {
    this.updateScore += value

    return this.save()
}

// ---- Methods: Checkers ------------------------

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
    return this.incrementUpdateScore().then((doc: IWeatherSchema) => {
        // Check if we are updating a Daily entry
        if (isDaily) doc.needsUpdate() ? doc.updateDaily() : doc

        return doc.needsUpdate() ? doc.updateCurrent() : doc
    })
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

        // If no entry found just return the Document
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

/**
 * Weather Model, allow to create, manipulate and save weather entries
 *
 * ```typescript
 * const weatherEntry: IWeatherSchema = new Weather({
 *      temperature: 189,
 *      latitude: 12,
 *      longitude: 14,
 *      humidity: 18,
 *      weather: "sunny",
 *      weatherDescription: "Really sunny"
 *      wind: 1.2
 *      date: new Date(),
 *      lastUpdate: new Date()
 * })
 *
 * weatherEntry.updateCurrent()
 *  .then((entry) => {
 *      entry.save()
 * })
 * ```
 */
export const Weather = model<IWeatherSchema, IWeather>('Weather', WeatherSchema)
