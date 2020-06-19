[korbots-server](../README.md) › ["core/API/IOpenWeather"](../modules/_core_api_iopenweather_.md) › [OpenweatherOnecallAPIResponse](_core_api_iopenweather_.openweatheronecallapiresponse.md)

# Interface: OpenweatherOnecallAPIResponse

Content of a One-Call Response from OpenWeather API

## Hierarchy

* **OpenweatherOnecallAPIResponse**

  ↳ [OpenweatherDailyAPIResponse](_core_api_iopenweather_.openweatherdailyapiresponse.md)

## Index

### Properties

* [daily](_core_api_iopenweather_.openweatheronecallapiresponse.md#optional-daily)
* [lat](_core_api_iopenweather_.openweatheronecallapiresponse.md#lat)
* [lon](_core_api_iopenweather_.openweatheronecallapiresponse.md#lon)
* [timezone](_core_api_iopenweather_.openweatheronecallapiresponse.md#timezone)
* [timezone_offset](_core_api_iopenweather_.openweatheronecallapiresponse.md#timezone_offset)

## Properties

### `Optional` daily

• **daily**? : *[OpenweatherOnecallAPIDailyElement](_core_api_iopenweather_.openweatheronecallapidailyelement.md)[]*

*Defined in [src/core/API/IOpenWeather.ts:116](https://github.com/Xisabla/Korbots/blob/287111c/server/src/core/API/IOpenWeather.ts#L116)*

Daily measurements of next 8 following days

___

###  lat

• **lat**: *number*

*Defined in [src/core/API/IOpenWeather.ts:108](https://github.com/Xisabla/Korbots/blob/287111c/server/src/core/API/IOpenWeather.ts#L108)*

Latitude of the location

___

###  lon

• **lon**: *number*

*Defined in [src/core/API/IOpenWeather.ts:110](https://github.com/Xisabla/Korbots/blob/287111c/server/src/core/API/IOpenWeather.ts#L110)*

Longitude of the location

___

###  timezone

• **timezone**: *string*

*Defined in [src/core/API/IOpenWeather.ts:112](https://github.com/Xisabla/Korbots/blob/287111c/server/src/core/API/IOpenWeather.ts#L112)*

Timezone for the location

___

###  timezone_offset

• **timezone_offset**: *number*

*Defined in [src/core/API/IOpenWeather.ts:114](https://github.com/Xisabla/Korbots/blob/287111c/server/src/core/API/IOpenWeather.ts#L114)*

Timezone offset: shift in secondes from UTC
