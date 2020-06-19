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

/**
 * Mongoose Document of the Location Model
 */
export const LocationSchema = new Schema(
    {
        latitude: { type: Number, required: true },
        longitude: { type: Number, required: true },
        city: { type: String, required: true },
        country: { type: String, required: true }
    },
    { collection: 'location' }
)

/**
 * Detailed Location Document
 */
export interface ILocationSchema extends Document {
    /** Latitude of the Location */
    latitude: number
    /** Longitude of the Location */
    longitude: number
    /** City of the Location */
    city: string
    /** Country of the Location */
    country: string
}

// ---- Model ------------------------------------

export interface ILocation extends Model<ILocationSchema> {
    /**
     * Get the coordinates of a City
     * @param city City of Location
     * @param country Country where the city is
     * @returns A Promise with the coordinates
     */
    getCoordinates(city: string, country?: string): Promise<Coordinates>

    /**
     * Look for a Location in the database
     * @param city City of Location
     * @param country Country where the city is
     * @returns A Promise with the coordinates (or empty)
     */
    findLocation(city: string, country?: string): Promise<ILocationSchema>

    /**
     * Call the API for the given City and Country
     * @param city City of Location
     * @param country Country where the city is
     * @returns A Promise of a Response of the API
     */
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
