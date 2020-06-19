/**
 * Content of the Response from a MapquestGeocondingAPI Request
 */
export interface MapquestGeocodingAPIResponse {
    info: {
        statuscode: number
        copyright: {
            text: string
            imageUrl: string
            imageAltText: string
        }
        messages: string[]
    }
    options: {
        maxResults: number
        thumbMaps: boolean
        ignoreLatLngInput: boolean
    }
    results: {
        [index: number]: {
            providedLocation: {
                location: string
            }
            locations: {
                [index: number]: {
                    /** Country */
                    adminArea1: string
                    /** State */
                    adminArea3?: string
                    /** County */
                    adminArea4?: string
                    /** City */
                    adminArea5?: string
                    /** Neighborhood */
                    adminArea6?: string
                    postalCode: string
                    latLng: {
                        lat: number
                        lng: number
                    }
                    mapUrl: string
                }
            }
        }
    }
}
