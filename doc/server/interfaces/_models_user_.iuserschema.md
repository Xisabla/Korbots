[korbots-server](../README.md) › ["models/User"](../modules/_models_user_.md) › [IUserSchema](_models_user_.iuserschema.md)

# Interface: IUserSchema

## Hierarchy

* Document

  ↳ **IUserSchema**

## Index

### Properties

* [__v](_models_user_.iuserschema.md#optional-__v)
* [collection](_models_user_.iuserschema.md#collection)
* [connected](_models_user_.iuserschema.md#optional-connected)
* [db](_models_user_.iuserschema.md#db)
* [id](_models_user_.iuserschema.md#optional-id)
* [schema](_models_user_.iuserschema.md#schema)
* [socketId](_models_user_.iuserschema.md#optional-socketid)
* [username](_models_user_.iuserschema.md#username)

### Methods

* [$isDeleted](_models_user_.iuserschema.md#isdeleted)
* [addListener](_models_user_.iuserschema.md#addlistener)
* [emit](_models_user_.iuserschema.md#emit)
* [eventNames](_models_user_.iuserschema.md#eventnames)
* [getMaxListeners](_models_user_.iuserschema.md#getmaxlisteners)
* [increment](_models_user_.iuserschema.md#increment)
* [listenerCount](_models_user_.iuserschema.md#listenercount)
* [listeners](_models_user_.iuserschema.md#listeners)
* [model](_models_user_.iuserschema.md#model)
* [off](_models_user_.iuserschema.md#off)
* [on](_models_user_.iuserschema.md#on)
* [once](_models_user_.iuserschema.md#once)
* [prependListener](_models_user_.iuserschema.md#prependlistener)
* [prependOnceListener](_models_user_.iuserschema.md#prependoncelistener)
* [rawListeners](_models_user_.iuserschema.md#rawlisteners)
* [remove](_models_user_.iuserschema.md#remove)
* [removeAllListeners](_models_user_.iuserschema.md#removealllisteners)
* [removeListener](_models_user_.iuserschema.md#removelistener)
* [save](_models_user_.iuserschema.md#save)
* [setMaxListeners](_models_user_.iuserschema.md#setmaxlisteners)

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

### `Optional` connected

• **connected**? : *boolean*

*Defined in [src/models/User.ts:14](https://github.com/Xisabla/Korbots/blob/c7d0b2c/server/src/models/User.ts#L14)*

___

###  db

• **db**: *Connection*

*Inherited from [IWeatherSchema](_models_weather_.iweatherschema.md).[db](_models_weather_.iweatherschema.md#db)*

Defined in node_modules/@types/mongoose/index.d.ts:3660

Connection the model uses.

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

###  schema

• **schema**: *Schema*

*Inherited from [IWeatherSchema](_models_weather_.iweatherschema.md).[schema](_models_weather_.iweatherschema.md#schema)*

Defined in node_modules/@types/mongoose/index.d.ts:3663

Schema the model uses.

___

### `Optional` socketId

• **socketId**? : *string*

*Defined in [src/models/User.ts:15](https://github.com/Xisabla/Korbots/blob/c7d0b2c/server/src/models/User.ts#L15)*

___

###  username

• **username**: *string*

*Defined in [src/models/User.ts:13](https://github.com/Xisabla/Korbots/blob/c7d0b2c/server/src/models/User.ts#L13)*

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
