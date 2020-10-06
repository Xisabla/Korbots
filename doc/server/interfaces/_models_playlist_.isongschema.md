[korbots-server](../README.md) › ["models/Playlist"](../modules/_models_playlist_.md) › [ISongSchema](_models_playlist_.isongschema.md)

# Interface: ISongSchema

## Hierarchy

* Document

  ↳ **ISongSchema**

## Index

### Properties

* [__v](_models_playlist_.isongschema.md#optional-__v)
* [addingDate](_models_playlist_.isongschema.md#addingdate)
* [collection](_models_playlist_.isongschema.md#collection)
* [db](_models_playlist_.isongschema.md#db)
* [id](_models_playlist_.isongschema.md#id)
* [schema](_models_playlist_.isongschema.md#schema)
* [title](_models_playlist_.isongschema.md#title)

### Methods

* [$isDeleted](_models_playlist_.isongschema.md#isdeleted)
* [addListener](_models_playlist_.isongschema.md#addlistener)
* [deleteOne](_models_playlist_.isongschema.md#deleteone)
* [emit](_models_playlist_.isongschema.md#emit)
* [eventNames](_models_playlist_.isongschema.md#eventnames)
* [getMaxListeners](_models_playlist_.isongschema.md#getmaxlisteners)
* [increment](_models_playlist_.isongschema.md#increment)
* [listenerCount](_models_playlist_.isongschema.md#listenercount)
* [listeners](_models_playlist_.isongschema.md#listeners)
* [model](_models_playlist_.isongschema.md#model)
* [off](_models_playlist_.isongschema.md#off)
* [on](_models_playlist_.isongschema.md#on)
* [once](_models_playlist_.isongschema.md#once)
* [prependListener](_models_playlist_.isongschema.md#prependlistener)
* [prependOnceListener](_models_playlist_.isongschema.md#prependoncelistener)
* [rawListeners](_models_playlist_.isongschema.md#rawlisteners)
* [remove](_models_playlist_.isongschema.md#remove)
* [removeAllListeners](_models_playlist_.isongschema.md#removealllisteners)
* [removeListener](_models_playlist_.isongschema.md#removelistener)
* [save](_models_playlist_.isongschema.md#save)
* [setMaxListeners](_models_playlist_.isongschema.md#setmaxlisteners)

## Properties

### `Optional` __v

• **__v**? : *number*

*Inherited from [IHoroscopeSchema](_models_horoscope_.ihoroscopeschema.md).[__v](_models_horoscope_.ihoroscopeschema.md#optional-__v)*

Defined in node_modules/@types/mongoose/index.d.ts:3684

Version using default version key. See http://mongoosejs.com/docs/guide.html#versionKey
If you're using another key, you will have to access it using []: doc[_myVersionKey]

___

###  addingDate

• **addingDate**: *Date*

*Defined in [src/models/Playlist.ts:61](https://github.com/Xisabla/Korbots/blob/177cb32/server/src/models/Playlist.ts#L61)*

___

###  collection

• **collection**: *Collection*

*Inherited from [IHoroscopeSchema](_models_horoscope_.ihoroscopeschema.md).[collection](_models_horoscope_.ihoroscopeschema.md#collection)*

Defined in node_modules/@types/mongoose/index.d.ts:3705

Collection the model uses.

___

###  db

• **db**: *Connection*

*Inherited from [IHoroscopeSchema](_models_horoscope_.ihoroscopeschema.md).[db](_models_horoscope_.ihoroscopeschema.md#db)*

Defined in node_modules/@types/mongoose/index.d.ts:3708

Connection the model uses.

___

###  id

• **id**: *string*

*Overrides [IHoroscopeSchema](_models_horoscope_.ihoroscopeschema.md).[id](_models_horoscope_.ihoroscopeschema.md#optional-id)*

*Defined in [src/models/Playlist.ts:59](https://github.com/Xisabla/Korbots/blob/177cb32/server/src/models/Playlist.ts#L59)*

___

###  schema

• **schema**: *Schema*

*Inherited from [IHoroscopeSchema](_models_horoscope_.ihoroscopeschema.md).[schema](_models_horoscope_.ihoroscopeschema.md#schema)*

Defined in node_modules/@types/mongoose/index.d.ts:3711

Schema the model uses.

___

###  title

• **title**: *string*

*Defined in [src/models/Playlist.ts:60](https://github.com/Xisabla/Korbots/blob/177cb32/server/src/models/Playlist.ts#L60)*

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
