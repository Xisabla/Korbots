export const OpenweatherCurrentAPI: API = {
    name: 'openweather:current',
    baseUrl: 'https://api.openweathermap.org/data/2.5/weather',
    envKeyEntry: 'API_OPENWEATHERMAP_KEY'
}

export const OpenweatherOnecallAPI: API = {
    name: 'openweather:onecall',
    baseUrl: 'https://api.openweathermap.org/data/2.5/onecall',
    envKeyEntry: 'API_OPENWEATHERMAP_KEY'
}

export const MapquestGeocodingAPI: API = {
    name: 'mapquest:geoconding',
    baseUrl: 'http://open.mapquestapi.com/geocoding/v1/address',
    envKeyEntry: 'API_MAPQUEST_KEY'
}
