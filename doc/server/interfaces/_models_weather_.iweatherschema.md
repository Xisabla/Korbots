[korbots-server](../README.md) › ["models/Weather"](../modules/_models_weather_.md) › [IWeatherSchema](_models_weather_.iweatherschema.md)

# Interface: IWeatherSchema

Detailed Weather Document (WeatherSchema) interface

## Hierarchy

* Document

  ↳ **IWeatherSchema**

## Index

### Properties

* [__v](_models_weather_.iweatherschema.md#optional-__v)
* [collection](_models_weather_.iweatherschema.md#collection)
* [country](_models_weather_.iweatherschema.md#optional-country)
* [date](_models_weather_.iweatherschema.md#date)
* [db](_models_weather_.iweatherschema.md#db)
* [humidity](_models_weather_.iweatherschema.md#humidity)
* [id](_models_weather_.iweatherschema.md#optional-id)
* [lastUpdate](_models_weather_.iweatherschema.md#lastupdate)
* [latitude](_models_weather_.iweatherschema.md#latitude)
* [longitude](_models_weather_.iweatherschema.md#longitude)
* [name](_models_weather_.iweatherschema.md#optional-name)
* [schema](_models_weather_.iweatherschema.md#schema)
* [temperature](_models_weather_.iweatherschema.md#temperature)
* [updateScore](_models_weather_.iweatherschema.md#updatescore)
* [weather](_models_weather_.iweatherschema.md#weather)
* [weatherDescription](_models_weather_.iweatherschema.md#weatherdescription)
* [weatherIcon](_models_weather_.iweatherschema.md#weathericon)
* [wind](_models_weather_.iweatherschema.md#wind)

### Methods

* [$isDeleted](_models_weather_.iweatherschema.md#isdeleted)
* [addListener](_models_weather_.iweatherschema.md#addlistener)
* [checkLocationFieldsUpdate](_models_weather_.iweatherschema.md#checklocationfieldsupdate)
* [checkUpdate](_models_weather_.iweatherschema.md#checkupdate)
* [decrementUpdateScore](_models_weather_.iweatherschema.md#decrementupdatescore)
* [deleteOne](_models_weather_.iweatherschema.md#deleteone)
* [emit](_models_weather_.iweatherschema.md#emit)
* [eventNames](_models_weather_.iweatherschema.md#eventnames)
* [getMaxListeners](_models_weather_.iweatherschema.md#getmaxlisteners)
* [increment](_models_weather_.iweatherschema.md#increment)
* [incrementUpdateScore](_models_weather_.iweatherschema.md#incrementupdatescore)
* [listenerCount](_models_weather_.iweatherschema.md#listenercount)
* [listeners](_models_weather_.iweatherschema.md#listeners)
* [model](_models_weather_.iweatherschema.md#model)
* [needsLocationFieldsUpdate](_models_weather_.iweatherschema.md#needslocationfieldsupdate)
* [needsUpdate](_models_weather_.iweatherschema.md#needsupdate)
* [off](_models_weather_.iweatherschema.md#off)
* [on](_models_weather_.iweatherschema.md#on)
* [once](_models_weather_.iweatherschema.md#once)
* [prependListener](_models_weather_.iweatherschema.md#prependlistener)
* [prependOnceListener](_models_weather_.iweatherschema.md#prependoncelistener)
* [rawListeners](_models_weather_.iweatherschema.md#rawlisteners)
* [remove](_models_weather_.iweatherschema.md#remove)
* [removeAllListeners](_models_weather_.iweatherschema.md#removealllisteners)
* [removeListener](_models_weather_.iweatherschema.md#removelistener)
* [save](_models_weather_.iweatherschema.md#save)
* [setMaxListeners](_models_weather_.iweatherschema.md#setmaxlisteners)
* [updateCurrent](_models_weather_.iweatherschema.md#updatecurrent)
* [updateDaily](_models_weather_.iweatherschema.md#updatedaily)
* [updateLocationFields](_models_weather_.iweatherschema.md#updatelocationfields)

## Properties

### `Optional` __v

• **__v**? : *number*

*Inherited from [IHoroscopeSchema](_models_horoscope_.ihoroscopeschema.md).[__v](_models_horoscope_.ihoroscopeschema.md#optional-__v)*

Defined in node_modules/@types/mongoose/index.d.ts:3684

Version using default version key. See http://mongoosejs.com/docs/guide.html#versionKey
If you're using another key, you will have to access it using []: doc[_myVersionKey]

___

###  collection

• **collection**: *Collection*

*Inherited from [IHoroscopeSchema](_models_horoscope_.ihoroscopeschema.md).[collection](_models_horoscope_.ihoroscopeschema.md#collection)*

Defined in node_modules/@types/mongoose/index.d.ts:3705

Collection the model uses.

___

### `Optional` country

• **country**? : *string*

*Defined in [src/models/Weather.ts:59](https://github.com/Xisabla/Korbots/blob/177cb32/server/src/models/Weather.ts#L59)*

Country of the location

___

###  date

• **date**: *Date*

*Defined in [src/models/Weather.ts:63](https://github.com/Xisabla/Korbots/blob/177cb32/server/src/models/Weather.ts#L63)*

Date of the forecast

___

###  db

• **db**: *Connection*

*Inherited from [IHoroscopeSchema](_models_horoscope_.ihoroscopeschema.md).[db](_models_horoscope_.ihoroscopeschema.md#db)*

Defined in node_modules/@types/mongoose/index.d.ts:3708

Connection the model uses.

___

###  humidity

• **humidity**: *number*

*Defined in [src/models/Weather.ts:45](https://github.com/Xisabla/Korbots/blob/177cb32/server/src/models/Weather.ts#L45)*

Humidity in %

___

### `Optional` id

• **id**? : *any*

*Inherited from [IHoroscopeSchema](_models_horoscope_.ihoroscopeschema.md).[id](_models_horoscope_.ihoroscopeschema.md#optional-id)*

Defined in node_modules/@types/mongoose/index.d.ts:1655

Virtual getter that by default returns the document's _id field cast to a string,
or in the case of ObjectIds, its hexString. This id getter may be disabled by
passing the option { id: false } at schema construction time. If disabled, id
behaves like any other field on a document and can be assigned any value.

___

###  lastUpdate

• **lastUpdate**: *Date*

*Defined in [src/models/Weather.ts:65](https://github.com/Xisabla/Korbots/blob/177cb32/server/src/models/Weather.ts#L65)*

Last update from the internal database

___

###  latitude

• **latitude**: *number*

*Defined in [src/models/Weather.ts:55](https://github.com/Xisabla/Korbots/blob/177cb32/server/src/models/Weather.ts#L55)*

Latitude of the location

___

###  longitude

• **longitude**: *number*

*Defined in [src/models/Weather.ts:57](https://github.com/Xisabla/Korbots/blob/177cb32/server/src/models/Weather.ts#L57)*

Longitude of the location

___

### `Optional` name

• **name**? : *string*

*Defined in [src/models/Weather.ts:61](https://github.com/Xisabla/Korbots/blob/177cb32/server/src/models/Weather.ts#L61)*

City name of the location

___

###  schema

• **schema**: *Schema*

*Inherited from [IHoroscopeSchema](_models_horoscope_.ihoroscopeschema.md).[schema](_models_horoscope_.ihoroscopeschema.md#schema)*

Defined in node_modules/@types/mongoose/index.d.ts:3711

Schema the model uses.

___

###  temperature

• **temperature**: *number*

*Defined in [src/models/Weather.ts:43](https://github.com/Xisabla/Korbots/blob/177cb32/server/src/models/Weather.ts#L43)*

Temperature in Ke

___

###  updateScore

• **updateScore**: *number*

*Defined in [src/models/Weather.ts:67](https://github.com/Xisabla/Korbots/blob/177cb32/server/src/models/Weather.ts#L67)*

Score that increase on update checking, decrease on cron update

___

###  weather

• **weather**: *string*

*Defined in [src/models/Weather.ts:49](https://github.com/Xisabla/Korbots/blob/177cb32/server/src/models/Weather.ts#L49)*

Weather short description

___

###  weatherDescription

• **weatherDescription**: *string*

*Defined in [src/models/Weather.ts:51](https://github.com/Xisabla/Korbots/blob/177cb32/server/src/models/Weather.ts#L51)*

Weather complete description

___

###  weatherIcon

• **weatherIcon**: *string*

*Defined in [src/models/Weather.ts:53](https://github.com/Xisabla/Korbots/blob/177cb32/server/src/models/Weather.ts#L53)*

Weahter icon ID from Openweather API

___

###  wind

• **wind**: *number*

*Defined in [src/models/Weather.ts:47](https://github.com/Xisabla/Korbots/blob/177cb32/server/src/models/Weather.ts#L47)*

Wind speed in m/s

## Methods

###  $isDeleted

▸ **$isDeleted**(`isDeleted`: boolean): *void*

*Inherited from [IHoroscopeSchema](_models_horoscope_.ihoroscopeschema.md).[$isDeleted](_models_horoscope_.ihoroscopeschema.md#isdeleted)*

Defined in node_modules/@types/mongoose/index.d.ts:3654

Override whether mongoose thinks this doc is deleted or not

**Parameters:**

Name | Type |
------ | ------ |
`isDeleted` | boolean |

**Returns:** *void*

▸ **$isDeleted**(): *boolean*

*Inherited from [IHoroscopeSchema](_models_horoscope_.ihoroscopeschema.md).[$isDeleted](_models_horoscope_.ihoroscopeschema.md#isdeleted)*

Defined in node_modules/@types/mongoose/index.d.ts:3656

whether mongoose thinks this doc is deleted.

**Returns:** *boolean*

___

###  addListener

▸ **addListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [IHoroscopeSchema](_models_horoscope_.ihoroscopeschema.md).[addListener](_models_horoscope_.ihoroscopeschema.md#addlistener)*

Defined in node_modules/@types/node/globals.d.ts:550

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  checkLocationFieldsUpdate

▸ **checkLocationFieldsUpdate**(): *Promise‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

*Defined in [src/models/Weather.ts:126](https://github.com/Xisabla/Korbots/blob/177cb32/server/src/models/Weather.ts#L126)*

Check if the Documents needs to have it's location fields updated and update them if needed (calls updateLocationFields if needsLocationFieldsUpdate returns true)

**Returns:** *Promise‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

The updated Document (save Promise) or the same Document as before if no update performed

___

###  checkUpdate

▸ **checkUpdate**(`isDaily?`: boolean): *Promise‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

*Defined in [src/models/Weather.ts:121](https://github.com/Xisabla/Korbots/blob/177cb32/server/src/models/Weather.ts#L121)*

Check if the the Document needs to be updated and update it if needed (calls updateCurrent/updateDaily if needsUpdate returns true)

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isDaily?` | boolean | Set on true if the Document is a Daily Forecast |

**Returns:** *Promise‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

The updated Document (save Promise) or the same Document as before if no update performed

For a Current entry:
```typescript
entry.checkUpdate().then(...)
```

For a Daily entry:
```typescript
entry.checkUpdate(true).then(...)
```

___

###  decrementUpdateScore

▸ **decrementUpdateScore**(`value?`: number): *Promise‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

*Defined in [src/models/Weather.ts:75](https://github.com/Xisabla/Korbots/blob/177cb32/server/src/models/Weather.ts#L75)*

Decrement the value of updateScore

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value?` | number | Value to subtract to the current updateScore(default: 0.2)  |

**Returns:** *Promise‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

___

###  deleteOne

▸ **deleteOne**(`fn?`: function): *Promise‹this›*

*Inherited from [IHoroscopeSchema](_models_horoscope_.ihoroscopeschema.md).[deleteOne](_models_horoscope_.ihoroscopeschema.md#deleteone)*

Defined in node_modules/@types/mongoose/index.d.ts:3668

Deletes the document from the db.

**Parameters:**

▪`Optional`  **fn**: *function*

optional callback

▸ (`err`: any, `product`: this): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | any |
`product` | this |

**Returns:** *Promise‹this›*

___

###  emit

▸ **emit**(`event`: string | symbol, ...`args`: any[]): *boolean*

*Inherited from [IHoroscopeSchema](_models_horoscope_.ihoroscopeschema.md).[emit](_models_horoscope_.ihoroscopeschema.md#emit)*

Defined in node_modules/@types/node/globals.d.ts:560

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`...args` | any[] |

**Returns:** *boolean*

___

###  eventNames

▸ **eventNames**(): *Array‹string | symbol›*

*Inherited from [IHoroscopeSchema](_models_horoscope_.ihoroscopeschema.md).[eventNames](_models_horoscope_.ihoroscopeschema.md#eventnames)*

Defined in node_modules/@types/node/globals.d.ts:565

**Returns:** *Array‹string | symbol›*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from [IHoroscopeSchema](_models_horoscope_.ihoroscopeschema.md).[getMaxListeners](_models_horoscope_.ihoroscopeschema.md#getmaxlisteners)*

Defined in node_modules/@types/node/globals.d.ts:557

**Returns:** *number*

___

###  increment

▸ **increment**(): *this*

*Inherited from [IHoroscopeSchema](_models_horoscope_.ihoroscopeschema.md).[increment](_models_horoscope_.ihoroscopeschema.md#increment)*

Defined in node_modules/@types/mongoose/index.d.ts:3645

Signal that we desire an increment of this documents version.

**Returns:** *this*

___

###  incrementUpdateScore

▸ **incrementUpdateScore**(`value?`: number): *Promise‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

*Defined in [src/models/Weather.ts:81](https://github.com/Xisabla/Korbots/blob/177cb32/server/src/models/Weather.ts#L81)*

Increment the value of updateScore

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value?` | number | Value to add to the current updateScore (default: 1)  |

**Returns:** *Promise‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

___

###  listenerCount

▸ **listenerCount**(`type`: string | symbol): *number*

*Inherited from [IHoroscopeSchema](_models_horoscope_.ihoroscopeschema.md).[listenerCount](_models_horoscope_.ihoroscopeschema.md#listenercount)*

Defined in node_modules/@types/node/globals.d.ts:561

**Parameters:**

Name | Type |
------ | ------ |
`type` | string &#124; symbol |

**Returns:** *number*

___

###  listeners

▸ **listeners**(`event`: string | symbol): *Function[]*

*Inherited from [IHoroscopeSchema](_models_horoscope_.ihoroscopeschema.md).[listeners](_models_horoscope_.ihoroscopeschema.md#listeners)*

Defined in node_modules/@types/node/globals.d.ts:558

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  model

▸ **model**‹**T**›(`name`: string): *[Model](_models_horoscope_.ihoroscope.md#model)‹T›*

*Inherited from [IHoroscopeSchema](_models_horoscope_.ihoroscopeschema.md).[model](_models_horoscope_.ihoroscopeschema.md#model)*

Defined in node_modules/@types/mongoose/index.d.ts:3651

Returns another Model instance.

**Type parameters:**

▪ **T**: *Document*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | model name  |

**Returns:** *[Model](_models_horoscope_.ihoroscope.md#model)‹T›*

___

###  needsLocationFieldsUpdate

▸ **needsLocationFieldsUpdate**(): *boolean*

*Defined in [src/models/Weather.ts:105](https://github.com/Xisabla/Korbots/blob/177cb32/server/src/models/Weather.ts#L105)*

**Returns:** *boolean*

True if the current Document name of country fields are empty and needs to be updated

```typescript
if entry.needsLocationFieldsUpdate() {
     entry.updateLocationFields().then(...)
}
```

___

###  needsUpdate

▸ **needsUpdate**(): *boolean*

*Defined in [src/models/Weather.ts:95](https://github.com/Xisabla/Korbots/blob/177cb32/server/src/models/Weather.ts#L95)*

**Returns:** *boolean*

True if the current Document needs to be updated from the API data

```typescript
if entry.needsUpdate() {
     entry.updateCurrent().then(...)
}
```

___

###  off

▸ **off**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [IHoroscopeSchema](_models_horoscope_.ihoroscopeschema.md).[off](_models_horoscope_.ihoroscopeschema.md#off)*

Defined in node_modules/@types/node/globals.d.ts:554

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  on

▸ **on**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [IHoroscopeSchema](_models_horoscope_.ihoroscopeschema.md).[on](_models_horoscope_.ihoroscopeschema.md#on)*

Defined in node_modules/@types/node/globals.d.ts:551

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  once

▸ **once**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [IHoroscopeSchema](_models_horoscope_.ihoroscopeschema.md).[once](_models_horoscope_.ihoroscopeschema.md#once)*

Defined in node_modules/@types/node/globals.d.ts:552

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  prependListener

▸ **prependListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [IHoroscopeSchema](_models_horoscope_.ihoroscopeschema.md).[prependListener](_models_horoscope_.ihoroscopeschema.md#prependlistener)*

Defined in node_modules/@types/node/globals.d.ts:563

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  prependOnceListener

▸ **prependOnceListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [IHoroscopeSchema](_models_horoscope_.ihoroscopeschema.md).[prependOnceListener](_models_horoscope_.ihoroscopeschema.md#prependoncelistener)*

Defined in node_modules/@types/node/globals.d.ts:564

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  rawListeners

▸ **rawListeners**(`event`: string | symbol): *Function[]*

*Inherited from [IHoroscopeSchema](_models_horoscope_.ihoroscopeschema.md).[rawListeners](_models_horoscope_.ihoroscopeschema.md#rawlisteners)*

Defined in node_modules/@types/node/globals.d.ts:559

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  remove

▸ **remove**(`fn?`: function): *Promise‹this›*

*Inherited from [IHoroscopeSchema](_models_horoscope_.ihoroscopeschema.md).[remove](_models_horoscope_.ihoroscopeschema.md#remove)*

Defined in node_modules/@types/mongoose/index.d.ts:3662

Removes this document from the db.

**Parameters:**

▪`Optional`  **fn**: *function*

optional callback

▸ (`err`: any, `product`: this): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | any |
`product` | this |

**Returns:** *Promise‹this›*

___

###  removeAllListeners

▸ **removeAllListeners**(`event?`: string | symbol): *this*

*Inherited from [IHoroscopeSchema](_models_horoscope_.ihoroscopeschema.md).[removeAllListeners](_models_horoscope_.ihoroscopeschema.md#removealllisteners)*

Defined in node_modules/@types/node/globals.d.ts:555

**Parameters:**

Name | Type |
------ | ------ |
`event?` | string &#124; symbol |

**Returns:** *this*

___

###  removeListener

▸ **removeListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [IHoroscopeSchema](_models_horoscope_.ihoroscopeschema.md).[removeListener](_models_horoscope_.ihoroscopeschema.md#removelistener)*

Defined in node_modules/@types/node/globals.d.ts:553

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  save

▸ **save**(`options?`: SaveOptions, `fn?`: function): *Promise‹this›*

*Inherited from [IHoroscopeSchema](_models_horoscope_.ihoroscopeschema.md).[save](_models_horoscope_.ihoroscopeschema.md#save)*

Defined in node_modules/@types/mongoose/index.d.ts:3677

Saves this document.

**Parameters:**

▪`Optional`  **options**: *SaveOptions*

options optional options

▪`Optional`  **fn**: *function*

optional callback

▸ (`err`: any, `product`: this): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | any |
`product` | this |

**Returns:** *Promise‹this›*

▸ **save**(`fn?`: function): *Promise‹this›*

*Inherited from [IHoroscopeSchema](_models_horoscope_.ihoroscopeschema.md).[save](_models_horoscope_.ihoroscopeschema.md#save)*

Defined in node_modules/@types/mongoose/index.d.ts:3678

**Parameters:**

▪`Optional`  **fn**: *function*

▸ (`err`: any, `product`: this): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | any |
`product` | this |

**Returns:** *Promise‹this›*

___

###  setMaxListeners

▸ **setMaxListeners**(`n`: number): *this*

*Inherited from [IHoroscopeSchema](_models_horoscope_.ihoroscopeschema.md).[setMaxListeners](_models_horoscope_.ihoroscopeschema.md#setmaxlisteners)*

Defined in node_modules/@types/node/globals.d.ts:556

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *this*

___

###  updateCurrent

▸ **updateCurrent**(): *Promise‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

*Defined in [src/models/Weather.ts:134](https://github.com/Xisabla/Korbots/blob/177cb32/server/src/models/Weather.ts#L134)*

Update the main fields of the Document dealing with Current Weather data

**Returns:** *Promise‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

The updated Document (save Promise)

___

###  updateDaily

▸ **updateDaily**(): *Promise‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

*Defined in [src/models/Weather.ts:139](https://github.com/Xisabla/Korbots/blob/177cb32/server/src/models/Weather.ts#L139)*

Update the main fields of the Document dealing with Daily Weather data

**Returns:** *Promise‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

The updated Document (save Promise)

___

###  updateLocationFields

▸ **updateLocationFields**(): *Promise‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

*Defined in [src/models/Weather.ts:144](https://github.com/Xisabla/Korbots/blob/177cb32/server/src/models/Weather.ts#L144)*

Update the location fields of the Document, will look for the name and country fields on a Current Weather API call

**Returns:** *Promise‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

The updated Document (save Promise)
