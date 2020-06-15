[korbots-server](../README.md) › ["models/Location"](../modules/_models_location_.md) › [ILocationSchema](_models_location_.ilocationschema.md)

# Interface: ILocationSchema

## Hierarchy

* Document

  ↳ **ILocationSchema**

## Index

### Properties

* [__v](_models_location_.ilocationschema.md#optional-__v)
* [city](_models_location_.ilocationschema.md#city)
* [collection](_models_location_.ilocationschema.md#collection)
* [country](_models_location_.ilocationschema.md#country)
* [db](_models_location_.ilocationschema.md#db)
* [id](_models_location_.ilocationschema.md#optional-id)
* [latitude](_models_location_.ilocationschema.md#latitude)
* [longitude](_models_location_.ilocationschema.md#longitude)
* [schema](_models_location_.ilocationschema.md#schema)

### Methods

* [$isDeleted](_models_location_.ilocationschema.md#isdeleted)
* [addListener](_models_location_.ilocationschema.md#addlistener)
* [emit](_models_location_.ilocationschema.md#emit)
* [eventNames](_models_location_.ilocationschema.md#eventnames)
* [getMaxListeners](_models_location_.ilocationschema.md#getmaxlisteners)
* [increment](_models_location_.ilocationschema.md#increment)
* [listenerCount](_models_location_.ilocationschema.md#listenercount)
* [listeners](_models_location_.ilocationschema.md#listeners)
* [model](_models_location_.ilocationschema.md#model)
* [off](_models_location_.ilocationschema.md#off)
* [on](_models_location_.ilocationschema.md#on)
* [once](_models_location_.ilocationschema.md#once)
* [prependListener](_models_location_.ilocationschema.md#prependlistener)
* [prependOnceListener](_models_location_.ilocationschema.md#prependoncelistener)
* [rawListeners](_models_location_.ilocationschema.md#rawlisteners)
* [remove](_models_location_.ilocationschema.md#remove)
* [removeAllListeners](_models_location_.ilocationschema.md#removealllisteners)
* [removeListener](_models_location_.ilocationschema.md#removelistener)
* [save](_models_location_.ilocationschema.md#save)
* [setMaxListeners](_models_location_.ilocationschema.md#setmaxlisteners)

## Properties

### `Optional` __v

• **__v**? : *number*

*Inherited from [ILocationSchema](_models_location_.ilocationschema.md).[__v](_models_location_.ilocationschema.md#optional-__v)*

Defined in node_modules/@types/mongoose/index.d.ts:3636

Version using default version key. See http://mongoosejs.com/docs/guide.html#versionKey
If you're using another key, you will have to access it using []: doc[_myVersionKey]

___

###  city

• **city**: *string*

*Defined in [src/models/Location.ts:29](https://github.com/Xisabla/Korbots/blob/cba63b6/server/src/models/Location.ts#L29)*

___

###  collection

• **collection**: *Collection*

*Inherited from [ILocationSchema](_models_location_.ilocationschema.md).[collection](_models_location_.ilocationschema.md#collection)*

Defined in node_modules/@types/mongoose/index.d.ts:3657

Collection the model uses.

___

###  country

• **country**: *string*

*Defined in [src/models/Location.ts:30](https://github.com/Xisabla/Korbots/blob/cba63b6/server/src/models/Location.ts#L30)*

___

###  db

• **db**: *Connection*

*Inherited from [ILocationSchema](_models_location_.ilocationschema.md).[db](_models_location_.ilocationschema.md#db)*

Defined in node_modules/@types/mongoose/index.d.ts:3660

Connection the model uses.

___

### `Optional` id

• **id**? : *any*

*Inherited from [ILocationSchema](_models_location_.ilocationschema.md).[id](_models_location_.ilocationschema.md#optional-id)*

Defined in node_modules/@types/mongoose/index.d.ts:1624

Virtual getter that by default returns the document's _id field cast to a string,
or in the case of ObjectIds, its hexString. This id getter may be disabled by
passing the option { id: false } at schema construction time. If disabled, id
behaves like any other field on a document and can be assigned any value.

___

###  latitude

• **latitude**: *number*

*Defined in [src/models/Location.ts:27](https://github.com/Xisabla/Korbots/blob/cba63b6/server/src/models/Location.ts#L27)*

___

###  longitude

• **longitude**: *number*

*Defined in [src/models/Location.ts:28](https://github.com/Xisabla/Korbots/blob/cba63b6/server/src/models/Location.ts#L28)*

___

###  schema

• **schema**: *Schema*

*Inherited from [ILocationSchema](_models_location_.ilocationschema.md).[schema](_models_location_.ilocationschema.md#schema)*

Defined in node_modules/@types/mongoose/index.d.ts:3663

Schema the model uses.

## Methods

###  $isDeleted

▸ **$isDeleted**(`isDeleted`: boolean): *void*

*Inherited from [ILocationSchema](_models_location_.ilocationschema.md).[$isDeleted](_models_location_.ilocationschema.md#isdeleted)*

Defined in node_modules/@types/mongoose/index.d.ts:3612

Override whether mongoose thinks this doc is deleted or not

**Parameters:**

Name | Type |
------ | ------ |
`isDeleted` | boolean |

**Returns:** *void*

▸ **$isDeleted**(): *boolean*

*Inherited from [ILocationSchema](_models_location_.ilocationschema.md).[$isDeleted](_models_location_.ilocationschema.md#isdeleted)*

Defined in node_modules/@types/mongoose/index.d.ts:3614

whether mongoose thinks this doc is deleted.

**Returns:** *boolean*

___

###  addListener

▸ **addListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [ILocationSchema](_models_location_.ilocationschema.md).[addListener](_models_location_.ilocationschema.md#addlistener)*

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

*Inherited from [ILocationSchema](_models_location_.ilocationschema.md).[emit](_models_location_.ilocationschema.md#emit)*

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

*Inherited from [ILocationSchema](_models_location_.ilocationschema.md).[eventNames](_models_location_.ilocationschema.md#eventnames)*

Defined in node_modules/@types/node/globals.d.ts:568

**Returns:** *Array‹string | symbol›*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from [ILocationSchema](_models_location_.ilocationschema.md).[getMaxListeners](_models_location_.ilocationschema.md#getmaxlisteners)*

Defined in node_modules/@types/node/globals.d.ts:560

**Returns:** *number*

___

###  increment

▸ **increment**(): *this*

*Inherited from [ILocationSchema](_models_location_.ilocationschema.md).[increment](_models_location_.ilocationschema.md#increment)*

Defined in node_modules/@types/mongoose/index.d.ts:3603

Signal that we desire an increment of this documents version.

**Returns:** *this*

___

###  listenerCount

▸ **listenerCount**(`type`: string | symbol): *number*

*Inherited from [ILocationSchema](_models_location_.ilocationschema.md).[listenerCount](_models_location_.ilocationschema.md#listenercount)*

Defined in node_modules/@types/node/globals.d.ts:564

**Parameters:**

Name | Type |
------ | ------ |
`type` | string &#124; symbol |

**Returns:** *number*

___

###  listeners

▸ **listeners**(`event`: string | symbol): *Function[]*

*Inherited from [ILocationSchema](_models_location_.ilocationschema.md).[listeners](_models_location_.ilocationschema.md#listeners)*

Defined in node_modules/@types/node/globals.d.ts:561

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  model

▸ **model**‹**T**›(`name`: string): *[Model](_models_location_.ilocation.md#model)‹T›*

*Inherited from [ILocationSchema](_models_location_.ilocationschema.md).[model](_models_location_.ilocationschema.md#model)*

Defined in node_modules/@types/mongoose/index.d.ts:3609

Returns another Model instance.

**Type parameters:**

▪ **T**: *Document*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | model name  |

**Returns:** *[Model](_models_location_.ilocation.md#model)‹T›*

___

###  off

▸ **off**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [ILocationSchema](_models_location_.ilocationschema.md).[off](_models_location_.ilocationschema.md#off)*

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

*Inherited from [ILocationSchema](_models_location_.ilocationschema.md).[on](_models_location_.ilocationschema.md#on)*

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

*Inherited from [ILocationSchema](_models_location_.ilocationschema.md).[once](_models_location_.ilocationschema.md#once)*

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

*Inherited from [ILocationSchema](_models_location_.ilocationschema.md).[prependListener](_models_location_.ilocationschema.md#prependlistener)*

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

*Inherited from [ILocationSchema](_models_location_.ilocationschema.md).[prependOnceListener](_models_location_.ilocationschema.md#prependoncelistener)*

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

*Inherited from [ILocationSchema](_models_location_.ilocationschema.md).[rawListeners](_models_location_.ilocationschema.md#rawlisteners)*

Defined in node_modules/@types/node/globals.d.ts:562

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  remove

▸ **remove**(`fn?`: function): *Promise‹this›*

*Inherited from [ILocationSchema](_models_location_.ilocationschema.md).[remove](_models_location_.ilocationschema.md#remove)*

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

*Inherited from [ILocationSchema](_models_location_.ilocationschema.md).[removeAllListeners](_models_location_.ilocationschema.md#removealllisteners)*

Defined in node_modules/@types/node/globals.d.ts:558

**Parameters:**

Name | Type |
------ | ------ |
`event?` | string &#124; symbol |

**Returns:** *this*

___

###  removeListener

▸ **removeListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [ILocationSchema](_models_location_.ilocationschema.md).[removeListener](_models_location_.ilocationschema.md#removelistener)*

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

*Inherited from [ILocationSchema](_models_location_.ilocationschema.md).[save](_models_location_.ilocationschema.md#save)*

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

*Inherited from [ILocationSchema](_models_location_.ilocationschema.md).[save](_models_location_.ilocationschema.md#save)*

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

*Inherited from [ILocationSchema](_models_location_.ilocationschema.md).[setMaxListeners](_models_location_.ilocationschema.md#setmaxlisteners)*

Defined in node_modules/@types/node/globals.d.ts:559

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *this*