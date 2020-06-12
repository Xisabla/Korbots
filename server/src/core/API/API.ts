/** Interface of API */
interface API {
    /** The name of the API, required to store it into the Application API Store */
    name: string
    /** Base url of the API for fetching */
    baseUrl: string
    /** The entry of the api key inside the .env file eg: API_KEY_OPENWEATHER */
    envKeyEntry: string
}

/**
 * Same as API but with the key inside
 */
interface APIwk extends API {
    /** Key of the API */
    key: string
}
