# Socket.IO Events

## Weather Module

| Event Name           | Flow direction  | Description                                                                         | Content                                                |
|----------------------|-----------------|-------------------------------------------------------------------------------------|--------------------------------------------------------|
| weather:getCurrent   | client → server | Ask for the server to get the Current weather information                           | { latitude, longitude }                                |
| weahter:getDaily     | client → server | Ask for the server to get the Daily weather information for a given day             | { latitude, longitude, date }                          |
| weahter:getDailyAll  | client → server | Ask for the server to get the Daily weather information for multiple days           | { latitude, longitude, further }                       |
| weahter:getAll       | client → server | Ask for the server to get the Current and Daily (multiple days) weather information | { latitude, longitude, date }                          |
| weather:currentData  | server → client | Give to the client the Current weather information                                  | IWeatherSchema                                         |
| weather:dailyData    | server → client | Give to the client the Daily weather information for a specific date                | IWeatherSchema                                         |
| weather:dailyAllData | server → client | Give to the client some Daily weather information for multiple days                 | IWeatherSchema[]                                       |
| weather:allData      | server → client | Give to the client the Current and multiple Daily weather information               | { current: IWeatherSchema[], daily: IWeatherSchema[] } |
| weather:error        | server → client | Tell to the client that something went wrong                                        | ?                                                      |