[korbots-server](../README.md) › ["core/API/IOpenWeather"](../modules/_core_api_iopenweather_.md) › [OpenweatherOnecallAPIDailyElement](_core_api_iopenweather_.openweatheronecallapidailyelement.md)

# Interface: OpenweatherOnecallAPIDailyElement

Content of the "daily" element of a One-Call Response

## Hierarchy

* **OpenweatherOnecallAPIDailyElement**

## Index

### Properties

* [clouds](_core_api_iopenweather_.openweatheronecallapidailyelement.md#clouds)
* [dew_point](_core_api_iopenweather_.openweatheronecallapidailyelement.md#optional-dew_point)
* [dt](_core_api_iopenweather_.openweatheronecallapidailyelement.md#dt)
* [feels_like](_core_api_iopenweather_.openweatheronecallapidailyelement.md#optional-feels_like)
* [humidity](_core_api_iopenweather_.openweatheronecallapidailyelement.md#humidity)
* [pressure](_core_api_iopenweather_.openweatheronecallapidailyelement.md#pressure)
* [rain](_core_api_iopenweather_.openweatheronecallapidailyelement.md#optional-rain)
* [snow](_core_api_iopenweather_.openweatheronecallapidailyelement.md#optional-snow)
* [sunrise](_core_api_iopenweather_.openweatheronecallapidailyelement.md#sunrise)
* [sunset](_core_api_iopenweather_.openweatheronecallapidailyelement.md#sunset)
* [temp](_core_api_iopenweather_.openweatheronecallapidailyelement.md#temp)
* [uvi](_core_api_iopenweather_.openweatheronecallapidailyelement.md#uvi)
* [visibility](_core_api_iopenweather_.openweatheronecallapidailyelement.md#optional-visibility)
* [weather](_core_api_iopenweather_.openweatheronecallapidailyelement.md#weather)
* [wind_deg](_core_api_iopenweather_.openweatheronecallapidailyelement.md#optional-wind_deg)
* [wind_speed](_core_api_iopenweather_.openweatheronecallapidailyelement.md#wind_speed)

## Properties

###  clouds

• **clouds**: *number*

*Defined in [src/core/API/IOpenWeather.ts:184](https://github.com/Xisabla/Korbots/blob/6e5e234/server/src/core/API/IOpenWeather.ts#L184)*

Cloudiness in %

___

### `Optional` dew_point

• **dew_point**? : *number*

*Defined in [src/core/API/IOpenWeather.ts:170](https://github.com/Xisabla/Korbots/blob/6e5e234/server/src/core/API/IOpenWeather.ts#L170)*

Atmospheric temperature in K

___

###  dt

• **dt**: *number*

*Defined in [src/core/API/IOpenWeather.ts:134](https://github.com/Xisabla/Korbots/blob/6e5e234/server/src/core/API/IOpenWeather.ts#L134)*

Time of the forecasted data, unix UTC

___

### `Optional` feels_like

• **feels_like**? : *object*

*Defined in [src/core/API/IOpenWeather.ts:155](https://github.com/Xisabla/Korbots/blob/6e5e234/server/src/core/API/IOpenWeather.ts#L155)*

Temperature feels like

#### Type declaration:

* **day**: *number*

* **eve**: *number*

* **morn**: *number*

* **night**: *number*

___

###  humidity

• **humidity**: *number*

*Defined in [src/core/API/IOpenWeather.ts:168](https://github.com/Xisabla/Korbots/blob/6e5e234/server/src/core/API/IOpenWeather.ts#L168)*

Humidity in %

___

###  pressure

• **pressure**: *number*

*Defined in [src/core/API/IOpenWeather.ts:166](https://github.com/Xisabla/Korbots/blob/6e5e234/server/src/core/API/IOpenWeather.ts#L166)*

Pressure on the sea level in hPa

___

### `Optional` rain

• **rain**? : *number*

*Defined in [src/core/API/IOpenWeather.ts:176](https://github.com/Xisabla/Korbots/blob/6e5e234/server/src/core/API/IOpenWeather.ts#L176)*

Rain precipitation in mm

___

### `Optional` snow

• **snow**? : *number*

*Defined in [src/core/API/IOpenWeather.ts:178](https://github.com/Xisabla/Korbots/blob/6e5e234/server/src/core/API/IOpenWeather.ts#L178)*

Snow volume in mm

___

###  sunrise

• **sunrise**: *number*

*Defined in [src/core/API/IOpenWeather.ts:136](https://github.com/Xisabla/Korbots/blob/6e5e234/server/src/core/API/IOpenWeather.ts#L136)*

Sunrise time, unix UTC

___

###  sunset

• **sunset**: *number*

*Defined in [src/core/API/IOpenWeather.ts:138](https://github.com/Xisabla/Korbots/blob/6e5e234/server/src/core/API/IOpenWeather.ts#L138)*

Sunset time, unix UTC

___

###  temp

• **temp**: *object*

*Defined in [src/core/API/IOpenWeather.ts:140](https://github.com/Xisabla/Korbots/blob/6e5e234/server/src/core/API/IOpenWeather.ts#L140)*

Temperature

#### Type declaration:

* **day**: *number*

* **eve**: *number*

* **max**: *number*

* **min**: *number*

* **morn**: *number*

* **night**: *number*

___

###  uvi

• **uvi**: *number*

*Defined in [src/core/API/IOpenWeather.ts:186](https://github.com/Xisabla/Korbots/blob/6e5e234/server/src/core/API/IOpenWeather.ts#L186)*

UV index

___

### `Optional` visibility

• **visibility**? : *number*

*Defined in [src/core/API/IOpenWeather.ts:180](https://github.com/Xisabla/Korbots/blob/6e5e234/server/src/core/API/IOpenWeather.ts#L180)*

Average visibility in m

___

###  weather

• **weather**: *[OpenweatherAPIWeatherStatus](_core_api_iopenweather_.openweatherapiweatherstatus.md)[]*

*Defined in [src/core/API/IOpenWeather.ts:182](https://github.com/Xisabla/Korbots/blob/6e5e234/server/src/core/API/IOpenWeather.ts#L182)*

Weather status

___

### `Optional` wind_deg

• **wind_deg**? : *number*

*Defined in [src/core/API/IOpenWeather.ts:174](https://github.com/Xisabla/Korbots/blob/6e5e234/server/src/core/API/IOpenWeather.ts#L174)*

Wind direction in degrees

___

###  wind_speed

• **wind_speed**: *number*

*Defined in [src/core/API/IOpenWeather.ts:172](https://github.com/Xisabla/Korbots/blob/6e5e234/server/src/core/API/IOpenWeather.ts#L172)*

Wind speed in m/s
