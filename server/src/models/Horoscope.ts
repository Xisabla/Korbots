import moment from 'moment'
import { Document, Model, model, Schema } from 'mongoose'
import fetch from 'node-fetch'

import { IAztroAPIResponse } from '../core/API/IAztro'
import Application from '../core/Application'

export const HoroscopeSchema = new Schema(
    {
        sign: { type: String, required: true },
        date: { type: Date, required: true },
        luckyNumber: { type: Number, required: true },
        mood: String,
        description: { type: String, required: true }
    },
    { collection: 'horoscope' }
)

export interface IHoroscopeSchema extends Document {
    sign: string
    date: Date
    luckyNumber: number
    mood?: string
    description: string

    /** check */
    needsUpdate(): boolean

    /** fetch new properties' values */
    updateCurrent(): Promise<IHoroscopeSchema>
}

export interface IHoroscope extends Model<IHoroscopeSchema> {
    /** check if in database, then if uptodate return doc : else fetch from API and update found doc */
    getCurrent(sign: string): Promise<IHoroscopeSchema>

    /** Search in data base an already fetched horoscope for specific sign (without minding the date) */
    findAstro(sign: string): Promise<IHoroscopeSchema>

    /** fetch from API and create new horoscope document */
    fromCurrent(sign: string): Promise<IHoroscopeSchema>

    /** Get an API response */
    fetchCurrent(sign: string): Promise<IAztroAPIResponse> // day = 'today' in API url
}

// ---- Methods ----------------------------------
/** check if it was fetched the right day (today) */
HoroscopeSchema.methods.needsUpdate = function (): boolean {
    const diff = Math.abs(moment().diff(this.date))

    // Updates if difference > 1 day
    return diff > 60 * 1000 * 60 * 24
}

/** Update by fetching API response */
HoroscopeSchema.methods.updateCurrent = function (): Promise<IHoroscopeSchema> {
    return Horoscope.fetchCurrent(this.sign).then((data) => {
        this.date = data.current_date
        this.luckyNumber = data.lucky_number
        this.mood = data.mood
        this.description = data.description

        return this.save()
    })
}

// ---- Statics ----------------------------------

/** always return the updated horoscope */
HoroscopeSchema.statics.getCurrent = function (
    sign: string
): Promise<IHoroscopeSchema> {
    return Horoscope.findAstro(sign).then((doc) => {
        if (doc == null) return Horoscope.fromCurrent(sign)
        // create new doc if not in DB
        else {
            if (doc.needsUpdate()) return doc.updateCurrent()
            // find one so update to current date
            else return doc // find and already up to date
        }
    })
}

/** Search in data base if document for sign already exist */
HoroscopeSchema.statics.findAstro = function (
    sign: string
): Promise<IHoroscopeSchema> {
    return Horoscope.findOne({
        sign: sign
    }).then((doc) => doc)
}

/** For document creation from Aztro API fetch */
HoroscopeSchema.statics.fromCurrent = function (
    sign: string
): Promise<IHoroscopeSchema> {
    return Horoscope.fetchCurrent(sign).then((data: IAztroAPIResponse) => {
        return new Horoscope({
            date: data.current_date,
            luckyNumber: data.lucky_number,
            mood: data.mood,
            description: data.description // TODO: incorporate our own description generator
        })
    })
}

/** Get information from Aztro API and return a json response */
HoroscopeSchema.statics.fetchCurrent = function (
    sign: string
): Promise<IAztroAPIResponse> {
    const baseUrl = Application.getAPIBaseUrl('aztro')
    const url = `${baseUrl}?sign=${sign}&day=today`

    return fetch(url, { method: 'POST' }).then((res) => res.json())
}

// ---- Model ------------------------------------
export const Horoscope = model<IHoroscopeSchema, IHoroscope>(
    'Horoscope',
    HoroscopeSchema
)
