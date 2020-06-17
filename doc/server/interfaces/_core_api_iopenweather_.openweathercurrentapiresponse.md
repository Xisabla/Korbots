[korbots-server](../README.md) › ["core/API/IOpenWeather"](../modules/_core_api_iopenweather_.md) › [OpenweatherCurrentAPIResponse](_core_api_iopenweather_.openweathercurrentapiresponse.md)

# Interface: OpenweatherCurrentAPIResponse

Content of a Current Response from OpenWeather API

## Hierarchy

* **OpenweatherCurrentAPIResponse**

## Index

### Properties

* [base](_core_api_iopenweather_.openweathercurrentapiresponse.md#base)
* [cloud](_core_api_iopenweather_.openweathercurrentapiresponse.md#cloud)
* [cod](_core_api_iopenweather_.openweathercurrentapiresponse.md#cod)
* [coord](_core_api_iopenweather_.openweathercurrentapiresponse.md#coord)
* [dt](_core_api_iopenweather_.openweathercurrentapiresponse.md#dt)
* [id](_core_api_iopenweather_.openweathercurrentapiresponse.md#id)
* [main](_core_api_iopenweather_.openweathercurrentapiresponse.md#main)
* [name](_core_api_iopenweather_.openweathercurrentapiresponse.md#name)
* [rain](_core_api_iopenweather_.openweathercurrentapiresponse.md#optional-rain)
* [snow](_core_api_iopenweather_.openweathercurrentapiresponse.md#optional-snow)
* [sys](_core_api_iopenweather_.openweathercurrentapiresponse.md#sys)
* [timezone](_core_api_iopenweather_.openweathercurrentapiresponse.md#timezone)
* [visibility](_core_api_iopenweather_.openweathercurrentapiresponse.md#optional-visibility)
* [weather](_core_api_iopenweather_.openweathercurrentapiresponse.md#weather)
* [wind](_core_api_iopenweather_.openweathercurrentapiresponse.md#wind)

## Properties

###  base

• **base**: *string*

*Defined in [src/core/API/IOpenWeather.ts:29](https://github.com/Xisabla/Korbots/blob/84c1655/server/src/core/API/IOpenWeather.ts#L29)*

Internal parameter

___

###  cloud

• **cloud**: *object*

*Defined in [src/core/API/IOpenWeather.ts:59](https://github.com/Xisabla/Korbots/blob/84c1655/server/src/core/API/IOpenWeather.ts#L59)*

#### Type declaration:

* **all**: *number*

___

###  cod

• **cod**: *number*

*Defined in [src/core/API/IOpenWeather.ts:98](https://github.com/Xisabla/Korbots/blob/84c1655/server/src/core/API/IOpenWeather.ts#L98)*

Internal parameter

___

###  coord

• **coord**: *object*

*Defined in [src/core/API/IOpenWeather.ts:20](https://github.com/Xisabla/Korbots/blob/84c1655/server/src/core/API/IOpenWeather.ts#L20)*

Coordinates of the location

#### Type declaration:

* **lat**: *number*

* **lon**: *number*

___

###  dt

• **dt**: *number*

*Defined in [src/core/API/IOpenWeather.ts:76](https://github.com/Xisabla/Korbots/blob/84c1655/server/src/core/API/IOpenWeather.ts#L76)*

Time of the forecasted data, unix UTC

___

###  id

• **id**: *number*

*Defined in [src/core/API/IOpenWeather.ts:94](https://github.com/Xisabla/Korbots/blob/84c1655/server/src/core/API/IOpenWeather.ts#L94)*

City ID

___

###  main

• **main**: *object*

*Defined in [src/core/API/IOpenWeather.ts:31](https://github.com/Xisabla/Korbots/blob/84c1655/server/src/core/API/IOpenWeather.ts#L31)*

Main data

#### Type declaration:

* **feels_like**: *number*

* **grnd_level**? : *number*

* **humidity**: *number*

* **pressure**: *number*

* **sea_level**? : *number*

* **temp**: *number*

* **temp_max**: *number*

* **temp_min**: *number*

___

###  name

• **name**: *string*

*Defined in [src/core/API/IOpenWeather.ts:96](https://github.com/Xisabla/Korbots/blob/84c1655/server/src/core/API/IOpenWeather.ts#L96)*

City name

___

### `Optional` rain

• **rain**? : *object*

*Defined in [src/core/API/IOpenWeather.ts:63](https://github.com/Xisabla/Korbots/blob/84c1655/server/src/core/API/IOpenWeather.ts#L63)*

#### Type declaration:

* **1h**? : *number*

* **3h**? : *number*

___

### `Optional` snow

• **snow**? : *object*

*Defined in [src/core/API/IOpenWeather.ts:69](https://github.com/Xisabla/Korbots/blob/84c1655/server/src/core/API/IOpenWeather.ts#L69)*

#### Type declaration:

* **1h**? : *number*

* **3h**? : *number*

___

###  sys

• **sys**: *object*

*Defined in [src/core/API/IOpenWeather.ts:77](https://github.com/Xisabla/Korbots/blob/84c1655/server/src/core/API/IOpenWeather.ts#L77)*

#### Type declaration:

* **country**? : *string*

* **id**? : *number*

* **message**? : *number*

* **sunrise**: *number*

* **sunset**: *number*

* **type**? : *number*

___

###  timezone

• **timezone**: *number*

*Defined in [src/core/API/IOpenWeather.ts:92](https://github.com/Xisabla/Korbots/blob/84c1655/server/src/core/API/IOpenWeather.ts#L92)*

Shift in seconds from UTC

___

### `Optional` visibility

• **visibility**? : *number*

*Defined in [src/core/API/IOpenWeather.ts:50](https://github.com/Xisabla/Korbots/blob/84c1655/server/src/core/API/IOpenWeather.ts#L50)*

Visibility in %

___

###  weather

• **weather**: *[OpenweatherAPIWeatherStatus](_core_api_iopenweather_.openweatherapiweatherstatus.md)[]*

*Defined in [src/core/API/IOpenWeather.ts:27](https://github.com/Xisabla/Korbots/blob/84c1655/server/src/core/API/IOpenWeather.ts#L27)*

Weather status

___

###  wind

• **wind**: *object*

*Defined in [src/core/API/IOpenWeather.ts:51](https://github.com/Xisabla/Korbots/blob/84c1655/server/src/core/API/IOpenWeather.ts#L51)*

#### Type declaration:

* **deg**: *number*

* **gust**? : *number*

* **speed**: *number*
