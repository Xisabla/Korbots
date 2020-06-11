// ---- Error Response ---------------------------

/**
 * Content of an Error Response from Openweather API
 */
export interface OpenweatherAPIError {
    /** Error code */
    cod: string
    /** Error details */
    message: string
}

// ---- Success Response -------------------------

/**
 * Content of a Current Response from OpenWeather API
 */
export interface OpenweatherCurrentAPIResponse {
    /** Coordinates of the location */
    coord: {
        /** Longitude */
        lon: number
        /** Latitude */
        lat: number
    }
    /** Weather status */
    weather: OpenweatherAPIWeatherStatus[]
    /** Internal parameter */
    base: string
    /** Main data */
    main: {
        /** Average temperature */
        temp: number
        /** Temperature feels like */
        feels_like: number
        /** Atmospheric pressure in hPa */
        pressure: number
        /** Humidity in % */
        humidity: number
        /** Minimum temperature at the moment */
        temp_min: number
        /** Maximum temperature at the moment */
        temp_max: number
        /** Atmospheric pressure at the sea level in hPa */
        sea_level?: number
        /** Atmospheric pressure at the ground level in hPa */
        grnd_level?: number
    }
    /** Visibility in % */
    visibility?: number
    wind: {
        /** Wind speed in m/s */
        speed: number
        /** Wind direction in degrees */
        deg: number
        /** Wind gust in m/s */
        gust?: number
    }
    cloud: {
        /** Cloudiness in % */
        all: number
    }
    rain?: {
        /** Rain volume the last hour in mm */
        '1h'?: number
        /** Rain volume the last 3 hours in mm */
        '3h'?: number
    }
    snow?: {
        /** Snow volume the last hour in mm */
        '1h'?: number
        /** Snow volume the last 3 hours in mm */
        '3h'?: number
    }
    /** Time of the forecasted data, unix UTC */
    dt: number
    sys: {
        /** Internal parameter */
        type?: number
        /** Internal parameter */
        id?: number
        /** Internal parameter */
        message?: number
        /** Country code */
        country?: string
        /** Sunrise time, unix, UTC */
        sunrise: number
        /** Sunset time, unix, UTC */
        sunset: number
    }
    /** Shift in seconds from UTC */
    timezone: number
    /** City ID */
    id: number
    /** City name */
    name: string
    /** Internal parameter */
    cod: number
}

// ---- Onecall ----------------------------------

/**
 * Content of a One-Call Response from OpenWeather API
 */
export interface OpenweatherOnecallAPIResponse {
    /** Latitude of the location */
    lat: number
    /** Longitude of the location */
    lon: number
    /** Timezone for the location */
    timezone: string
    /** Timezone offset: shift in secondes from UTC */
    timezone_offset: number
    /** Daily measurements of next 8 following days */
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
    /** Time of the forecasted data, unix UTC */
    dt: number
    /** Sunrise time, unix UTC */
    sunrise: number
    /** Sunset time, unix UTC */
    sunset: number
    /** Temperature */
    temp: {
        /** Day temperature in K */
        day: number
        /** Minimal temperature in K */
        min: number
        /** Maximal temperature in K */
        max: number
        /** Night temperature in K */
        night: number
        /** Evening temperature in K */
        eve: number
        /** Morning temperature in K */
        morn: number
    }
    /** Temperature feels like */
    feels_like?: {
        /** Day temperature in K */
        day: number
        /** Night temperature in K */
        night: number
        /** Evening temperature in K */
        eve: number
        /** Morning temperature in K */
        morn: number
    }
    /** Pressure on the sea level in hPa */
    pressure: number
    /** Humidity in % */
    humidity: number
    /** Atmospheric temperature in K */
    dew_point?: number
    /** Wind speed in m/s */
    wind_speed: number
    /** Wind direction in degrees */
    wind_deg?: number
    /** Rain precipitation in mm */
    rain?: number
    /** Snow volume in mm */
    snow?: number
    /** Average visibility in m */
    visibility?: number
    /** Weather status */
    weather: OpenweatherAPIWeatherStatus[]
    /** Cloudiness in % */
    clouds: number
    /** UV index */
    uvi: number
}

// ---- Helpers ----------------------------------

/**
 * Content of a "weather" element
 */
export interface OpenweatherAPIWeatherStatus {
    /** ID of the weather status */
    id: number
    /** Status name (short description) */
    main: string
    /** Weather status complete description */
    description: string
    /** Weather status icon name from Openweather site */
    icon: string
}
