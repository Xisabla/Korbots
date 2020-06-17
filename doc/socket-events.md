# Socket.IO Events

## [Weather Module](server/classes/_modules_weathermodule_.weathermodule.md)

| Event Name           | Flow direction  | Description                                                                         | Content                                                |
|----------------------|-----------------|-------------------------------------------------------------------------------------|--------------------------------------------------------|
| weather:getCurrent   | client → server | Ask for the server to get the Current weather information                           | { latitude, longitude }                                |
| weather:getDaily    | client → server | Ask for the server to get the Daily weather information for a given day             | { latitude, longitude, date }                          |
| weather:getDailyAll | client → server | Ask for the server to get the Daily weather information for multiple days           | { latitude, longitude, further }                       |
| weather:getAll     | client → server | Ask for the server to get the Current and Daily (multiple days) weather information | { latitude, longitude, date }                          |
| weather:currentData  | server → client | Give to the client the Current weather information                                  | [IWeatherSchema](server/interfaces/_models_weather_.iweatherschema.md)                                         |
| weather:dailyData    | server → client | Give to the client the Daily weather information for a specific date                | [IWeatherSchema](server/interfaces/_models_weather_.iweatherschema.md)                                         |
| weather:dailyAllData | server → client | Give to the client some Daily weather information for multiple days                 | [IWeatherSchema](server/interfaces/_models_weather_.iweatherschema.md)[]                                       |
| weather:allData      | server → client | Give to the client the Current and multiple Daily weather information               | { current: [IWeatherSchema](server/interfaces/_models_weather_.iweatherschema.md)[], daily: [IWeatherSchema](server/interfaces/_models_weather_.iweatherschema.md)[] } |
| weather:autoUpdateCurrent | server → client | Give to the client all the Current entries updated                             | [IWeatherSchema](server/interfaces/_models_weather_.iweatherschema.md)[], |
| weather:error        | server → client | Tell to the client that something went wrong                                        | any                                                   |

## [Music Module](server/classes/_modules_musicmodule_.musicmodule.md)

| Event Name           | Flow direction  | Description                                                                         | Content                                                |
|----------------------|-----------------|-------------------------------------------------------------------------------------|--------------------------------------------------------|
| music:search         | client → server | Ask for the server to search a song from a given source                             | { query, source }                                |
| music:download       | client → server | Ask for the server to download a song from a given source                           | { url, source }                          |
| music:searchResult   | server → client | Give to the client the results of song search                                       | [SearchResult](server/interfaces/_core_imusic_.searchresult.md)[] |
| music:downloading | server → client | Give to the client the status of a Video or an Audio download                          | [YoutubeDownloadStatus](server/interfaces/_core_imusic_.youtubedownloadstatus.md) |
| music:converting      | server → client | Give to the client the status of Video to Audio conversion                         | [ConversionStatus](server/interface/../interfaces/_core_imusic_.conversionstatus.md) |
| music:music          | server → client | Give to the client the Music entry                                                  | [IMusicSchema](server/interfaces/_models_music_.imusicschema.md) |
| music:error          | server → client | Tell to the client that something went wrong                                        | any                                                   |
