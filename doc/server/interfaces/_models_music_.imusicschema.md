[korbots-server](../README.md) › ["models/Music"](../modules/_models_music_.md) › [IMusicSchema](_models_music_.imusicschema.md)

# Interface: IMusicSchema

## Hierarchy

* Document

  ↳ **IMusicSchema**

## Index

### Properties

* [__v](_models_music_.imusicschema.md#optional-__v)
* [collection](_models_music_.imusicschema.md#collection)
* [db](_models_music_.imusicschema.md#db)
* [duration](_models_music_.imusicschema.md#duration)
* [id](_models_music_.imusicschema.md#optional-id)
* [path](_models_music_.imusicschema.md#path)
* [schema](_models_music_.imusicschema.md#schema)
* [source](_models_music_.imusicschema.md#source)
* [sourceId](_models_music_.imusicschema.md#sourceid)
* [thumbnail](_models_music_.imusicschema.md#thumbnail)
* [title](_models_music_.imusicschema.md#title)

### Methods

* [$isDeleted](_models_music_.imusicschema.md#isdeleted)
* [addListener](_models_music_.imusicschema.md#addlistener)
* [addToPlaylist](_models_music_.imusicschema.md#addtoplaylist)
* [addToPlaylists](_models_music_.imusicschema.md#addtoplaylists)
* [emit](_models_music_.imusicschema.md#emit)
* [eventNames](_models_music_.imusicschema.md#eventnames)
* [getMaxListeners](_models_music_.imusicschema.md#getmaxlisteners)
* [getPlaylists](_models_music_.imusicschema.md#getplaylists)
* [increment](_models_music_.imusicschema.md#increment)
* [isOrphan](_models_music_.imusicschema.md#isorphan)
* [listenerCount](_models_music_.imusicschema.md#listenercount)
* [listeners](_models_music_.imusicschema.md#listeners)
* [model](_models_music_.imusicschema.md#model)
* [off](_models_music_.imusicschema.md#off)
* [on](_models_music_.imusicschema.md#on)
* [once](_models_music_.imusicschema.md#once)
* [prependListener](_models_music_.imusicschema.md#prependlistener)
* [prependOnceListener](_models_music_.imusicschema.md#prependoncelistener)
* [rawListeners](_models_music_.imusicschema.md#rawlisteners)
* [remove](_models_music_.imusicschema.md#remove)
* [removeAllListeners](_models_music_.imusicschema.md#removealllisteners)
* [removeListener](_models_music_.imusicschema.md#removelistener)
* [safeRemove](_models_music_.imusicschema.md#saferemove)
* [save](_models_music_.imusicschema.md#save)
* [setMaxListeners](_models_music_.imusicschema.md#setmaxlisteners)

## Properties

### `Optional` __v

• **__v**? : *number*

*Inherited from [IHoroscopeSchema](_models_horoscope_.ihoroscopeschema.md).[__v](_models_horoscope_.ihoroscopeschema.md#optional-__v)*

Defined in node_modules/@types/mongoose/index.d.ts:3636

Version using default version key. See http://mongoosejs.com/docs/guide.html#versionKey
If you're using another key, you will have to access it using []: doc[_myVersionKey]

___

###  collection

• **collection**: *Collection*

*Inherited from [IHoroscopeSchema](_models_horoscope_.ihoroscopeschema.md).[collection](_models_horoscope_.ihoroscopeschema.md#collection)*

Defined in node_modules/@types/mongoose/index.d.ts:3657

Collection the model uses.

___

###  db

• **db**: *Connection*

*Inherited from [IHoroscopeSchema](_models_horoscope_.ihoroscopeschema.md).[db](_models_horoscope_.ihoroscopeschema.md#db)*

Defined in node_modules/@types/mongoose/index.d.ts:3660

Connection the model uses.

___

###  duration

• **duration**: *number*

*Defined in [src/models/Music.ts:24](https://github.com/Xisabla/Korbots/blob/abf6d68/server/src/models/Music.ts#L24)*

Duration of the music

___

### `Optional` id

• **id**? : *any*

*Inherited from [IHoroscopeSchema](_models_horoscope_.ihoroscopeschema.md).[id](_models_horoscope_.ihoroscopeschema.md#optional-id)*

Defined in node_modules/@types/mongoose/index.d.ts:1624

Virtual getter that by default returns the document's _id field cast to a string,
or in the case of ObjectIds, its hexString. This id getter may be disabled by
passing the option { id: false } at schema construction time. If disabled, id
behaves like any other field on a document and can be assigned any value.

___

###  path

• **path**: *string*

*Defined in [src/models/Music.ts:32](https://github.com/Xisabla/Korbots/blob/abf6d68/server/src/models/Music.ts#L32)*

Path of the music in the internal storage

___

###  schema

• **schema**: *Schema*

*Inherited from [IHoroscopeSchema](_models_horoscope_.ihoroscopeschema.md).[schema](_models_horoscope_.ihoroscopeschema.md#schema)*

Defined in node_modules/@types/mongoose/index.d.ts:3663

Schema the model uses.

___

###  source

• **source**: *string*

*Defined in [src/models/Music.ts:30](https://github.com/Xisabla/Korbots/blob/abf6d68/server/src/models/Music.ts#L30)*

Source of the music

___

###  sourceId

• **sourceId**: *string*

*Defined in [src/models/Music.ts:28](https://github.com/Xisabla/Korbots/blob/abf6d68/server/src/models/Music.ts#L28)*

ID of the Source of the music

___

###  thumbnail

• **thumbnail**: *string*

*Defined in [src/models/Music.ts:26](https://github.com/Xisabla/Korbots/blob/abf6d68/server/src/models/Music.ts#L26)*

Thumbnail of the music

___

###  title

• **title**: *string*

*Defined in [src/models/Music.ts:22](https://github.com/Xisabla/Korbots/blob/abf6d68/server/src/models/Music.ts#L22)*

Title of the music

## Methods

###  $isDeleted

▸ **$isDeleted**(`isDeleted`: boolean): *void*

*Inherited from [IHoroscopeSchema](_models_horoscope_.ihoroscopeschema.md).[$isDeleted](_models_horoscope_.ihoroscopeschema.md#isdeleted)*

Defined in node_modules/@types/mongoose/index.d.ts:3612

Override whether mongoose thinks this doc is deleted or not

**Parameters:**

Name | Type |
------ | ------ |
`isDeleted` | boolean |

**Returns:** *void*

▸ **$isDeleted**(): *boolean*

*Inherited from [IHoroscopeSchema](_models_horoscope_.ihoroscopeschema.md).[$isDeleted](_models_horoscope_.ihoroscopeschema.md#isdeleted)*

Defined in node_modules/@types/mongoose/index.d.ts:3614

whether mongoose thinks this doc is deleted.

**Returns:** *boolean*

___

###  addListener

▸ **addListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [IHoroscopeSchema](_models_horoscope_.ihoroscopeschema.md).[addListener](_models_horoscope_.ihoroscopeschema.md#addlistener)*

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

###  addToPlaylist

▸ **addToPlaylist**(`playlist`: string): *Promise‹[IPlaylistSchema](_models_playlist_.iplaylistschema.md)›*

*Defined in [src/models/Music.ts:39](https://github.com/Xisabla/Korbots/blob/abf6d68/server/src/models/Music.ts#L39)*

Add the music to a playlist

**Parameters:**

Name | Type |
------ | ------ |
`playlist` | string |

**Returns:** *Promise‹[IPlaylistSchema](_models_playlist_.iplaylistschema.md)›*

A Promise of the playlist

___

###  addToPlaylists

▸ **addToPlaylists**(`playlist`: string[]): *Promise‹[IPlaylistSchema](_models_playlist_.iplaylistschema.md)[]›*

*Defined in [src/models/Music.ts:45](https://github.com/Xisabla/Korbots/blob/abf6d68/server/src/models/Music.ts#L45)*

Add the music to several playlists

**Parameters:**

Name | Type |
------ | ------ |
`playlist` | string[] |

**Returns:** *Promise‹[IPlaylistSchema](_models_playlist_.iplaylistschema.md)[]›*

A Promise of the playlists

___

###  emit

▸ **emit**(`event`: string | symbol, ...`args`: any[]): *boolean*

*Inherited from [IHoroscopeSchema](_models_horoscope_.ihoroscopeschema.md).[emit](_models_horoscope_.ihoroscopeschema.md#emit)*

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

*Inherited from [IHoroscopeSchema](_models_horoscope_.ihoroscopeschema.md).[eventNames](_models_horoscope_.ihoroscopeschema.md#eventnames)*

Defined in node_modules/@types/node/globals.d.ts:568

**Returns:** *Array‹string | symbol›*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from [IHoroscopeSchema](_models_horoscope_.ihoroscopeschema.md).[getMaxListeners](_models_horoscope_.ihoroscopeschema.md#getmaxlisteners)*

Defined in node_modules/@types/node/globals.d.ts:560

**Returns:** *number*

___

###  getPlaylists

▸ **getPlaylists**(): *Promise‹[IPlaylistSchema](_models_playlist_.iplaylistschema.md)[]›*

*Defined in [src/models/Music.ts:51](https://github.com/Xisabla/Korbots/blob/abf6d68/server/src/models/Music.ts#L51)*

Get all parent playlists of the music

**Returns:** *Promise‹[IPlaylistSchema](_models_playlist_.iplaylistschema.md)[]›*

A Promise of the playlists

___

###  increment

▸ **increment**(): *this*

*Inherited from [IHoroscopeSchema](_models_horoscope_.ihoroscopeschema.md).[increment](_models_horoscope_.ihoroscopeschema.md#increment)*

Defined in node_modules/@types/mongoose/index.d.ts:3603

Signal that we desire an increment of this documents version.

**Returns:** *this*

___

###  isOrphan

▸ **isOrphan**(): *Promise‹boolean›*

*Defined in [src/models/Music.ts:57](https://github.com/Xisabla/Korbots/blob/abf6d68/server/src/models/Music.ts#L57)*

Check if the Music is at least in one playlist

**Returns:** *Promise‹boolean›*

A Promise: true if it has no playlist, false otherwise

___

###  listenerCount

▸ **listenerCount**(`type`: string | symbol): *number*

*Inherited from [IHoroscopeSchema](_models_horoscope_.ihoroscopeschema.md).[listenerCount](_models_horoscope_.ihoroscopeschema.md#listenercount)*

Defined in node_modules/@types/node/globals.d.ts:564

**Parameters:**

Name | Type |
------ | ------ |
`type` | string &#124; symbol |

**Returns:** *number*

___

###  listeners

▸ **listeners**(`event`: string | symbol): *Function[]*

*Inherited from [IHoroscopeSchema](_models_horoscope_.ihoroscopeschema.md).[listeners](_models_horoscope_.ihoroscopeschema.md#listeners)*

Defined in node_modules/@types/node/globals.d.ts:561

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  model

▸ **model**‹**T**›(`name`: string): *[Model](_models_horoscope_.ihoroscope.md#model)‹T›*

*Inherited from [IHoroscopeSchema](_models_horoscope_.ihoroscopeschema.md).[model](_models_horoscope_.ihoroscopeschema.md#model)*

Defined in node_modules/@types/mongoose/index.d.ts:3609

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

*Inherited from [IHoroscopeSchema](_models_horoscope_.ihoroscopeschema.md).[on](_models_horoscope_.ihoroscopeschema.md#on)*

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

*Inherited from [IHoroscopeSchema](_models_horoscope_.ihoroscopeschema.md).[once](_models_horoscope_.ihoroscopeschema.md#once)*

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

*Inherited from [IHoroscopeSchema](_models_horoscope_.ihoroscopeschema.md).[prependListener](_models_horoscope_.ihoroscopeschema.md#prependlistener)*

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

*Inherited from [IHoroscopeSchema](_models_horoscope_.ihoroscopeschema.md).[prependOnceListener](_models_horoscope_.ihoroscopeschema.md#prependoncelistener)*

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

*Inherited from [IHoroscopeSchema](_models_horoscope_.ihoroscopeschema.md).[rawListeners](_models_horoscope_.ihoroscopeschema.md#rawlisteners)*

Defined in node_modules/@types/node/globals.d.ts:562

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  remove

▸ **remove**(`fn?`: function): *Promise‹this›*

*Inherited from [IHoroscopeSchema](_models_horoscope_.ihoroscopeschema.md).[remove](_models_horoscope_.ihoroscopeschema.md#remove)*

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

*Inherited from [IHoroscopeSchema](_models_horoscope_.ihoroscopeschema.md).[removeAllListeners](_models_horoscope_.ihoroscopeschema.md#removealllisteners)*

Defined in node_modules/@types/node/globals.d.ts:558

**Parameters:**

Name | Type |
------ | ------ |
`event?` | string &#124; symbol |

**Returns:** *this*

___

###  removeListener

▸ **removeListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [IHoroscopeSchema](_models_horoscope_.ihoroscopeschema.md).[removeListener](_models_horoscope_.ihoroscopeschema.md#removelistener)*

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

###  safeRemove

▸ **safeRemove**(): *Promise‹[IMusicSchema](_models_music_.imusicschema.md)›*

*Defined in [src/models/Music.ts:63](https://github.com/Xisabla/Korbots/blob/abf6d68/server/src/models/Music.ts#L63)*

Remove the Music from the DB and from all the playlists

**Returns:** *Promise‹[IMusicSchema](_models_music_.imusicschema.md)›*

A Promise of the Music Schema (not in the DB anymore)

___

###  save

▸ **save**(`options?`: SaveOptions, `fn?`: function): *Promise‹this›*

*Inherited from [IHoroscopeSchema](_models_horoscope_.ihoroscopeschema.md).[save](_models_horoscope_.ihoroscopeschema.md#save)*

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

*Inherited from [IHoroscopeSchema](_models_horoscope_.ihoroscopeschema.md).[save](_models_horoscope_.ihoroscopeschema.md#save)*

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

*Inherited from [IHoroscopeSchema](_models_horoscope_.ihoroscopeschema.md).[setMaxListeners](_models_horoscope_.ihoroscopeschema.md#setmaxlisteners)*

Defined in node_modules/@types/node/globals.d.ts:559

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *this*
