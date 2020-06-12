[korbots-server](../README.md) › [Globals](../globals.md) › ["models/Weather"](../modules/_models_weather_.md) › [IWeatherSchema](_models_weather_.iweatherschema.md)

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
* [weather](_models_weather_.iweatherschema.md#weather)
* [weatherDescription](_models_weather_.iweatherschema.md#weatherdescription)
* [wind](_models_weather_.iweatherschema.md#wind)

### Methods

* [$isDeleted](_models_weather_.iweatherschema.md#isdeleted)
* [addListener](_models_weather_.iweatherschema.md#addlistener)
* [checkLocationFieldsUpdate](_models_weather_.iweatherschema.md#checklocationfieldsupdate)
* [checkUpdate](_models_weather_.iweatherschema.md#checkupdate)
* [emit](_models_weather_.iweatherschema.md#emit)
* [eventNames](_models_weather_.iweatherschema.md#eventnames)
* [getMaxListeners](_models_weather_.iweatherschema.md#getmaxlisteners)
* [increment](_models_weather_.iweatherschema.md#increment)
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

*Inherited from [IWeatherSchema](_models_weather_.iweatherschema.md).[__v](_models_weather_.iweatherschema.md#optional-__v)*

Defined in node_modules/@types/mongoose/index.d.ts:3636

Version using default version key. See http://mongoosejs.com/docs/guide.html#versionKey
If you're using another key, you will have to access it using []: doc[_myVersionKey]

___

###  collection

• **collection**: *Collection*

*Inherited from [IWeatherSchema](_models_weather_.iweatherschema.md).[collection](_models_weather_.iweatherschema.md#collection)*

Defined in node_modules/@types/mongoose/index.d.ts:3657

Collection the model uses.

___

### `Optional` country

• **country**? : *string*

*Defined in [src/models/Weather.ts:53](https://github.com/Xisabla/Korbots/blob/e3795ca/server/src/models/Weather.ts#L53)*

Country of the location

___

###  date

• **date**: *Date*

*Defined in [src/models/Weather.ts:57](https://github.com/Xisabla/Korbots/blob/e3795ca/server/src/models/Weather.ts#L57)*

Date of the forecast

___

###  db

• **db**: *Connection*

*Inherited from [IWeatherSchema](_models_weather_.iweatherschema.md).[db](_models_weather_.iweatherschema.md#db)*

Defined in node_modules/@types/mongoose/index.d.ts:3660

Connection the model uses.

___

###  humidity

• **humidity**: *number*

*Defined in [src/models/Weather.ts:41](https://github.com/Xisabla/Korbots/blob/e3795ca/server/src/models/Weather.ts#L41)*

Humidity in %

___

### `Optional` id

• **id**? : *any*

*Inherited from [IWeatherSchema](_models_weather_.iweatherschema.md).[id](_models_weather_.iweatherschema.md#optional-id)*

Defined in node_modules/@types/mongoose/index.d.ts:1624

Virtual getter that by default returns the document's _id field cast to a string,
or in the case of ObjectIds, its hexString. This id getter may be disabled by
passing the option { id: false } at schema construction time. If disabled, id
behaves like any other field on a document and can be assigned any value.

___

###  lastUpdate

• **lastUpdate**: *Date*

*Defined in [src/models/Weather.ts:59](https://github.com/Xisabla/Korbots/blob/e3795ca/server/src/models/Weather.ts#L59)*

Last update from the internal database

___

###  latitude

• **latitude**: *number*

*Defined in [src/models/Weather.ts:49](https://github.com/Xisabla/Korbots/blob/e3795ca/server/src/models/Weather.ts#L49)*

Latitude of the location

___

###  longitude

• **longitude**: *number*

*Defined in [src/models/Weather.ts:51](https://github.com/Xisabla/Korbots/blob/e3795ca/server/src/models/Weather.ts#L51)*

Longitude of the location

___

### `Optional` name

• **name**? : *string*

*Defined in [src/models/Weather.ts:55](https://github.com/Xisabla/Korbots/blob/e3795ca/server/src/models/Weather.ts#L55)*

City name of the location

___

###  schema

• **schema**: *Schema*

*Inherited from [IWeatherSchema](_models_weather_.iweatherschema.md).[schema](_models_weather_.iweatherschema.md#schema)*

Defined in node_modules/@types/mongoose/index.d.ts:3663

Schema the model uses.

___

###  temperature

• **temperature**: *number*

*Defined in [src/models/Weather.ts:39](https://github.com/Xisabla/Korbots/blob/e3795ca/server/src/models/Weather.ts#L39)*

Temperature in Ke

___

###  weather

• **weather**: *string*

*Defined in [src/models/Weather.ts:45](https://github.com/Xisabla/Korbots/blob/e3795ca/server/src/models/Weather.ts#L45)*

Weather short description

___

###  weatherDescription

• **weatherDescription**: *string*

*Defined in [src/models/Weather.ts:47](https://github.com/Xisabla/Korbots/blob/e3795ca/server/src/models/Weather.ts#L47)*

Weather complete description

___

###  wind

• **wind**: *number*

*Defined in [src/models/Weather.ts:43](https://github.com/Xisabla/Korbots/blob/e3795ca/server/src/models/Weather.ts#L43)*

Wind speed in m/s

## Methods

###  $isDeleted

▸ **$isDeleted**(`isDeleted`: boolean): *void*

*Inherited from [IWeatherSchema](_models_weather_.iweatherschema.md).[$isDeleted](_models_weather_.iweatherschema.md#isdeleted)*

Defined in node_modules/@types/mongoose/index.d.ts:3612

Override whether mongoose thinks this doc is deleted or not

**Parameters:**

Name | Type |
------ | ------ |
`isDeleted` | boolean |

**Returns:** *void*

▸ **$isDeleted**(): *boolean*

*Inherited from [IWeatherSchema](_models_weather_.iweatherschema.md).[$isDeleted](_models_weather_.iweatherschema.md#isdeleted)*

Defined in node_modules/@types/mongoose/index.d.ts:3614

whether mongoose thinks this doc is deleted.

**Returns:** *boolean*

___

###  addListener

▸ **addListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [IWeatherSchema](_models_weather_.iweatherschema.md).[addListener](_models_weather_.iweatherschema.md#addlistener)*

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

###  checkLocationFieldsUpdate

▸ **checkLocationFieldsUpdate**(): *Promise‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

*Defined in [src/models/Weather.ts:104](https://github.com/Xisabla/Korbots/blob/e3795ca/server/src/models/Weather.ts#L104)*

Check if the Documents needs to have it's location fields updated and update them if needed (calls updateLocationFields if needsLocationFieldsUpdate returns true)

**Returns:** *Promise‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

The updated Document (save Promise) or the same Document as before if no update performed

___

###  checkUpdate

▸ **checkUpdate**(`isDaily?`: boolean): *Promise‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

*Defined in [src/models/Weather.ts:99](https://github.com/Xisabla/Korbots/blob/e3795ca/server/src/models/Weather.ts#L99)*

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

###  emit

▸ **emit**(`event`: string | symbol, ...`args`: any[]): *boolean*

*Inherited from [IWeatherSchema](_models_weather_.iweatherschema.md).[emit](_models_weather_.iweatherschema.md#emit)*

Defined in node_modules/@types/node/globals.d.ts:563

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`...args` | any[] |

**Returns:** *boolean*

___

###  eventNames

▸ **eventNames**(): *Array‹string | symbol›*

*Inherited from [IWeatherSchema](_models_weather_.iweatherschema.md).[eventNames](_models_weather_.iweatherschema.md#eventnames)*

Defined in node_modules/@types/node/globals.d.ts:568

**Returns:** *Array‹string | symbol›*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from [IWeatherSchema](_models_weather_.iweatherschema.md).[getMaxListeners](_models_weather_.iweatherschema.md#getmaxlisteners)*

Defined in node_modules/@types/node/globals.d.ts:560

**Returns:** *number*

___

###  increment

▸ **increment**(): *this*

*Inherited from [IWeatherSchema](_models_weather_.iweatherschema.md).[increment](_models_weather_.iweatherschema.md#increment)*

Defined in node_modules/@types/mongoose/index.d.ts:3603

Signal that we desire an increment of this documents version.

**Returns:** *this*

___

###  listenerCount

▸ **listenerCount**(`type`: string | symbol): *number*

*Inherited from [IWeatherSchema](_models_weather_.iweatherschema.md).[listenerCount](_models_weather_.iweatherschema.md#listenercount)*

Defined in node_modules/@types/node/globals.d.ts:564

**Parameters:**

Name | Type |
------ | ------ |
`type` | string &#124; symbol |

**Returns:** *number*

___

###  listeners

▸ **listeners**(`event`: string | symbol): *Function[]*

*Inherited from [IWeatherSchema](_models_weather_.iweatherschema.md).[listeners](_models_weather_.iweatherschema.md#listeners)*

Defined in node_modules/@types/node/globals.d.ts:561

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  model

▸ **model**‹**T**›(`name`: string): *[Model](_models_weather_.iweather.md#model)‹T›*

*Inherited from [IWeatherSchema](_models_weather_.iweatherschema.md).[model](_models_weather_.iweatherschema.md#model)*

Defined in node_modules/@types/mongoose/index.d.ts:3609

Returns another Model instance.

**Type parameters:**

▪ **T**: *Document*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | model name  |

**Returns:** *[Model](_models_weather_.iweather.md#model)‹T›*

___

###  needsLocationFieldsUpdate

▸ **needsLocationFieldsUpdate**(): *boolean*

*Defined in [src/models/Weather.ts:83](https://github.com/Xisabla/Korbots/blob/e3795ca/server/src/models/Weather.ts#L83)*

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

*Defined in [src/models/Weather.ts:73](https://github.com/Xisabla/Korbots/blob/e3795ca/server/src/models/Weather.ts#L73)*

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

*Inherited from [IWeatherSchema](_models_weather_.iweatherschema.md).[off](_models_weather_.iweatherschema.md#off)*

Defined in node_modules/@types/node/globals.d.ts:557

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

*Inherited from [IWeatherSchema](_models_weather_.iweatherschema.md).[on](_models_weather_.iweatherschema.md#on)*

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

###  once

▸ **once**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [IWeatherSchema](_models_weather_.iweatherschema.md).[once](_models_weather_.iweatherschema.md#once)*

Defined in node_modules/@types/node/globals.d.ts:555

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

*Inherited from [IWeatherSchema](_models_weather_.iweatherschema.md).[prependListener](_models_weather_.iweatherschema.md#prependlistener)*

Defined in node_modules/@types/node/globals.d.ts:566

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

*Inherited from [IWeatherSchema](_models_weather_.iweatherschema.md).[prependOnceListener](_models_weather_.iweatherschema.md#prependoncelistener)*

Defined in node_modules/@types/node/globals.d.ts:567

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

*Inherited from [IWeatherSchema](_models_weather_.iweatherschema.md).[rawListeners](_models_weather_.iweatherschema.md#rawlisteners)*

Defined in node_modules/@types/node/globals.d.ts:562

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  remove

▸ **remove**(`fn?`: function): *Promise‹this›*

*Inherited from [IWeatherSchema](_models_weather_.iweatherschema.md).[remove](_models_weather_.iweatherschema.md#remove)*

Defined in node_modules/@types/mongoose/index.d.ts:3620

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

*Inherited from [IWeatherSchema](_models_weather_.iweatherschema.md).[removeAllListeners](_models_weather_.iweatherschema.md#removealllisteners)*

Defined in node_modules/@types/node/globals.d.ts:558

**Parameters:**

Name | Type |
------ | ------ |
`event?` | string &#124; symbol |

**Returns:** *this*

___

###  removeListener

▸ **removeListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [IWeatherSchema](_models_weather_.iweatherschema.md).[removeListener](_models_weather_.iweatherschema.md#removelistener)*

Defined in node_modules/@types/node/globals.d.ts:556

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

*Inherited from [IWeatherSchema](_models_weather_.iweatherschema.md).[save](_models_weather_.iweatherschema.md#save)*

Defined in node_modules/@types/mongoose/index.d.ts:3629

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

*Inherited from [IWeatherSchema](_models_weather_.iweatherschema.md).[save](_models_weather_.iweatherschema.md#save)*

Defined in node_modules/@types/mongoose/index.d.ts:3630

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

*Inherited from [IWeatherSchema](_models_weather_.iweatherschema.md).[setMaxListeners](_models_weather_.iweatherschema.md#setmaxlisteners)*

Defined in node_modules/@types/node/globals.d.ts:559

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *this*

___

###  updateCurrent

▸ **updateCurrent**(): *Promise‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

*Defined in [src/models/Weather.ts:112](https://github.com/Xisabla/Korbots/blob/e3795ca/server/src/models/Weather.ts#L112)*

Update the main fields of the Document dealing with Current Weather data

**Returns:** *Promise‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

The updated Document (save Promise)

___

###  updateDaily

▸ **updateDaily**(): *Promise‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

*Defined in [src/models/Weather.ts:117](https://github.com/Xisabla/Korbots/blob/e3795ca/server/src/models/Weather.ts#L117)*

Update the main fields of the Document dealing with Daily Weather data

**Returns:** *Promise‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

The updated Document (save Promise)

___

###  updateLocationFields

▸ **updateLocationFields**(): *Promise‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

*Defined in [src/models/Weather.ts:122](https://github.com/Xisabla/Korbots/blob/e3795ca/server/src/models/Weather.ts#L122)*

Update the location fields of the Document, will look for the name and country fields on a Current Weather API call

**Returns:** *Promise‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

The updated Document (save Promise)
