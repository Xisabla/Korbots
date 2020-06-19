// ---- Error Response ---------------------------

/**
 * Content of an Error Response from Aztro API
 */
export interface AztroAPIError {
    /** Error code */
    cod: string
    /** Error details */
    message: string
}

// ---- Success Response -------------------------

/**
 * Content of a Current Response from OpenWeather API
 */
export interface IAztroAPIResponse {
    /** Date of the horoscope */
    current_date: string
    /** Compatible sign */
    compatibility: string
    /** Lucky hour */
    lucky_time: string
    /** Lucky number */
    lucky_number: string
    /** Lucky color */
    color: string
    /** Date range for astrological sign determination */
    date_range: string
    /** Mood predicted */
    mood: string
    /** Sentence */
    description: string
}
