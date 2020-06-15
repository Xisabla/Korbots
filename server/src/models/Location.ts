import { Document, Model, model, Schema } from 'mongoose'
import fetch from 'node-fetch'

import { MapquestGeocodingAPIResponse } from '../core/API/IGeocoding'
import Application from '../core/Application'

// ---- Location interfaces ----------------------

export interface Coordinates {
    lat: number
    lon: number
}

// ---- Schema -----------------------------------

export const LocationSchema = new Schema(
    {
        latitude: { type: Number, required: true },
        longitude: { type: Number, required: true },
        city: { type: String, required: true },
        country: { type: String, required: true }
    },
    { collection: 'location' }
)

export interface ILocationSchema extends Document {
    latitude: number
    longitude: number
    city: string
    country: string

    // methods
}

// ---- Model ------------------------------------

export interface ILocation extends Model<ILocationSchema> {
    getCoordinates(city: string, country?: string): Promise<Coordinates>
    findLocation(city: string, country?: string): Promise<ILocationSchema>
    fetchLocation(
        city: string,
        country?: string
    ): Promise<MapquestGeocodingAPIResponse>
}

// ---- Statics ----------------------------------

LocationSchema.statics.getCoordinates = function (
    city: string,
    country?: string
): Promise<Coordinates> {
    return Location.findLocation(city, country)
        .then((doc) => {
            if (doc) return doc

            return Location.fetchLocation(city, country).then((res) => {
                const { lat, lng } = res.results[0].locations[0].latLng

                const location = new Location({
                    latitude: lat,
                    longitude: lng,
                    city,
                    country: country || res.results[0].locations[0].adminArea1
                })

                return location.save()
            })
        })
        .then((doc) => {
            return { lat: doc.latitude, lon: doc.longitude }
        })
}

LocationSchema.statics.findLocation = function (
    city: string,
    country?: string
): Promise<ILocationSchema> {
    const query: any = { city }
    if (country) query.country = country

    return Location.findOne(query).then((doc) => doc)
}

LocationSchema.statics.fetchLocation = function (
    city: string,
    country?: string
): Promise<MapquestGeocodingAPIResponse> {
    const baseUrl = Application.getAPIBaseUrl('mapquest:geoconding')
    const key = Application.getAPIKey('mapquest:geoconding')
    let url = `${baseUrl}?key=${key}&location=${city}`

    if (country) url += `,${country}`

    return fetch(url).then((res) => res.json())
}

// ---- Main export ------------------------------

export const Location = model<ILocationSchema, ILocation>(
    'Location',
    LocationSchema
)
