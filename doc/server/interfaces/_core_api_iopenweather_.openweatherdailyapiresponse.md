[korbots-server](../README.md) › ["core/API/IOpenWeather"](../modules/_core_api_iopenweather_.md) › [OpenweatherDailyAPIResponse](_core_api_iopenweather_.openweatherdailyapiresponse.md)

# Interface: OpenweatherDailyAPIResponse

Content of a One-Call Response fetching daily data from OpenWeather API

## Hierarchy

* [OpenweatherOnecallAPIResponse](_core_api_iopenweather_.openweatheronecallapiresponse.md)

  ↳ **OpenweatherDailyAPIResponse**

## Index

### Properties

* [daily](_core_api_iopenweather_.openweatherdailyapiresponse.md#daily)
* [lat](_core_api_iopenweather_.openweatherdailyapiresponse.md#lat)
* [lon](_core_api_iopenweather_.openweatherdailyapiresponse.md#lon)
* [timezone](_core_api_iopenweather_.openweatherdailyapiresponse.md#timezone)
* [timezone_offset](_core_api_iopenweather_.openweatherdailyapiresponse.md#timezone_offset)

## Properties

###  daily

• **daily**: *[OpenweatherOnecallAPIDailyElement](_core_api_iopenweather_.openweatheronecallapidailyelement.md)[]*

*Overrides [OpenweatherOnecallAPIResponse](_core_api_iopenweather_.openweatheronecallapiresponse.md).[daily](_core_api_iopenweather_.openweatheronecallapiresponse.md#optional-daily)*

*Defined in [src/core/API/IOpenWeather.ts:124](https://github.com/Xisabla/Korbots/blob/3303bca/server/src/core/API/IOpenWeather.ts#L124)*

___

###  lat

• **lat**: *number*

*Inherited from [OpenweatherOnecallAPIResponse](_core_api_iopenweather_.openweatheronecallapiresponse.md).[lat](_core_api_iopenweather_.openweatheronecallapiresponse.md#lat)*

*Defined in [src/core/API/IOpenWeather.ts:108](https://github.com/Xisabla/Korbots/blob/3303bca/server/src/core/API/IOpenWeather.ts#L108)*

Latitude of the location

___

###  lon

• **lon**: *number*

*Inherited from [OpenweatherOnecallAPIResponse](_core_api_iopenweather_.openweatheronecallapiresponse.md).[lon](_core_api_iopenweather_.openweatheronecallapiresponse.md#lon)*

*Defined in [src/core/API/IOpenWeather.ts:110](https://github.com/Xisabla/Korbots/blob/3303bca/server/src/core/API/IOpenWeather.ts#L110)*

Longitude of the location

___

###  timezone

• **timezone**: *string*

*Inherited from [OpenweatherOnecallAPIResponse](_core_api_iopenweather_.openweatheronecallapiresponse.md).[timezone](_core_api_iopenweather_.openweatheronecallapiresponse.md#timezone)*

*Defined in [src/core/API/IOpenWeather.ts:112](https://github.com/Xisabla/Korbots/blob/3303bca/server/src/core/API/IOpenWeather.ts#L112)*

Timezone for the location

___

###  timezone_offset

• **timezone_offset**: *number*

*Inherited from [OpenweatherOnecallAPIResponse](_core_api_iopenweather_.openweatheronecallapiresponse.md).[timezone_offset](_core_api_iopenweather_.openweatheronecallapiresponse.md#timezone_offset)*

*Defined in [src/core/API/IOpenWeather.ts:114](https://github.com/Xisabla/Korbots/blob/3303bca/server/src/core/API/IOpenWeather.ts#L114)*

Timezone offset: shift in secondes from UTC
