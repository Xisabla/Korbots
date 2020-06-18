import moment from 'moment'
import { Document, Model, model, Schema } from 'mongoose'
import fetch from 'node-fetch'

import { IAztroAPIResponse } from '../core/API/IAztro'
import Application from '../core/Application'
import { sentences } from '../data/sentencesHoroscope.json'

export const HoroscopeSchema = new Schema(
    {
        sign: { type: String, required: true },
        date: { type: Date, required: true },
        luckyNumber: { type: Number, required: true },
        mood: String,
        love: { type: String, required: true },
        work: { type: String, required: true },
        family: { type: String, required: true },
        health: { type: String, required: true }
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
    /** horoscope sentences determined from luckyNumber in 4 categories */
    love: string
    work: string
    family: string
    health: string

    /** Check if it was fetched the right day (today)
     * @returns true if the difference if bigger than 1 day
     */
    needsUpdate(): boolean

    /** Update by fetching API response
     * @returns the update document (save Promise) for today
     */
    updateCurrent(): Promise<IHoroscopeSchema>

    /** Generate the corresponding sentences in the 4 categories depending on the luckyNumber
     * @returns the complete horoscope Document in a Promise
     */
    getSentence(): Promise<IHoroscopeSchema>
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

    return diff > 1 * 1000 * 60 * 60 * 24 // 1 day
}

HoroscopeSchema.methods.updateCurrent = function (): Promise<IHoroscopeSchema> {
    return Horoscope.fetchCurrent(this.sign).then((data) => {
        this.date = data.current_date
        this.luckyNumber = data.lucky_number
        this.mood = data.mood

        return this.getSentence()
    })
}

HoroscopeSchema.methods.getSentence = function (): Promise<IHoroscopeSchema> {
    const s = sentences.find(
        (group) =>
            this.luckyNumber >= group.luckyRange.from &&
            this.luckyNumber <= group.luckyRange.to
    )

    // Update the sentences
    this.love = s.love
    this.work = s.work
    this.family = s.family
    this.health = s.health

    return this.save()
}

// ---- Statics ----------------------------------

HoroscopeSchema.statics.getCurrent = function (
    sign: string
): Promise<IHoroscopeSchema> {
    return Horoscope.findAstro(sign).then((doc) => {
        // create new doc if not in DB
        if (doc == null) return Horoscope.fromCurrent(sign)
        else {
            // find one so update to current date
            if (doc.needsUpdate()) return doc.updateCurrent()
            // find and already up to date
            else return doc
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
        const horoscope = new Horoscope({
            date: data.current_date,
            luckyNumber: data.lucky_number,
            mood: data.mood,
            sign,
            love: 'empty', // defined later at getSentence()
            work: 'empty',
            family: 'empty',
            health: 'empty'
        })

        return horoscope.save().then((doc) => doc.getSentence())
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
