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

export const AztroAPI: API = {
    name: 'aztro',
    baseUrl: 'https://aztro.sameerkumar.website',
    envKeyEntry: ''
}

export const MapquestGeocodingAPI: API = {
    name: 'mapquest:geoconding',
    baseUrl: 'http://open.mapquestapi.com/geocoding/v1/address',
    envKeyEntry: 'API_MAPQUEST_KEY'
}

export const GoogleYoutubeAPI: API = {
    name: 'google:youtube',
    baseUrl: 'https://www.googleapis.com/auth/youtube.readonly',
    envKeyEntry: 'API_YOUTUBE_KEY'
}
