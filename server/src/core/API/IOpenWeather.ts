// ---- Error Response ---------------------------

/**
 * Content of an Error Response from Openweather API
 */
export interface OpenweatherAPIError {
    cod: string
    message: string
}

// ---- Success Response -------------------------

/**
 * Content of a Current Response from OpenWeather API
 */
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

// ---- Onecall ----------------------------------

/**
 * Content of a One-Call Response from OpenWeather API
 */
export interface OpenweatherOnecallAPIResponse {
    lat: number
    lon: number
    timezone: string
    timezone_offset: number
    daily?: OpenweatherOnecallAPIDailyElement[]
}

/**
 * Content of a One-Call Response fetching daily data from OpenWeather API
 */
export interface OpenweatherDailyAPIResponse
    extends OpenweatherOnecallAPIResponse {
    daily: OpenweatherOnecallAPIDailyElement[]
}

// ---- Onecall: Daily ---------------------------

/**
 * Content of the "daily" element of a One-Call Response
 */
export interface OpenweatherOnecallAPIDailyElement {
    dt: number
    sunrise: number
    sunset: number
    temp: {
        day: number
        min: number
        max: number
        night: number
        eve: number
        morn: number
    }
    feels_like?: {
        day: number
        night: number
        eve: number
        morn: number
    }
    pressure: number
    humidity: number
    dew_point?: number
    wind_speed: number
    wind_deg?: number
    rain?: number
    snow?: number
    visibility?: number
    weather: OpenweatherAPIWeatherStatus[]
    clouds: number
    uvi: number
}

// ---- Helpers ----------------------------------

/**
 * Content of a "weather" element
 */
export interface OpenweatherAPIWeatherStatus {
    id: number
    main: string
    description: string
    icon: string
}
