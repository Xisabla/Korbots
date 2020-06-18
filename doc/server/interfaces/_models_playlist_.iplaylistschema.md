[korbots-server](../README.md) › ["models/Playlist"](../modules/_models_playlist_.md) › [IPlaylistSchema](_models_playlist_.iplaylistschema.md)

# Interface: IPlaylistSchema

## Hierarchy

* Document

  ↳ **IPlaylistSchema**

## Index

### Properties

* [__v](_models_playlist_.iplaylistschema.md#optional-__v)
* [collection](_models_playlist_.iplaylistschema.md#collection)
* [creationDate](_models_playlist_.iplaylistschema.md#creationdate)
* [db](_models_playlist_.iplaylistschema.md#db)
* [description](_models_playlist_.iplaylistschema.md#optional-description)
* [duration](_models_playlist_.iplaylistschema.md#duration)
* [id](_models_playlist_.iplaylistschema.md#optional-id)
* [name](_models_playlist_.iplaylistschema.md#name)
* [schema](_models_playlist_.iplaylistschema.md#schema)
* [songs](_models_playlist_.iplaylistschema.md#songs)

### Methods

* [$isDeleted](_models_playlist_.iplaylistschema.md#isdeleted)
* [addListener](_models_playlist_.iplaylistschema.md#addlistener)
* [emit](_models_playlist_.iplaylistschema.md#emit)
* [eventNames](_models_playlist_.iplaylistschema.md#eventnames)
* [getMaxListeners](_models_playlist_.iplaylistschema.md#getmaxlisteners)
* [increment](_models_playlist_.iplaylistschema.md#increment)
* [listenerCount](_models_playlist_.iplaylistschema.md#listenercount)
* [listeners](_models_playlist_.iplaylistschema.md#listeners)
* [model](_models_playlist_.iplaylistschema.md#model)
* [off](_models_playlist_.iplaylistschema.md#off)
* [on](_models_playlist_.iplaylistschema.md#on)
* [once](_models_playlist_.iplaylistschema.md#once)
* [prependListener](_models_playlist_.iplaylistschema.md#prependlistener)
* [prependOnceListener](_models_playlist_.iplaylistschema.md#prependoncelistener)
* [rawListeners](_models_playlist_.iplaylistschema.md#rawlisteners)
* [remove](_models_playlist_.iplaylistschema.md#remove)
* [removeAllListeners](_models_playlist_.iplaylistschema.md#removealllisteners)
* [removeListener](_models_playlist_.iplaylistschema.md#removelistener)
* [removeSong](_models_playlist_.iplaylistschema.md#removesong)
* [removeSongSource](_models_playlist_.iplaylistschema.md#removesongsource)
* [save](_models_playlist_.iplaylistschema.md#save)
* [setMaxListeners](_models_playlist_.iplaylistschema.md#setmaxlisteners)

## Properties

### `Optional` __v

• **__v**? : *number*

*Inherited from [IPlaylistSchema](_models_playlist_.iplaylistschema.md).[__v](_models_playlist_.iplaylistschema.md#optional-__v)*

Defined in node_modules/@types/mongoose/index.d.ts:3636

Version using default version key. See http://mongoosejs.com/docs/guide.html#versionKey
If you're using another key, you will have to access it using []: doc[_myVersionKey]

___

###  collection

• **collection**: *Collection*

*Inherited from [IPlaylistSchema](_models_playlist_.iplaylistschema.md).[collection](_models_playlist_.iplaylistschema.md#collection)*

Defined in node_modules/@types/mongoose/index.d.ts:3657

Collection the model uses.

___

###  creationDate

• **creationDate**: *Date*

*Defined in [src/models/Playlist.ts:32](https://github.com/Xisabla/Korbots/blob/9379d31/server/src/models/Playlist.ts#L32)*

Playlist creation date

___

###  db

• **db**: *Connection*

*Inherited from [IPlaylistSchema](_models_playlist_.iplaylistschema.md).[db](_models_playlist_.iplaylistschema.md#db)*

Defined in node_modules/@types/mongoose/index.d.ts:3660

Connection the model uses.

___

### `Optional` description

• **description**? : *string*

*Defined in [src/models/Playlist.ts:28](https://github.com/Xisabla/Korbots/blob/9379d31/server/src/models/Playlist.ts#L28)*

Description of the playlist

___

###  duration

• **duration**: *number*

*Defined in [src/models/Playlist.ts:30](https://github.com/Xisabla/Korbots/blob/9379d31/server/src/models/Playlist.ts#L30)*

Total duration of the playlist

___

### `Optional` id

• **id**? : *any*

*Inherited from [IPlaylistSchema](_models_playlist_.iplaylistschema.md).[id](_models_playlist_.iplaylistschema.md#optional-id)*

Defined in node_modules/@types/mongoose/index.d.ts:1624

Virtual getter that by default returns the document's _id field cast to a string,
or in the case of ObjectIds, its hexString. This id getter may be disabled by
passing the option { id: false } at schema construction time. If disabled, id
behaves like any other field on a document and can be assigned any value.

___

###  name

• **name**: *string*

*Defined in [src/models/Playlist.ts:26](https://github.com/Xisabla/Korbots/blob/9379d31/server/src/models/Playlist.ts#L26)*

Name of the playlist

___

###  schema

• **schema**: *Schema*

*Inherited from [IPlaylistSchema](_models_playlist_.iplaylistschema.md).[schema](_models_playlist_.iplaylistschema.md#schema)*

Defined in node_modules/@types/mongoose/index.d.ts:3663

Schema the model uses.

___

###  songs

• **songs**: *[ISongSchema](_models_playlist_.isongschema.md)[]*

*Defined in [src/models/Playlist.ts:34](https://github.com/Xisabla/Korbots/blob/9379d31/server/src/models/Playlist.ts#L34)*

Songs of the playlist

## Methods

###  $isDeleted

▸ **$isDeleted**(`isDeleted`: boolean): *void*

*Inherited from [IPlaylistSchema](_models_playlist_.iplaylistschema.md).[$isDeleted](_models_playlist_.iplaylistschema.md#isdeleted)*

Defined in node_modules/@types/mongoose/index.d.ts:3612

Override whether mongoose thinks this doc is deleted or not

**Parameters:**

Name | Type |
------ | ------ |
`isDeleted` | boolean |

**Returns:** *void*

▸ **$isDeleted**(): *boolean*

*Inherited from [IPlaylistSchema](_models_playlist_.iplaylistschema.md).[$isDeleted](_models_playlist_.iplaylistschema.md#isdeleted)*

Defined in node_modules/@types/mongoose/index.d.ts:3614

whether mongoose thinks this doc is deleted.

**Returns:** *boolean*

___

###  addListener

▸ **addListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [IPlaylistSchema](_models_playlist_.iplaylistschema.md).[addListener](_models_playlist_.iplaylistschema.md#addlistener)*

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

*Inherited from [IPlaylistSchema](_models_playlist_.iplaylistschema.md).[emit](_models_playlist_.iplaylistschema.md#emit)*

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

*Inherited from [IPlaylistSchema](_models_playlist_.iplaylistschema.md).[eventNames](_models_playlist_.iplaylistschema.md#eventnames)*

Defined in node_modules/@types/node/globals.d.ts:568

**Returns:** *Array‹string | symbol›*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from [IPlaylistSchema](_models_playlist_.iplaylistschema.md).[getMaxListeners](_models_playlist_.iplaylistschema.md#getmaxlisteners)*

Defined in node_modules/@types/node/globals.d.ts:560

**Returns:** *number*

___

###  increment

▸ **increment**(): *this*

*Inherited from [IPlaylistSchema](_models_playlist_.iplaylistschema.md).[increment](_models_playlist_.iplaylistschema.md#increment)*

Defined in node_modules/@types/mongoose/index.d.ts:3603

Signal that we desire an increment of this documents version.

**Returns:** *this*

___

###  listenerCount

▸ **listenerCount**(`type`: string | symbol): *number*

*Inherited from [IPlaylistSchema](_models_playlist_.iplaylistschema.md).[listenerCount](_models_playlist_.iplaylistschema.md#listenercount)*

Defined in node_modules/@types/node/globals.d.ts:564

**Parameters:**

Name | Type |
------ | ------ |
`type` | string &#124; symbol |

**Returns:** *number*

___

###  listeners

▸ **listeners**(`event`: string | symbol): *Function[]*

*Inherited from [IPlaylistSchema](_models_playlist_.iplaylistschema.md).[listeners](_models_playlist_.iplaylistschema.md#listeners)*

Defined in node_modules/@types/node/globals.d.ts:561

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  model

▸ **model**‹**T**›(`name`: string): *[Model](_models_playlist_.iplaylist.md#model)‹T›*

*Inherited from [IPlaylistSchema](_models_playlist_.iplaylistschema.md).[model](_models_playlist_.iplaylistschema.md#model)*

Defined in node_modules/@types/mongoose/index.d.ts:3609

Returns another Model instance.

**Type parameters:**

▪ **T**: *Document*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | model name  |

**Returns:** *[Model](_models_playlist_.iplaylist.md#model)‹T›*

___

###  off

▸ **off**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [IPlaylistSchema](_models_playlist_.iplaylistschema.md).[off](_models_playlist_.iplaylistschema.md#off)*

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

*Inherited from [IPlaylistSchema](_models_playlist_.iplaylistschema.md).[on](_models_playlist_.iplaylistschema.md#on)*

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

*Inherited from [IPlaylistSchema](_models_playlist_.iplaylistschema.md).[once](_models_playlist_.iplaylistschema.md#once)*

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

*Inherited from [IPlaylistSchema](_models_playlist_.iplaylistschema.md).[prependListener](_models_playlist_.iplaylistschema.md#prependlistener)*

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

*Inherited from [IPlaylistSchema](_models_playlist_.iplaylistschema.md).[prependOnceListener](_models_playlist_.iplaylistschema.md#prependoncelistener)*

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

*Inherited from [IPlaylistSchema](_models_playlist_.iplaylistschema.md).[rawListeners](_models_playlist_.iplaylistschema.md#rawlisteners)*

Defined in node_modules/@types/node/globals.d.ts:562

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  remove

▸ **remove**(`fn?`: function): *Promise‹this›*

*Inherited from [IPlaylistSchema](_models_playlist_.iplaylistschema.md).[remove](_models_playlist_.iplaylistschema.md#remove)*

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

*Inherited from [IPlaylistSchema](_models_playlist_.iplaylistschema.md).[removeAllListeners](_models_playlist_.iplaylistschema.md#removealllisteners)*

Defined in node_modules/@types/node/globals.d.ts:558

**Parameters:**

Name | Type |
------ | ------ |
`event?` | string &#124; symbol |

**Returns:** *this*

___

###  removeListener

▸ **removeListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [IPlaylistSchema](_models_playlist_.iplaylistschema.md).[removeListener](_models_playlist_.iplaylistschema.md#removelistener)*

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

###  removeSong

▸ **removeSong**(`id`: string): *Promise‹[IPlaylistSchema](_models_playlist_.iplaylistschema.md)›*

*Defined in [src/models/Playlist.ts:46](https://github.com/Xisabla/Korbots/blob/9379d31/server/src/models/Playlist.ts#L46)*

Remove a song from the playlist

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | The ID of the Music |

**Returns:** *Promise‹[IPlaylistSchema](_models_playlist_.iplaylistschema.md)›*

A Promise of the Playlist

___

###  removeSongSource

▸ **removeSongSource**(`source`: string, `sourceId`: string): *Promise‹[IPlaylistSchema](_models_playlist_.iplaylistschema.md)›*

*Defined in [src/models/Playlist.ts:53](https://github.com/Xisabla/Korbots/blob/9379d31/server/src/models/Playlist.ts#L53)*

Remove a song from the playlist

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`source` | string | The source of the Music |
`sourceId` | string | The sourceId of the Music |

**Returns:** *Promise‹[IPlaylistSchema](_models_playlist_.iplaylistschema.md)›*

A Promise of the Playlist

___

###  save

▸ **save**(`options?`: SaveOptions, `fn?`: function): *Promise‹this›*

*Inherited from [IPlaylistSchema](_models_playlist_.iplaylistschema.md).[save](_models_playlist_.iplaylistschema.md#save)*

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

*Inherited from [IPlaylistSchema](_models_playlist_.iplaylistschema.md).[save](_models_playlist_.iplaylistschema.md#save)*

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

*Inherited from [IPlaylistSchema](_models_playlist_.iplaylistschema.md).[setMaxListeners](_models_playlist_.iplaylistschema.md#setmaxlisteners)*

Defined in node_modules/@types/node/globals.d.ts:559

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *this*
