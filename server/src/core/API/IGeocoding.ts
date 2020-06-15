export interface MapquestGeocodingAPIResponse {
    results: {
        [index: number]: {
            locations: {
                [index: number]: {
                    adminArea1: string
                    adminArea2: string
                    adminArea3: string
                    adminArea4: string
                    adminArea5: string
                    adminArea6: string
                    latLng: {
                        lat: number
                        lng: number
                    }
                }
            }
        }
    }
}
