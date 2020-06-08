// ---- Error Response ---------------------------

export interface OpenweatherAPIError {
    cod: string
    message: string
}

// ---- Success Response -------------------------

export interface OpenweatherCurrentAPIResponse {
    coord: {
        lon: number
        lat: number
    }
    weather: OpenweatherAPIWeatherStatus[]
    base: string
    main: {
        temp: number
        feels_like: number
        pressure: number
        humidity: number
        temp_min: number
        temp_max: number
        sea_level?: number
        grnd_level?: number
    }
    visibility?: number
    wind: {
        speed: number
        deg: number
        gust?: number
    }
    cloud: {
        all: number
    }
    rain?: {
        '1h'?: number
        '3h'?: number
    }
    snow?: {
        '1h'?: number
        '3h'?: number
    }
    dt: number
    sys: {
        type?: number
        id?: number
        message?: number
        country?: string
        sunrise: number
        sunset: number
    }
    timezone: number
    id: number
    name: string
    cod: number
}

// ---- Helpers ----------------------------------

export interface OpenweatherAPIWeatherStatus {
    id: number
    main: string
    description: string
    icon: string
}
