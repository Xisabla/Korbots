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
    /** astrological sign */
    sign: string
    /** day of the horoscope telling */
    date: Date
    luckyNumber: number
    mood?: string
    /** horoscope sentence determined from luckyNumber */
    description: string

    /** check if it was fetched the right day (today)
     * @returns true if the difference if bigger than 1 day
     */
    needsUpdate(): boolean

    /** Update by fetching API response
     * @returns the update document (save Promise) for today
     */
    updateCurrent(): Promise<IHoroscopeSchema>
}

export interface IHoroscope extends Model<IHoroscopeSchema> {
    /** Get the current horoscope
     * @param sign (astrological) of the user or his input
     * @returns always the updated Document (Promise) either from database or from API call
     */
    getCurrent(sign: string): Promise<IHoroscopeSchema>

    /** Search in data base if document for sign already exist
     * @param sign (astrological) of the user or his input
     * @returns the Document for specified sign found in a Promise
     */
    findAstro(sign: string): Promise<IHoroscopeSchema>

    /** fetch from API and create new horoscope document for today's horoscope
     * @param sign (astrological) of the user or his input
     * @returns a new horoscope Document in a Promise
     */
    fromCurrent(sign: string): Promise<IHoroscopeSchema>

    /** Get an API response (json) from Aztro API for today's horoscope
     * @param sign (astrological) from user or his input
     * @returns an API response in a Promise
     */
    fetchCurrent(sign: string): Promise<IAztroAPIResponse>
}

// ---- Methods ----------------------------------

HoroscopeSchema.methods.needsUpdate = function (): boolean {
    const diff = Math.abs(moment().diff(this.date))

    return diff > 60 * 1000 * 60 * 24
}

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

HoroscopeSchema.statics.findAstro = function (
    sign: string
): Promise<IHoroscopeSchema> {
    return Horoscope.findOne({
        sign: sign
    }).then((doc) => doc)
}

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
