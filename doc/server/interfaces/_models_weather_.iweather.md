[korbots-server](../README.md) › ["models/Weather"](../modules/_models_weather_.md) › [IWeather](_models_weather_.iweather.md)

# Interface: IWeather ‹**QueryHelpers**›

## Type parameters

▪ **QueryHelpers**

## Hierarchy

* [Model](_models_horoscope_.ihoroscope.md#model)‹[IWeatherSchema](_models_weather_.iweatherschema.md)›

  ↳ **IWeather**

## Index

### Events

* [constructor](_models_weather_.iweather.md#constructor)

### Properties

* [Model](_models_weather_.iweather.md#model)
* [base](_models_weather_.iweather.md#base)
* [baseModelName](_models_weather_.iweather.md#basemodelname)
* [collection](_models_weather_.iweather.md#collection)
* [db](_models_weather_.iweather.md#db)
* [discriminators](_models_weather_.iweather.md#discriminators)
* [modelName](_models_weather_.iweather.md#modelname)
* [schema](_models_weather_.iweather.md#schema)

### Methods

* [$where](_models_weather_.iweather.md#where)
* [addListener](_models_weather_.iweather.md#addlistener)
* [aggregate](_models_weather_.iweather.md#aggregate)
* [bulkWrite](_models_weather_.iweather.md#bulkwrite)
* [count](_models_weather_.iweather.md#count)
* [countDocuments](_models_weather_.iweather.md#countdocuments)
* [create](_models_weather_.iweather.md#create)
* [createCollection](_models_weather_.iweather.md#createcollection)
* [createIndexes](_models_weather_.iweather.md#createindexes)
* [deleteMany](_models_weather_.iweather.md#deletemany)
* [deleteOne](_models_weather_.iweather.md#deleteone)
* [discriminator](_models_weather_.iweather.md#discriminator)
* [distinct](_models_weather_.iweather.md#distinct)
* [emit](_models_weather_.iweather.md#emit)
* [ensureIndexes](_models_weather_.iweather.md#ensureindexes)
* [estimatedDocumentCount](_models_weather_.iweather.md#estimateddocumentcount)
* [eventNames](_models_weather_.iweather.md#eventnames)
* [exists](_models_weather_.iweather.md#exists)
* [fetchCurrent](_models_weather_.iweather.md#fetchcurrent)
* [fetchDaily](_models_weather_.iweather.md#fetchdaily)
* [find](_models_weather_.iweather.md#find)
* [findById](_models_weather_.iweather.md#findbyid)
* [findByIdAndDelete](_models_weather_.iweather.md#findbyidanddelete)
* [findByIdAndRemove](_models_weather_.iweather.md#findbyidandremove)
* [findByIdAndUpdate](_models_weather_.iweather.md#findbyidandupdate)
* [findCurrent](_models_weather_.iweather.md#findcurrent)
* [findCurrentOne](_models_weather_.iweather.md#findcurrentone)
* [findDaily](_models_weather_.iweather.md#finddaily)
* [findDailyAll](_models_weather_.iweather.md#finddailyall)
* [findDailyOne](_models_weather_.iweather.md#finddailyone)
* [findOne](_models_weather_.iweather.md#findone)
* [findOneAndDelete](_models_weather_.iweather.md#findoneanddelete)
* [findOneAndRemove](_models_weather_.iweather.md#findoneandremove)
* [findOneAndUpdate](_models_weather_.iweather.md#findoneandupdate)
* [findOutdatedCurrent](_models_weather_.iweather.md#findoutdatedcurrent)
* [fromCurrent](_models_weather_.iweather.md#fromcurrent)
* [fromDaily](_models_weather_.iweather.md#fromdaily)
* [geoSearch](_models_weather_.iweather.md#geosearch)
* [getCurrent](_models_weather_.iweather.md#getcurrent)
* [getDaily](_models_weather_.iweather.md#getdaily)
* [getDailyAll](_models_weather_.iweather.md#getdailyall)
* [getMaxListeners](_models_weather_.iweather.md#getmaxlisteners)
* [hydrate](_models_weather_.iweather.md#hydrate)
* [init](_models_weather_.iweather.md#init)
* [insertMany](_models_weather_.iweather.md#insertmany)
* [listIndexes](_models_weather_.iweather.md#listindexes)
* [listenerCount](_models_weather_.iweather.md#listenercount)
* [listeners](_models_weather_.iweather.md#listeners)
* [mapReduce](_models_weather_.iweather.md#mapreduce)
* [model](_models_weather_.iweather.md#model)
* [off](_models_weather_.iweather.md#off)
* [on](_models_weather_.iweather.md#on)
* [once](_models_weather_.iweather.md#once)
* [populate](_models_weather_.iweather.md#populate)
* [prependListener](_models_weather_.iweather.md#prependlistener)
* [prependOnceListener](_models_weather_.iweather.md#prependoncelistener)
* [rawListeners](_models_weather_.iweather.md#rawlisteners)
* [remove](_models_weather_.iweather.md#remove)
* [removeAllListeners](_models_weather_.iweather.md#removealllisteners)
* [removeListener](_models_weather_.iweather.md#removelistener)
* [removeLowScored](_models_weather_.iweather.md#removelowscored)
* [removeOld](_models_weather_.iweather.md#removeold)
* [replaceOne](_models_weather_.iweather.md#replaceone)
* [setMaxListeners](_models_weather_.iweather.md#setmaxlisteners)
* [syncIndexes](_models_weather_.iweather.md#syncindexes)
* [translateAliases](_models_weather_.iweather.md#translatealiases)
* [update](_models_weather_.iweather.md#update)
* [updateMany](_models_weather_.iweather.md#updatemany)
* [updateOne](_models_weather_.iweather.md#updateone)
* [watch](_models_weather_.iweather.md#watch)
* [where](_models_weather_.iweather.md#where)

## Events

###  constructor

• **new IWeather**(`doc?`: any): *[IWeatherSchema](_models_weather_.iweatherschema.md)*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[constructor](_models_horoscope_.ihoroscope.md#constructor)*

Defined in node_modules/@types/mongoose/index.d.ts:3177

Model constructor
Provides the interface to MongoDB collections as well as creates document instances.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`doc?` | any | values with which to create the document |

**Returns:** *[IWeatherSchema](_models_weather_.iweatherschema.md)*

## Properties

###  Model

• **Model**: *[Model](_models_horoscope_.ihoroscope.md#model)‹any›*

Defined in node_modules/@types/mongoose/index.d.ts:3162

___

###  base

• **base**: *typeof mongoose*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[base](_models_horoscope_.ihoroscope.md#base)*

Defined in node_modules/@types/mongoose/index.d.ts:3165

Base Mongoose instance the model uses.

___

###  baseModelName

• **baseModelName**: *string | undefined*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[baseModelName](_models_horoscope_.ihoroscope.md#basemodelname)*

Defined in node_modules/@types/mongoose/index.d.ts:3171

If this is a discriminator model, baseModelName is the
name of the base model.

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

###  discriminators

• **discriminators**: *object | undefined*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[discriminators](_models_horoscope_.ihoroscope.md#discriminators)*

Defined in node_modules/@types/mongoose/index.d.ts:3174

Registered discriminators for this model.

___

###  modelName

• **modelName**: *string*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[modelName](_models_horoscope_.ihoroscope.md#modelname)*

Defined in node_modules/@types/mongoose/index.d.ts:3177

The name of the model

___

###  schema

• **schema**: *Schema*

*Inherited from [IHoroscopeSchema](_models_horoscope_.ihoroscopeschema.md).[schema](_models_horoscope_.ihoroscopeschema.md#schema)*

Defined in node_modules/@types/mongoose/index.d.ts:3711

Schema the model uses.

## Methods

###  $where

▸ **$where**(`argument`: string | Function): *DocumentQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md), [IWeatherSchema](_models_weather_.iweatherschema.md), QueryHelpers› & QueryHelpers*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[$where](_models_horoscope_.ihoroscope.md#where)*

Defined in node_modules/@types/mongoose/index.d.ts:3234

Creates a Query and specifies a $where condition.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`argument` | string &#124; Function | is a javascript string or anonymous function  |

**Returns:** *DocumentQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md), [IWeatherSchema](_models_weather_.iweatherschema.md), QueryHelpers› & QueryHelpers*

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

###  aggregate

▸ **aggregate**‹**U**›(`aggregations?`: any[]): *Aggregate‹U[]›*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[aggregate](_models_horoscope_.ihoroscope.md#aggregate)*

Defined in node_modules/@types/mongoose/index.d.ts:3242

Performs aggregations on the models collection.
If a callback is passed, the aggregate is executed and a Promise is returned.
If a callback is not passed, the aggregate itself is returned.

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`aggregations?` | any[] | pipeline operator(s) or operator array  |

**Returns:** *Aggregate‹U[]›*

▸ **aggregate**‹**U**›(`aggregations`: any[], `cb`: Function): *Promise‹U[]›*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[aggregate](_models_horoscope_.ihoroscope.md#aggregate)*

Defined in node_modules/@types/mongoose/index.d.ts:3243

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`aggregations` | any[] |
`cb` | Function |

**Returns:** *Promise‹U[]›*

___

###  bulkWrite

▸ **bulkWrite**(`writes`: any[], `cb?`: function): *Promise‹BulkWriteOpResultObject›*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[bulkWrite](_models_horoscope_.ihoroscope.md#bulkwrite)*

Defined in node_modules/@types/mongoose/index.d.ts:3224

Sends multiple insertOne, updateOne, updateMany, replaceOne, deleteOne, and/or deleteMany operations to the MongoDB server in one command. This is faster than sending multiple independent operations (like) if you use create()) because with bulkWrite() there is only one round trip to MongoDB.
Mongoose will perform casting on all operations you provide.
This function does not trigger any middleware, not save() nor update(). If you need to trigger save() middleware for every document use create() instead.

**Parameters:**

▪ **writes**: *any[]*

Operations

▪`Optional`  **cb**: *function*

callback

▸ (`err`: any, `res`: BulkWriteOpResultObject): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | any |
`res` | BulkWriteOpResultObject |

**Returns:** *Promise‹BulkWriteOpResultObject›*

`BulkWriteOpResult` if the operation succeeds

▸ **bulkWrite**(`writes`: any[], `options?`: CollectionBulkWriteOptions): *Promise‹BulkWriteOpResultObject›*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[bulkWrite](_models_horoscope_.ihoroscope.md#bulkwrite)*

Defined in node_modules/@types/mongoose/index.d.ts:3225

**Parameters:**

Name | Type |
------ | ------ |
`writes` | any[] |
`options?` | CollectionBulkWriteOptions |

**Returns:** *Promise‹BulkWriteOpResultObject›*

▸ **bulkWrite**(`writes`: any[], `options`: CollectionBulkWriteOptions, `cb`: function): *void*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[bulkWrite](_models_horoscope_.ihoroscope.md#bulkwrite)*

Defined in node_modules/@types/mongoose/index.d.ts:3226

**Parameters:**

▪ **writes**: *any[]*

▪ **options**: *CollectionBulkWriteOptions*

▪ **cb**: *function*

▸ (`err`: any, `res`: BulkWriteOpResultObject): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | any |
`res` | BulkWriteOpResultObject |

**Returns:** *void*

___

###  count

▸ **count**(`conditions`: FilterQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›, `callback?`: function): *Query‹number› & QueryHelpers*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[count](_models_horoscope_.ihoroscope.md#count)*

Defined in node_modules/@types/mongoose/index.d.ts:3246

Counts number of matching documents in a database collection.

**Parameters:**

▪ **conditions**: *FilterQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

▪`Optional`  **callback**: *function*

▸ (`err`: any, `count`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | any |
`count` | number |

**Returns:** *Query‹number› & QueryHelpers*

___

###  countDocuments

▸ **countDocuments**(`callback?`: function): *Query‹number› & QueryHelpers*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[countDocuments](_models_horoscope_.ihoroscope.md#countdocuments)*

Defined in node_modules/@types/mongoose/index.d.ts:3260

Counts number of documents matching `criteria` in a database collection.

If you want to count all documents in a large collection,
use the `estimatedDocumentCount()` instead.
If you call `countDocuments({})`, MongoDB will always execute
a full collection scan and **not** use any indexes.

**Parameters:**

▪`Optional`  **callback**: *function*

▸ (`err`: any, `count`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | any |
`count` | number |

**Returns:** *Query‹number› & QueryHelpers*

▸ **countDocuments**(`criteria`: FilterQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›, `callback?`: function): *Query‹number› & QueryHelpers*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[countDocuments](_models_horoscope_.ihoroscope.md#countdocuments)*

Defined in node_modules/@types/mongoose/index.d.ts:3261

**Parameters:**

▪ **criteria**: *FilterQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

▪`Optional`  **callback**: *function*

▸ (`err`: any, `count`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | any |
`count` | number |

**Returns:** *Query‹number› & QueryHelpers*

___

###  create

▸ **create**‹**TCreate**›(`doc`: CreateQuery‹TCreate›, `options?`: SaveOptions): *Promise‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[create](_models_horoscope_.ihoroscope.md#create)*

Defined in node_modules/@types/mongoose/index.d.ts:3281

Shortcut for saving one or more documents to the database. MyModel.create(docs)
does new MyModel(doc).save() for every doc in docs.
Triggers the save() hook.

**Type parameters:**

▪ **TCreate**

**Parameters:**

Name | Type |
------ | ------ |
`doc` | CreateQuery‹TCreate› |
`options?` | SaveOptions |

**Returns:** *Promise‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

▸ **create**‹**TCreate**›(`doc`: CreateQuery‹TCreate›, `callback?`: function): *Promise‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[create](_models_horoscope_.ihoroscope.md#create)*

Defined in node_modules/@types/mongoose/index.d.ts:3282

**Type parameters:**

▪ **TCreate**

**Parameters:**

▪ **doc**: *CreateQuery‹TCreate›*

▪`Optional`  **callback**: *function*

▸ (`err`: any, `res`: [IWeatherSchema](_models_weather_.iweatherschema.md)[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | any |
`res` | [IWeatherSchema](_models_weather_.iweatherschema.md)[] |

**Returns:** *Promise‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

▸ **create**‹**TCreate**›(`docs`: CreateQuery‹TCreate›[], `callback?`: function): *Promise‹[IWeatherSchema](_models_weather_.iweatherschema.md)[]›*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[create](_models_horoscope_.ihoroscope.md#create)*

Defined in node_modules/@types/mongoose/index.d.ts:3283

**Type parameters:**

▪ **TCreate**

**Parameters:**

▪ **docs**: *CreateQuery‹TCreate›[]*

▪`Optional`  **callback**: *function*

▸ (`err`: any, `res`: [IWeatherSchema](_models_weather_.iweatherschema.md)[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | any |
`res` | [IWeatherSchema](_models_weather_.iweatherschema.md)[] |

**Returns:** *Promise‹[IWeatherSchema](_models_weather_.iweatherschema.md)[]›*

▸ **create**‹**TCreate**›(`docs`: CreateQuery‹TCreate›[], `options?`: SaveOptions, `callback?`: function): *Promise‹[IWeatherSchema](_models_weather_.iweatherschema.md)[]›*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[create](_models_horoscope_.ihoroscope.md#create)*

Defined in node_modules/@types/mongoose/index.d.ts:3284

**Type parameters:**

▪ **TCreate**

**Parameters:**

▪ **docs**: *CreateQuery‹TCreate›[]*

▪`Optional`  **options**: *SaveOptions*

▪`Optional`  **callback**: *function*

▸ (`err`: any, `res`: [IWeatherSchema](_models_weather_.iweatherschema.md)[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | any |
`res` | [IWeatherSchema](_models_weather_.iweatherschema.md)[] |

**Returns:** *Promise‹[IWeatherSchema](_models_weather_.iweatherschema.md)[]›*

▸ **create**‹**TCreate**›(...`docs`: CreateQuery‹TCreate›[]): *Promise‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[create](_models_horoscope_.ihoroscope.md#create)*

Defined in node_modules/@types/mongoose/index.d.ts:3285

**Type parameters:**

▪ **TCreate**

**Parameters:**

Name | Type |
------ | ------ |
`...docs` | CreateQuery‹TCreate›[] |

**Returns:** *Promise‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

___

###  createCollection

▸ **createCollection**(`options?`: CollectionCreateOptions, `cb?`: function): *Promise‹void›*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[createCollection](_models_horoscope_.ihoroscope.md#createcollection)*

Defined in node_modules/@types/mongoose/index.d.ts:3290

Create the collection for this model. By default, if no indexes are specified, mongoose will not create the
collection for the model until any documents are created. Use this method to create the collection explicitly.

**Parameters:**

▪`Optional`  **options**: *CollectionCreateOptions*

▪`Optional`  **cb**: *function*

▸ (`err`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | any |

**Returns:** *Promise‹void›*

___

###  createIndexes

▸ **createIndexes**(`cb?`: function): *Promise‹void›*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[createIndexes](_models_horoscope_.ihoroscope.md#createindexes)*

Defined in node_modules/@types/mongoose/index.d.ts:3348

Similar to ensureIndexes(), except for it uses the createIndex function. The ensureIndex() function checks to see if an index with that name already exists, and, if not, does not attempt to create the index. createIndex() bypasses this check.

**Parameters:**

▪`Optional`  **cb**: *function*

Optional callback

▸ (`err`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | any |

**Returns:** *Promise‹void›*

___

###  deleteMany

▸ **deleteMany**(`conditions`: FilterQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›, `callback?`: function): *Query‹DeleteWriteOpResultObject["result"] & object› & QueryHelpers*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[deleteMany](_models_horoscope_.ihoroscope.md#deletemany)*

Defined in node_modules/@types/mongoose/index.d.ts:3612

**Parameters:**

▪ **conditions**: *FilterQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

▪`Optional`  **callback**: *function*

▸ (`err`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | any |

**Returns:** *Query‹DeleteWriteOpResultObject["result"] & object› & QueryHelpers*

▸ **deleteMany**(`conditions`: FilterQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›, `options`: ModelOptions, `callback?`: function): *Query‹DeleteWriteOpResultObject["result"] & object› & QueryHelpers*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[deleteMany](_models_horoscope_.ihoroscope.md#deletemany)*

Defined in node_modules/@types/mongoose/index.d.ts:3613

**Parameters:**

▪ **conditions**: *FilterQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

▪ **options**: *ModelOptions*

▪`Optional`  **callback**: *function*

▸ (`err`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | any |

**Returns:** *Query‹DeleteWriteOpResultObject["result"] & object› & QueryHelpers*

___

###  deleteOne

▸ **deleteOne**(`conditions`: FilterQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›, `callback?`: function): *Query‹DeleteWriteOpResultObject["result"] & object› & QueryHelpers*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[deleteOne](_models_horoscope_.ihoroscope.md#deleteone)*

Defined in node_modules/@types/mongoose/index.d.ts:3610

**Parameters:**

▪ **conditions**: *FilterQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

▪`Optional`  **callback**: *function*

▸ (`err`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | any |

**Returns:** *Query‹DeleteWriteOpResultObject["result"] & object› & QueryHelpers*

▸ **deleteOne**(`conditions`: FilterQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›, `options`: ModelOptions, `callback?`: function): *Query‹DeleteWriteOpResultObject["result"] & object› & QueryHelpers*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[deleteOne](_models_horoscope_.ihoroscope.md#deleteone)*

Defined in node_modules/@types/mongoose/index.d.ts:3611

**Parameters:**

▪ **conditions**: *FilterQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

▪ **options**: *ModelOptions*

▪`Optional`  **callback**: *function*

▸ (`err`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | any |

**Returns:** *Query‹DeleteWriteOpResultObject["result"] & object› & QueryHelpers*

___

###  discriminator

▸ **discriminator**‹**U**›(`name`: string, `schema`: Schema, `value?`: string): *[Model](_models_horoscope_.ihoroscope.md#model)‹U›*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[discriminator](_models_horoscope_.ihoroscope.md#discriminator)*

Defined in node_modules/@types/mongoose/index.d.ts:3298

Adds a discriminator type.

**Type parameters:**

▪ **U**: *Document*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | discriminator model name |
`schema` | Schema | discriminator model schema |
`value?` | string | the string stored in the `discriminatorKey` property  |

**Returns:** *[Model](_models_horoscope_.ihoroscope.md#model)‹U›*

▸ **discriminator**‹**U**, **M**›(`name`: string, `schema`: Schema, `value?`: string): *M*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[discriminator](_models_horoscope_.ihoroscope.md#discriminator)*

Defined in node_modules/@types/mongoose/index.d.ts:3306

Adds a discriminator type.

**Type parameters:**

▪ **U**: *Document*

▪ **M**: *[Model](_models_horoscope_.ihoroscope.md#model)‹U›*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | discriminator model name |
`schema` | Schema | discriminator model schema |
`value?` | string | the string stored in the `discriminatorKey` property  |

**Returns:** *M*

___

###  distinct

▸ **distinct**(`field`: string, `callback?`: function): *Query‹any[]› & QueryHelpers*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[distinct](_models_horoscope_.ihoroscope.md#distinct)*

Defined in node_modules/@types/mongoose/index.d.ts:3309

Creates a Query for a distinct operation. Passing a callback immediately executes the query.

**Parameters:**

▪ **field**: *string*

▪`Optional`  **callback**: *function*

▸ (`err`: any, `res`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | any |
`res` | any[] |

**Returns:** *Query‹any[]› & QueryHelpers*

▸ **distinct**(`field`: string, `conditions`: any, `callback?`: function): *Query‹any[]› & QueryHelpers*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[distinct](_models_horoscope_.ihoroscope.md#distinct)*

Defined in node_modules/@types/mongoose/index.d.ts:3310

**Parameters:**

▪ **field**: *string*

▪ **conditions**: *any*

▪`Optional`  **callback**: *function*

▸ (`err`: any, `res`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | any |
`res` | any[] |

**Returns:** *Query‹any[]› & QueryHelpers*

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

###  ensureIndexes

▸ **ensureIndexes**(`callback?`: function): *Promise‹void›*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[ensureIndexes](_models_horoscope_.ihoroscope.md#ensureindexes)*

Defined in node_modules/@types/mongoose/index.d.ts:3341

Sends ensureIndex commands to mongo for each index declared in the schema.

**Parameters:**

▪`Optional`  **callback**: *function*

▸ (`err`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | any |

**Returns:** *Promise‹void›*

▸ **ensureIndexes**(`options`: any, `callback?`: function): *Promise‹void›*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[ensureIndexes](_models_horoscope_.ihoroscope.md#ensureindexes)*

Defined in node_modules/@types/mongoose/index.d.ts:3342

**Parameters:**

▪ **options**: *any*

▪`Optional`  **callback**: *function*

▸ (`err`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | any |

**Returns:** *Promise‹void›*

___

###  estimatedDocumentCount

▸ **estimatedDocumentCount**(`callback?`: function): *Query‹number› & QueryHelpers*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[estimatedDocumentCount](_models_horoscope_.ihoroscope.md#estimateddocumentcount)*

Defined in node_modules/@types/mongoose/index.d.ts:3273

Estimates the number of documents in the MongoDB collection. Faster than
using `countDocuments()` for large collections because
`estimatedDocumentCount()` uses collection metadata rather than scanning
the entire collection.

**Parameters:**

▪`Optional`  **callback**: *function*

▸ (`err`: any, `count`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | any |
`count` | number |

**Returns:** *Query‹number› & QueryHelpers*

▸ **estimatedDocumentCount**(`options`: any, `callback?`: function): *Query‹number› & QueryHelpers*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[estimatedDocumentCount](_models_horoscope_.ihoroscope.md#estimateddocumentcount)*

Defined in node_modules/@types/mongoose/index.d.ts:3274

**Parameters:**

▪ **options**: *any*

▪`Optional`  **callback**: *function*

▸ (`err`: any, `count`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | any |
`count` | number |

**Returns:** *Query‹number› & QueryHelpers*

___

###  eventNames

▸ **eventNames**(): *Array‹string | symbol›*

*Inherited from [IHoroscopeSchema](_models_horoscope_.ihoroscopeschema.md).[eventNames](_models_horoscope_.ihoroscopeschema.md#eventnames)*

Defined in node_modules/@types/node/globals.d.ts:565

**Returns:** *Array‹string | symbol›*

___

###  exists

▸ **exists**(`filter`: FilterQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›, `callback?`: function): *Promise‹boolean›*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[exists](_models_horoscope_.ihoroscope.md#exists)*

Defined in node_modules/@types/mongoose/index.d.ts:3354

Returns true if at least one document exists in the database that matches
the given `filter`, and false otherwise.

**Parameters:**

▪ **filter**: *FilterQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

▪`Optional`  **callback**: *function*

▸ (`err`: any, `res`: boolean): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | any |
`res` | boolean |

**Returns:** *Promise‹boolean›*

___

###  fetchCurrent

▸ **fetchCurrent**(`lat`: number, `lon`: number): *Promise‹[OpenweatherCurrentAPIResponse](_core_api_iopenweather_.openweathercurrentapiresponse.md)›*

*Defined in [src/models/Weather.ts:285](https://github.com/Xisabla/Korbots/blob/177cb32/server/src/models/Weather.ts#L285)*

Run a fetch call to the API to get the Current entry of the given location

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`lat` | number | Latitude of the location |
`lon` | number | Longitude of the location |

**Returns:** *Promise‹[OpenweatherCurrentAPIResponse](_core_api_iopenweather_.openweathercurrentapiresponse.md)›*

An Object of all the data queried from the API inside a Promise

___

###  fetchDaily

▸ **fetchDaily**(`lat`: number, `lon`: number): *Promise‹[OpenweatherDailyAPIResponse](_core_api_iopenweather_.openweatherdailyapiresponse.md)›*

*Defined in [src/models/Weather.ts:296](https://github.com/Xisabla/Korbots/blob/177cb32/server/src/models/Weather.ts#L296)*

Run a fetch call to the API to get the Daily entries of the given location from today

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`lat` | number | Latitude of the location |
`lon` | number | Longitude of the location |

**Returns:** *Promise‹[OpenweatherDailyAPIResponse](_core_api_iopenweather_.openweatherdailyapiresponse.md)›*

An Object of all the data queried from the API inside a Promise

___

###  find

▸ **find**(`callback?`: function): *DocumentQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)[], [IWeatherSchema](_models_weather_.iweatherschema.md), QueryHelpers› & QueryHelpers*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[find](_models_horoscope_.ihoroscope.md#find)*

Defined in node_modules/@types/mongoose/index.d.ts:3360

Finds documents.

**Parameters:**

▪`Optional`  **callback**: *function*

▸ (`err`: any, `res`: [IWeatherSchema](_models_weather_.iweatherschema.md)[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | any |
`res` | [IWeatherSchema](_models_weather_.iweatherschema.md)[] |

**Returns:** *DocumentQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)[], [IWeatherSchema](_models_weather_.iweatherschema.md), QueryHelpers› & QueryHelpers*

▸ **find**(`conditions`: FilterQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›, `callback?`: function): *DocumentQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)[], [IWeatherSchema](_models_weather_.iweatherschema.md), QueryHelpers› & QueryHelpers*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[find](_models_horoscope_.ihoroscope.md#find)*

Defined in node_modules/@types/mongoose/index.d.ts:3361

**Parameters:**

▪ **conditions**: *FilterQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

▪`Optional`  **callback**: *function*

▸ (`err`: any, `res`: [IWeatherSchema](_models_weather_.iweatherschema.md)[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | any |
`res` | [IWeatherSchema](_models_weather_.iweatherschema.md)[] |

**Returns:** *DocumentQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)[], [IWeatherSchema](_models_weather_.iweatherschema.md), QueryHelpers› & QueryHelpers*

▸ **find**(`conditions`: FilterQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›, `projection?`: any | null, `callback?`: function): *DocumentQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)[], [IWeatherSchema](_models_weather_.iweatherschema.md), QueryHelpers› & QueryHelpers*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[find](_models_horoscope_.ihoroscope.md#find)*

Defined in node_modules/@types/mongoose/index.d.ts:3362

**Parameters:**

▪ **conditions**: *FilterQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

▪`Optional`  **projection**: *any | null*

▪`Optional`  **callback**: *function*

▸ (`err`: any, `res`: [IWeatherSchema](_models_weather_.iweatherschema.md)[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | any |
`res` | [IWeatherSchema](_models_weather_.iweatherschema.md)[] |

**Returns:** *DocumentQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)[], [IWeatherSchema](_models_weather_.iweatherschema.md), QueryHelpers› & QueryHelpers*

▸ **find**(`conditions`: FilterQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›, `projection?`: any | null, `options?`: object & Omit‹QueryFindOptions, "lean"›, `callback?`: function): *Query‹DocumentDefinition‹[IWeatherSchema](_models_weather_.iweatherschema.md)›[]› & QueryHelpers*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[find](_models_horoscope_.ihoroscope.md#find)*

Defined in node_modules/@types/mongoose/index.d.ts:3364

**Parameters:**

▪ **conditions**: *FilterQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

▪`Optional`  **projection**: *any | null*

▪`Optional`  **options**: *object & Omit‹QueryFindOptions, "lean"›*

▪`Optional`  **callback**: *function*

▸ (`err`: any, `res`: [IWeatherSchema](_models_weather_.iweatherschema.md)[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | any |
`res` | [IWeatherSchema](_models_weather_.iweatherschema.md)[] |

**Returns:** *Query‹DocumentDefinition‹[IWeatherSchema](_models_weather_.iweatherschema.md)›[]› & QueryHelpers*

▸ **find**(`conditions`: FilterQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›, `projection?`: any | null, `options?`: QueryFindOptions, `callback?`: function): *DocumentQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)[], [IWeatherSchema](_models_weather_.iweatherschema.md), QueryHelpers› & QueryHelpers*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[find](_models_horoscope_.ihoroscope.md#find)*

Defined in node_modules/@types/mongoose/index.d.ts:3366

**Parameters:**

▪ **conditions**: *FilterQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

▪`Optional`  **projection**: *any | null*

▪`Optional`  **options**: *QueryFindOptions*

▪`Optional`  **callback**: *function*

▸ (`err`: any, `res`: [IWeatherSchema](_models_weather_.iweatherschema.md)[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | any |
`res` | [IWeatherSchema](_models_weather_.iweatherschema.md)[] |

**Returns:** *DocumentQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)[], [IWeatherSchema](_models_weather_.iweatherschema.md), QueryHelpers› & QueryHelpers*

___

###  findById

▸ **findById**(`id`: any | string | number, `callback?`: function): *DocumentQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md) | null, [IWeatherSchema](_models_weather_.iweatherschema.md), QueryHelpers› & QueryHelpers*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[findById](_models_horoscope_.ihoroscope.md#findbyid)*

Defined in node_modules/@types/mongoose/index.d.ts:3375

Finds a single document by its _id field. findById(id) is almost*
equivalent to findOne({ _id: id }). findById() triggers findOne hooks.

**Parameters:**

▪ **id**: *any | string | number*

value of _id to query by

▪`Optional`  **callback**: *function*

▸ (`err`: any, `res`: [IWeatherSchema](_models_weather_.iweatherschema.md) | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | any |
`res` | [IWeatherSchema](_models_weather_.iweatherschema.md) &#124; null |

**Returns:** *DocumentQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md) | null, [IWeatherSchema](_models_weather_.iweatherschema.md), QueryHelpers› & QueryHelpers*

▸ **findById**(`id`: any | string | number, `projection`: any, `callback?`: function): *DocumentQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md) | null, [IWeatherSchema](_models_weather_.iweatherschema.md), QueryHelpers› & QueryHelpers*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[findById](_models_horoscope_.ihoroscope.md#findbyid)*

Defined in node_modules/@types/mongoose/index.d.ts:3377

**Parameters:**

▪ **id**: *any | string | number*

▪ **projection**: *any*

▪`Optional`  **callback**: *function*

▸ (`err`: any, `res`: [IWeatherSchema](_models_weather_.iweatherschema.md) | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | any |
`res` | [IWeatherSchema](_models_weather_.iweatherschema.md) &#124; null |

**Returns:** *DocumentQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md) | null, [IWeatherSchema](_models_weather_.iweatherschema.md), QueryHelpers› & QueryHelpers*

▸ **findById**(`id`: any | string | number, `projection`: any, `options`: object & Omit‹QueryFindBaseOptions, "lean"›, `callback?`: function): *Query‹DocumentDefinition‹[IWeatherSchema](_models_weather_.iweatherschema.md)›› & QueryHelpers*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[findById](_models_horoscope_.ihoroscope.md#findbyid)*

Defined in node_modules/@types/mongoose/index.d.ts:3379

**Parameters:**

▪ **id**: *any | string | number*

▪ **projection**: *any*

▪ **options**: *object & Omit‹QueryFindBaseOptions, "lean"›*

▪`Optional`  **callback**: *function*

▸ (`err`: any, `res`: [IWeatherSchema](_models_weather_.iweatherschema.md) | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | any |
`res` | [IWeatherSchema](_models_weather_.iweatherschema.md) &#124; null |

**Returns:** *Query‹DocumentDefinition‹[IWeatherSchema](_models_weather_.iweatherschema.md)›› & QueryHelpers*

▸ **findById**(`id`: any | string | number, `projection`: any, `options`: QueryFindBaseOptions, `callback?`: function): *DocumentQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md) | null, [IWeatherSchema](_models_weather_.iweatherschema.md), QueryHelpers› & QueryHelpers*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[findById](_models_horoscope_.ihoroscope.md#findbyid)*

Defined in node_modules/@types/mongoose/index.d.ts:3381

**Parameters:**

▪ **id**: *any | string | number*

▪ **projection**: *any*

▪ **options**: *QueryFindBaseOptions*

▪`Optional`  **callback**: *function*

▸ (`err`: any, `res`: [IWeatherSchema](_models_weather_.iweatherschema.md) | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | any |
`res` | [IWeatherSchema](_models_weather_.iweatherschema.md) &#124; null |

**Returns:** *DocumentQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md) | null, [IWeatherSchema](_models_weather_.iweatherschema.md), QueryHelpers› & QueryHelpers*

___

###  findByIdAndDelete

▸ **findByIdAndDelete**(): *DocumentQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md) | null, [IWeatherSchema](_models_weather_.iweatherschema.md), QueryHelpers› & QueryHelpers*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[findByIdAndDelete](_models_horoscope_.ihoroscope.md#findbyidanddelete)*

Defined in node_modules/@types/mongoose/index.d.ts:3416

Issue a mongodb findOneAndDelete command by a document's _id field.
findByIdAndDelete(id, ...) is equivalent to findByIdAndDelete({ _id: id }, ...).
Finds a matching document, removes it, passing the found document (if any) to the callback.
Executes immediately if callback is passed, else a Query object is returned.

Note: same signatures as findByIdAndRemove

**Returns:** *DocumentQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md) | null, [IWeatherSchema](_models_weather_.iweatherschema.md), QueryHelpers› & QueryHelpers*

▸ **findByIdAndDelete**(`id`: any | number | string, `callback?`: function): *DocumentQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md) | null, [IWeatherSchema](_models_weather_.iweatherschema.md), QueryHelpers› & QueryHelpers*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[findByIdAndDelete](_models_horoscope_.ihoroscope.md#findbyidanddelete)*

Defined in node_modules/@types/mongoose/index.d.ts:3417

**Parameters:**

▪ **id**: *any | number | string*

▪`Optional`  **callback**: *function*

▸ (`err`: any, `res`: [IWeatherSchema](_models_weather_.iweatherschema.md) | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | any |
`res` | [IWeatherSchema](_models_weather_.iweatherschema.md) &#124; null |

**Returns:** *DocumentQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md) | null, [IWeatherSchema](_models_weather_.iweatherschema.md), QueryHelpers› & QueryHelpers*

▸ **findByIdAndDelete**(`id`: any | number | string, `options`: QueryFindOneAndRemoveOptions, `callback?`: function): *Query‹FindAndModifyWriteOpResultObject‹[IWeatherSchema](_models_weather_.iweatherschema.md) | null›› & QueryHelpers*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[findByIdAndDelete](_models_horoscope_.ihoroscope.md#findbyidanddelete)*

Defined in node_modules/@types/mongoose/index.d.ts:3419

**Parameters:**

▪ **id**: *any | number | string*

▪ **options**: *QueryFindOneAndRemoveOptions*

▪`Optional`  **callback**: *function*

▸ (`err`: any, `res`: FindAndModifyWriteOpResultObject‹[IWeatherSchema](_models_weather_.iweatherschema.md) | null›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | any |
`res` | FindAndModifyWriteOpResultObject‹[IWeatherSchema](_models_weather_.iweatherschema.md) &#124; null› |

**Returns:** *Query‹FindAndModifyWriteOpResultObject‹[IWeatherSchema](_models_weather_.iweatherschema.md) | null›› & QueryHelpers*

▸ **findByIdAndDelete**(`id`: any | number | string, `options`: QueryFindOneAndRemoveOptions, `callback?`: function): *DocumentQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md) | null, [IWeatherSchema](_models_weather_.iweatherschema.md), QueryHelpers› & QueryHelpers*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[findByIdAndDelete](_models_horoscope_.ihoroscope.md#findbyidanddelete)*

Defined in node_modules/@types/mongoose/index.d.ts:3422

**Parameters:**

▪ **id**: *any | number | string*

▪ **options**: *QueryFindOneAndRemoveOptions*

▪`Optional`  **callback**: *function*

▸ (`err`: any, `res`: [IWeatherSchema](_models_weather_.iweatherschema.md) | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | any |
`res` | [IWeatherSchema](_models_weather_.iweatherschema.md) &#124; null |

**Returns:** *DocumentQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md) | null, [IWeatherSchema](_models_weather_.iweatherschema.md), QueryHelpers› & QueryHelpers*

___

###  findByIdAndRemove

▸ **findByIdAndRemove**(): *DocumentQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md) | null, [IWeatherSchema](_models_weather_.iweatherschema.md), QueryHelpers› & QueryHelpers*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[findByIdAndRemove](_models_horoscope_.ihoroscope.md#findbyidandremove)*

Defined in node_modules/@types/mongoose/index.d.ts:3397

Issue a mongodb findAndModify remove command by a document's _id field.
findByIdAndRemove(id, ...) is equivalent to findOneAndRemove({ _id: id }, ...).
Finds a matching document, removes it, passing the found document (if any) to the callback.
Executes immediately if callback is passed, else a Query object is returned.

If mongoose option 'useFindAndModify': set to false it uses native findOneAndUpdate() rather than deprecated findAndModify().
https://mongoosejs.com/docs/api.html#mongoose_Mongoose-set

Note: same signatures as findByIdAndDelete

**Returns:** *DocumentQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md) | null, [IWeatherSchema](_models_weather_.iweatherschema.md), QueryHelpers› & QueryHelpers*

▸ **findByIdAndRemove**(`id`: any | number | string, `callback?`: function): *DocumentQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md) | null, [IWeatherSchema](_models_weather_.iweatherschema.md), QueryHelpers› & QueryHelpers*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[findByIdAndRemove](_models_horoscope_.ihoroscope.md#findbyidandremove)*

Defined in node_modules/@types/mongoose/index.d.ts:3398

**Parameters:**

▪ **id**: *any | number | string*

▪`Optional`  **callback**: *function*

▸ (`err`: any, `res`: [IWeatherSchema](_models_weather_.iweatherschema.md) | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | any |
`res` | [IWeatherSchema](_models_weather_.iweatherschema.md) &#124; null |

**Returns:** *DocumentQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md) | null, [IWeatherSchema](_models_weather_.iweatherschema.md), QueryHelpers› & QueryHelpers*

▸ **findByIdAndRemove**(`id`: any | number | string, `options`: QueryFindOneAndRemoveOptions, `callback?`: function): *Query‹FindAndModifyWriteOpResultObject‹[IWeatherSchema](_models_weather_.iweatherschema.md) | null›› & QueryHelpers*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[findByIdAndRemove](_models_horoscope_.ihoroscope.md#findbyidandremove)*

Defined in node_modules/@types/mongoose/index.d.ts:3400

**Parameters:**

▪ **id**: *any | number | string*

▪ **options**: *QueryFindOneAndRemoveOptions*

▪`Optional`  **callback**: *function*

▸ (`err`: any, `res`: FindAndModifyWriteOpResultObject‹[IWeatherSchema](_models_weather_.iweatherschema.md) | null›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | any |
`res` | FindAndModifyWriteOpResultObject‹[IWeatherSchema](_models_weather_.iweatherschema.md) &#124; null› |

**Returns:** *Query‹FindAndModifyWriteOpResultObject‹[IWeatherSchema](_models_weather_.iweatherschema.md) | null›› & QueryHelpers*

▸ **findByIdAndRemove**(`id`: any | number | string, `options`: QueryFindOneAndRemoveOptions, `callback?`: function): *DocumentQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md) | null, [IWeatherSchema](_models_weather_.iweatherschema.md), QueryHelpers› & QueryHelpers*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[findByIdAndRemove](_models_horoscope_.ihoroscope.md#findbyidandremove)*

Defined in node_modules/@types/mongoose/index.d.ts:3403

**Parameters:**

▪ **id**: *any | number | string*

▪ **options**: *QueryFindOneAndRemoveOptions*

▪`Optional`  **callback**: *function*

▸ (`err`: any, `res`: [IWeatherSchema](_models_weather_.iweatherschema.md) | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | any |
`res` | [IWeatherSchema](_models_weather_.iweatherschema.md) &#124; null |

**Returns:** *DocumentQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md) | null, [IWeatherSchema](_models_weather_.iweatherschema.md), QueryHelpers› & QueryHelpers*

___

###  findByIdAndUpdate

▸ **findByIdAndUpdate**(): *DocumentQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md) | null, [IWeatherSchema](_models_weather_.iweatherschema.md), QueryHelpers› & QueryHelpers*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[findByIdAndUpdate](_models_horoscope_.ihoroscope.md#findbyidandupdate)*

Defined in node_modules/@types/mongoose/index.d.ts:3433

Issues a mongodb findAndModify update command by a document's _id field. findByIdAndUpdate(id, ...)
is equivalent to findOneAndUpdate({ _id: id }, ...).

If mongoose option 'useFindAndModify': set to false it uses native findOneAndUpdate() rather than deprecated findAndModify().
https://mongoosejs.com/docs/api.html#mongoose_Mongoose-set

**Returns:** *DocumentQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md) | null, [IWeatherSchema](_models_weather_.iweatherschema.md), QueryHelpers› & QueryHelpers*

▸ **findByIdAndUpdate**(`id`: any | number | string, `update`: UpdateQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›, `callback?`: function): *DocumentQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md) | null, [IWeatherSchema](_models_weather_.iweatherschema.md), QueryHelpers› & QueryHelpers*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[findByIdAndUpdate](_models_horoscope_.ihoroscope.md#findbyidandupdate)*

Defined in node_modules/@types/mongoose/index.d.ts:3434

**Parameters:**

▪ **id**: *any | number | string*

▪ **update**: *UpdateQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

▪`Optional`  **callback**: *function*

▸ (`err`: any, `res`: [IWeatherSchema](_models_weather_.iweatherschema.md) | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | any |
`res` | [IWeatherSchema](_models_weather_.iweatherschema.md) &#124; null |

**Returns:** *DocumentQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md) | null, [IWeatherSchema](_models_weather_.iweatherschema.md), QueryHelpers› & QueryHelpers*

▸ **findByIdAndUpdate**(`id`: any | number | string, `update`: UpdateQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›, `options`: object & object & object & QueryFindOneAndUpdateOptions, `callback?`: function): *DocumentQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md), [IWeatherSchema](_models_weather_.iweatherschema.md), QueryHelpers› & QueryHelpers*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[findByIdAndUpdate](_models_horoscope_.ihoroscope.md#findbyidandupdate)*

Defined in node_modules/@types/mongoose/index.d.ts:3436

**Parameters:**

▪ **id**: *any | number | string*

▪ **update**: *UpdateQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

▪ **options**: *object & object & object & QueryFindOneAndUpdateOptions*

▪`Optional`  **callback**: *function*

▸ (`err`: any, `res`: [IWeatherSchema](_models_weather_.iweatherschema.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | any |
`res` | [IWeatherSchema](_models_weather_.iweatherschema.md) |

**Returns:** *DocumentQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md), [IWeatherSchema](_models_weather_.iweatherschema.md), QueryHelpers› & QueryHelpers*

▸ **findByIdAndUpdate**(`id`: any | number | string, `update`: UpdateQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›, `options`: object & QueryFindOneAndUpdateOptions, `callback?`: function): *Query‹FindAndModifyWriteOpResultObject‹[IWeatherSchema](_models_weather_.iweatherschema.md)›› & QueryHelpers*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[findByIdAndUpdate](_models_horoscope_.ihoroscope.md#findbyidandupdate)*

Defined in node_modules/@types/mongoose/index.d.ts:3439

**Parameters:**

▪ **id**: *any | number | string*

▪ **update**: *UpdateQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

▪ **options**: *object & QueryFindOneAndUpdateOptions*

▪`Optional`  **callback**: *function*

▸ (`err`: any, `res`: FindAndModifyWriteOpResultObject‹[IWeatherSchema](_models_weather_.iweatherschema.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | any |
`res` | FindAndModifyWriteOpResultObject‹[IWeatherSchema](_models_weather_.iweatherschema.md)› |

**Returns:** *Query‹FindAndModifyWriteOpResultObject‹[IWeatherSchema](_models_weather_.iweatherschema.md)›› & QueryHelpers*

▸ **findByIdAndUpdate**(`id`: any | number | string, `update`: UpdateQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›, `options`: object & QueryFindOneAndUpdateOptions, `callback?`: function): *Query‹FindAndModifyWriteOpResultObject‹[IWeatherSchema](_models_weather_.iweatherschema.md) | null›› & QueryHelpers*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[findByIdAndUpdate](_models_horoscope_.ihoroscope.md#findbyidandupdate)*

Defined in node_modules/@types/mongoose/index.d.ts:3443

**Parameters:**

▪ **id**: *any | number | string*

▪ **update**: *UpdateQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

▪ **options**: *object & QueryFindOneAndUpdateOptions*

▪`Optional`  **callback**: *function*

▸ (`err`: any, `res`: FindAndModifyWriteOpResultObject‹[IWeatherSchema](_models_weather_.iweatherschema.md) | null›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | any |
`res` | FindAndModifyWriteOpResultObject‹[IWeatherSchema](_models_weather_.iweatherschema.md) &#124; null› |

**Returns:** *Query‹FindAndModifyWriteOpResultObject‹[IWeatherSchema](_models_weather_.iweatherschema.md) | null›› & QueryHelpers*

▸ **findByIdAndUpdate**(`id`: any | number | string, `update`: UpdateQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›, `options`: object & Omit‹QueryFindOneAndUpdateOptions, "lean"›, `callback?`: function): *Query‹DocumentDefinition‹[IWeatherSchema](_models_weather_.iweatherschema.md)›› & QueryHelpers*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[findByIdAndUpdate](_models_horoscope_.ihoroscope.md#findbyidandupdate)*

Defined in node_modules/@types/mongoose/index.d.ts:3447

**Parameters:**

▪ **id**: *any | number | string*

▪ **update**: *UpdateQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

▪ **options**: *object & Omit‹QueryFindOneAndUpdateOptions, "lean"›*

▪`Optional`  **callback**: *function*

▸ (`err`: any, `res`: DocumentDefinition‹[IWeatherSchema](_models_weather_.iweatherschema.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | any |
`res` | DocumentDefinition‹[IWeatherSchema](_models_weather_.iweatherschema.md)› |

**Returns:** *Query‹DocumentDefinition‹[IWeatherSchema](_models_weather_.iweatherschema.md)›› & QueryHelpers*

▸ **findByIdAndUpdate**(`id`: any | number | string, `update`: UpdateQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›, `options`: QueryFindOneAndUpdateOptions, `callback?`: function): *DocumentQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md) | null, [IWeatherSchema](_models_weather_.iweatherschema.md), QueryHelpers› & QueryHelpers*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[findByIdAndUpdate](_models_horoscope_.ihoroscope.md#findbyidandupdate)*

Defined in node_modules/@types/mongoose/index.d.ts:3451

**Parameters:**

▪ **id**: *any | number | string*

▪ **update**: *UpdateQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

▪ **options**: *QueryFindOneAndUpdateOptions*

▪`Optional`  **callback**: *function*

▸ (`err`: any, `res`: [IWeatherSchema](_models_weather_.iweatherschema.md) | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | any |
`res` | [IWeatherSchema](_models_weather_.iweatherschema.md) &#124; null |

**Returns:** *DocumentQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md) | null, [IWeatherSchema](_models_weather_.iweatherschema.md), QueryHelpers› & QueryHelpers*

___

###  findCurrent

▸ **findCurrent**(`lat`: number, `long`: number): *Promise‹[IWeatherSchema](_models_weather_.iweatherschema.md)[]›*

*Defined in [src/models/Weather.ts:211](https://github.com/Xisabla/Korbots/blob/177cb32/server/src/models/Weather.ts#L211)*

Look for Documents inside the Database for the Current weather at a specific location
Time interval: [now - 30 minutes; now + 2 minutes]

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`lat` | number | Latitude of the location (+/- 0.1 from the API) |
`long` | number | Longitude of the location (+/- 0.1 from the API) |

**Returns:** *Promise‹[IWeatherSchema](_models_weather_.iweatherschema.md)[]›*

All of the Documents found inside a Promise

___

###  findCurrentOne

▸ **findCurrentOne**(`lat`: number, `long`: number): *Promise‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

*Defined in [src/models/Weather.ts:219](https://github.com/Xisabla/Korbots/blob/177cb32/server/src/models/Weather.ts#L219)*

Same as findCurrent but only returns the first entry

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`lat` | number | Latitude of the location (+/- 0.1 from the API) |
`long` | number | Longitude of the location (+/- 0.1 from the API) |

**Returns:** *Promise‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

A Promise of the Document

___

###  findDaily

▸ **findDaily**(`lat`: number, `long`: number, `date`: Date): *Promise‹[IWeatherSchema](_models_weather_.iweatherschema.md)[]›*

*Defined in [src/models/Weather.ts:229](https://github.com/Xisabla/Korbots/blob/177cb32/server/src/models/Weather.ts#L229)*

Look for Documents inside the Database for the Daily weather at a specific location and date
Time interval: Same day as date

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`lat` | number | Latitude of the location (+/- 0.1 from the API) |
`long` | number | Longitude of the location (+/- 0.1 from the API) |
`date` | Date | Day of the weather entry to look for |

**Returns:** *Promise‹[IWeatherSchema](_models_weather_.iweatherschema.md)[]›*

A Promise of all the Documents (Array)

___

###  findDailyAll

▸ **findDailyAll**(`lat`: number, `lon`: number, `further?`: number): *Promise‹[IWeatherSchema](_models_weather_.iweatherschema.md)[]›*

*Defined in [src/models/Weather.ts:247](https://github.com/Xisabla/Korbots/blob/177cb32/server/src/models/Weather.ts#L247)*

Look for all Daily weather entries for next further days (begin: tomorrow) at the given location

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`lat` | number | Latitude of the location (+/- 0.1 from the API) |
`lon` | number | - |
`further?` | number | Number of further days (1 means only tomorrow) (default: 4) |

**Returns:** *Promise‹[IWeatherSchema](_models_weather_.iweatherschema.md)[]›*

A Promise of an Array of Document

___

###  findDailyOne

▸ **findDailyOne**(`lat`: number, `long`: number, `date`: Date): *Promise‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

*Defined in [src/models/Weather.ts:238](https://github.com/Xisabla/Korbots/blob/177cb32/server/src/models/Weather.ts#L238)*

Same as findDaily but only returns the first entry

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`lat` | number | Latitude of the location (+/- 0.1 from the API) |
`long` | number | Longitude of the location (+/- 0.1 from the API) |
`date` | Date | Day of the weather entry to look for |

**Returns:** *Promise‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

A Promise of the Document

___

###  findOne

▸ **findOne**(`conditions?`: FilterQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›, `callback?`: function): *DocumentQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md) | null, [IWeatherSchema](_models_weather_.iweatherschema.md), QueryHelpers› & QueryHelpers*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[findOne](_models_horoscope_.ihoroscope.md#findone)*

Defined in node_modules/@types/mongoose/index.d.ts:3460

Finds one document.
The conditions are cast to their respective SchemaTypes before the command is sent.

**Parameters:**

▪`Optional`  **conditions**: *FilterQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

▪`Optional`  **callback**: *function*

▸ (`err`: any, `res`: [IWeatherSchema](_models_weather_.iweatherschema.md) | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | any |
`res` | [IWeatherSchema](_models_weather_.iweatherschema.md) &#124; null |

**Returns:** *DocumentQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md) | null, [IWeatherSchema](_models_weather_.iweatherschema.md), QueryHelpers› & QueryHelpers*

▸ **findOne**(`conditions`: FilterQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›, `projection`: any, `callback?`: function): *DocumentQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md) | null, [IWeatherSchema](_models_weather_.iweatherschema.md), QueryHelpers› & QueryHelpers*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[findOne](_models_horoscope_.ihoroscope.md#findone)*

Defined in node_modules/@types/mongoose/index.d.ts:3462

**Parameters:**

▪ **conditions**: *FilterQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

▪ **projection**: *any*

▪`Optional`  **callback**: *function*

▸ (`err`: any, `res`: [IWeatherSchema](_models_weather_.iweatherschema.md) | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | any |
`res` | [IWeatherSchema](_models_weather_.iweatherschema.md) &#124; null |

**Returns:** *DocumentQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md) | null, [IWeatherSchema](_models_weather_.iweatherschema.md), QueryHelpers› & QueryHelpers*

▸ **findOne**(`conditions`: FilterQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›, `projection`: any, `options`: object & Omit‹QueryFindBaseOptions, "lean"›, `callback?`: function): *Query‹DocumentDefinition‹[IWeatherSchema](_models_weather_.iweatherschema.md)›› & QueryHelpers*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[findOne](_models_horoscope_.ihoroscope.md#findone)*

Defined in node_modules/@types/mongoose/index.d.ts:3464

**Parameters:**

▪ **conditions**: *FilterQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

▪ **projection**: *any*

▪ **options**: *object & Omit‹QueryFindBaseOptions, "lean"›*

▪`Optional`  **callback**: *function*

▸ (`err`: any, `res`: [IWeatherSchema](_models_weather_.iweatherschema.md) | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | any |
`res` | [IWeatherSchema](_models_weather_.iweatherschema.md) &#124; null |

**Returns:** *Query‹DocumentDefinition‹[IWeatherSchema](_models_weather_.iweatherschema.md)›› & QueryHelpers*

▸ **findOne**(`conditions`: FilterQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›, `projection`: any, `options`: QueryFindBaseOptions, `callback?`: function): *DocumentQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md) | null, [IWeatherSchema](_models_weather_.iweatherschema.md), QueryHelpers› & QueryHelpers*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[findOne](_models_horoscope_.ihoroscope.md#findone)*

Defined in node_modules/@types/mongoose/index.d.ts:3466

**Parameters:**

▪ **conditions**: *FilterQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

▪ **projection**: *any*

▪ **options**: *QueryFindBaseOptions*

▪`Optional`  **callback**: *function*

▸ (`err`: any, `res`: [IWeatherSchema](_models_weather_.iweatherschema.md) | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | any |
`res` | [IWeatherSchema](_models_weather_.iweatherschema.md) &#124; null |

**Returns:** *DocumentQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md) | null, [IWeatherSchema](_models_weather_.iweatherschema.md), QueryHelpers› & QueryHelpers*

___

###  findOneAndDelete

▸ **findOneAndDelete**(): *DocumentQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md) | null, [IWeatherSchema](_models_weather_.iweatherschema.md), QueryHelpers› & QueryHelpers*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[findOneAndDelete](_models_horoscope_.ihoroscope.md#findoneanddelete)*

Defined in node_modules/@types/mongoose/index.d.ts:3496

Issues a mongodb findOneAndDelete command.
Finds a matching document, removes it, passing the found document (if any) to the
callback. Executes immediately if callback is passed.

Note: same signatures as findOneAndRemove

**Returns:** *DocumentQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md) | null, [IWeatherSchema](_models_weather_.iweatherschema.md), QueryHelpers› & QueryHelpers*

▸ **findOneAndDelete**(`conditions`: FilterQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›, `callback?`: function): *DocumentQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md) | null, [IWeatherSchema](_models_weather_.iweatherschema.md), QueryHelpers› & QueryHelpers*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[findOneAndDelete](_models_horoscope_.ihoroscope.md#findoneanddelete)*

Defined in node_modules/@types/mongoose/index.d.ts:3497

**Parameters:**

▪ **conditions**: *FilterQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

▪`Optional`  **callback**: *function*

▸ (`err`: any, `res`: [IWeatherSchema](_models_weather_.iweatherschema.md) | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | any |
`res` | [IWeatherSchema](_models_weather_.iweatherschema.md) &#124; null |

**Returns:** *DocumentQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md) | null, [IWeatherSchema](_models_weather_.iweatherschema.md), QueryHelpers› & QueryHelpers*

▸ **findOneAndDelete**(`conditions`: FilterQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›, `options`: object & QueryFindOneAndRemoveOptions, `callback?`: function): *Query‹FindAndModifyWriteOpResultObject‹[IWeatherSchema](_models_weather_.iweatherschema.md) | null›› & QueryHelpers*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[findOneAndDelete](_models_horoscope_.ihoroscope.md#findoneanddelete)*

Defined in node_modules/@types/mongoose/index.d.ts:3499

**Parameters:**

▪ **conditions**: *FilterQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

▪ **options**: *object & QueryFindOneAndRemoveOptions*

▪`Optional`  **callback**: *function*

▸ (`err`: any, `doc`: FindAndModifyWriteOpResultObject‹[IWeatherSchema](_models_weather_.iweatherschema.md) | null›, `res`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | any |
`doc` | FindAndModifyWriteOpResultObject‹[IWeatherSchema](_models_weather_.iweatherschema.md) &#124; null› |
`res` | any |

**Returns:** *Query‹FindAndModifyWriteOpResultObject‹[IWeatherSchema](_models_weather_.iweatherschema.md) | null›› & QueryHelpers*

▸ **findOneAndDelete**(`conditions`: FilterQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›, `options`: QueryFindOneAndRemoveOptions, `callback?`: function): *DocumentQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md) | null, [IWeatherSchema](_models_weather_.iweatherschema.md), QueryHelpers› & QueryHelpers*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[findOneAndDelete](_models_horoscope_.ihoroscope.md#findoneanddelete)*

Defined in node_modules/@types/mongoose/index.d.ts:3502

**Parameters:**

▪ **conditions**: *FilterQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

▪ **options**: *QueryFindOneAndRemoveOptions*

▪`Optional`  **callback**: *function*

▸ (`err`: any, `res`: [IWeatherSchema](_models_weather_.iweatherschema.md) | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | any |
`res` | [IWeatherSchema](_models_weather_.iweatherschema.md) &#124; null |

**Returns:** *DocumentQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md) | null, [IWeatherSchema](_models_weather_.iweatherschema.md), QueryHelpers› & QueryHelpers*

___

###  findOneAndRemove

▸ **findOneAndRemove**(): *DocumentQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md) | null, [IWeatherSchema](_models_weather_.iweatherschema.md), QueryHelpers› & QueryHelpers*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[findOneAndRemove](_models_horoscope_.ihoroscope.md#findoneandremove)*

Defined in node_modules/@types/mongoose/index.d.ts:3480

Issue a mongodb findAndModify remove command.
Finds a matching document, removes it, passing the found document (if any) to the callback.
Executes immediately if callback is passed else a Query object is returned.

If mongoose option 'useFindAndModify': set to false it uses native findOneAndUpdate() rather than deprecated findAndModify().
https://mongoosejs.com/docs/api.html#mongoose_Mongoose-set

Note: same signatures as findOneAndDelete

**Returns:** *DocumentQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md) | null, [IWeatherSchema](_models_weather_.iweatherschema.md), QueryHelpers› & QueryHelpers*

▸ **findOneAndRemove**(`conditions`: FilterQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›, `callback?`: function): *DocumentQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md) | null, [IWeatherSchema](_models_weather_.iweatherschema.md), QueryHelpers› & QueryHelpers*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[findOneAndRemove](_models_horoscope_.ihoroscope.md#findoneandremove)*

Defined in node_modules/@types/mongoose/index.d.ts:3481

**Parameters:**

▪ **conditions**: *FilterQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

▪`Optional`  **callback**: *function*

▸ (`err`: any, `res`: [IWeatherSchema](_models_weather_.iweatherschema.md) | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | any |
`res` | [IWeatherSchema](_models_weather_.iweatherschema.md) &#124; null |

**Returns:** *DocumentQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md) | null, [IWeatherSchema](_models_weather_.iweatherschema.md), QueryHelpers› & QueryHelpers*

▸ **findOneAndRemove**(`conditions`: FilterQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›, `options`: object & QueryFindOneAndRemoveOptions, `callback?`: function): *Query‹FindAndModifyWriteOpResultObject‹[IWeatherSchema](_models_weather_.iweatherschema.md) | null›› & QueryHelpers*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[findOneAndRemove](_models_horoscope_.ihoroscope.md#findoneandremove)*

Defined in node_modules/@types/mongoose/index.d.ts:3483

**Parameters:**

▪ **conditions**: *FilterQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

▪ **options**: *object & QueryFindOneAndRemoveOptions*

▪`Optional`  **callback**: *function*

▸ (`err`: any, `doc`: FindAndModifyWriteOpResultObject‹[IWeatherSchema](_models_weather_.iweatherschema.md) | null›, `res`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | any |
`doc` | FindAndModifyWriteOpResultObject‹[IWeatherSchema](_models_weather_.iweatherschema.md) &#124; null› |
`res` | any |

**Returns:** *Query‹FindAndModifyWriteOpResultObject‹[IWeatherSchema](_models_weather_.iweatherschema.md) | null›› & QueryHelpers*

▸ **findOneAndRemove**(`conditions`: FilterQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›, `options`: QueryFindOneAndRemoveOptions, `callback?`: function): *DocumentQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md) | null, [IWeatherSchema](_models_weather_.iweatherschema.md), QueryHelpers› & QueryHelpers*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[findOneAndRemove](_models_horoscope_.ihoroscope.md#findoneandremove)*

Defined in node_modules/@types/mongoose/index.d.ts:3486

**Parameters:**

▪ **conditions**: *FilterQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

▪ **options**: *QueryFindOneAndRemoveOptions*

▪`Optional`  **callback**: *function*

▸ (`err`: any, `res`: [IWeatherSchema](_models_weather_.iweatherschema.md) | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | any |
`res` | [IWeatherSchema](_models_weather_.iweatherschema.md) &#124; null |

**Returns:** *DocumentQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md) | null, [IWeatherSchema](_models_weather_.iweatherschema.md), QueryHelpers› & QueryHelpers*

___

###  findOneAndUpdate

▸ **findOneAndUpdate**(): *DocumentQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md) | null, [IWeatherSchema](_models_weather_.iweatherschema.md), QueryHelpers› & QueryHelpers*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[findOneAndUpdate](_models_horoscope_.ihoroscope.md#findoneandupdate)*

Defined in node_modules/@types/mongoose/index.d.ts:3513

Issues a mongodb findAndModify update command.
Finds a matching document, updates it according to the update arg, passing any options,
and returns the found document (if any) to the callback. The query executes immediately
if callback is passed else a Query object is returned.

If mongoose option 'useFindAndModify': set to false it uses native findOneAndUpdate() rather than the deprecated findAndModify().
https://mongoosejs.com/docs/api.html#mongoose_Mongoose-set

**Returns:** *DocumentQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md) | null, [IWeatherSchema](_models_weather_.iweatherschema.md), QueryHelpers› & QueryHelpers*

▸ **findOneAndUpdate**(`conditions`: FilterQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›, `update`: UpdateQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›, `callback?`: function): *DocumentQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md) | null, [IWeatherSchema](_models_weather_.iweatherschema.md), QueryHelpers› & QueryHelpers*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[findOneAndUpdate](_models_horoscope_.ihoroscope.md#findoneandupdate)*

Defined in node_modules/@types/mongoose/index.d.ts:3514

**Parameters:**

▪ **conditions**: *FilterQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

▪ **update**: *UpdateQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

▪`Optional`  **callback**: *function*

▸ (`err`: any, `doc`: [IWeatherSchema](_models_weather_.iweatherschema.md) | null, `res`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | any |
`doc` | [IWeatherSchema](_models_weather_.iweatherschema.md) &#124; null |
`res` | any |

**Returns:** *DocumentQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md) | null, [IWeatherSchema](_models_weather_.iweatherschema.md), QueryHelpers› & QueryHelpers*

▸ **findOneAndUpdate**(`conditions`: FilterQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›, `update`: UpdateQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›, `options`: object & object & QueryFindOneAndUpdateOptions, `callback?`: function): *Query‹FindAndModifyWriteOpResultObject‹[IWeatherSchema](_models_weather_.iweatherschema.md)›› & QueryHelpers*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[findOneAndUpdate](_models_horoscope_.ihoroscope.md#findoneandupdate)*

Defined in node_modules/@types/mongoose/index.d.ts:3516

**Parameters:**

▪ **conditions**: *FilterQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

▪ **update**: *UpdateQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

▪ **options**: *object & object & QueryFindOneAndUpdateOptions*

▪`Optional`  **callback**: *function*

▸ (`err`: any, `doc`: FindAndModifyWriteOpResultObject‹[IWeatherSchema](_models_weather_.iweatherschema.md)›, `res`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | any |
`doc` | FindAndModifyWriteOpResultObject‹[IWeatherSchema](_models_weather_.iweatherschema.md)› |
`res` | any |

**Returns:** *Query‹FindAndModifyWriteOpResultObject‹[IWeatherSchema](_models_weather_.iweatherschema.md)›› & QueryHelpers*

▸ **findOneAndUpdate**(`conditions`: FilterQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›, `update`: UpdateQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›, `options`: object & QueryFindOneAndUpdateOptions, `callback?`: function): *DocumentQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md), [IWeatherSchema](_models_weather_.iweatherschema.md), QueryHelpers› & QueryHelpers*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[findOneAndUpdate](_models_horoscope_.ihoroscope.md#findoneandupdate)*

Defined in node_modules/@types/mongoose/index.d.ts:3520

**Parameters:**

▪ **conditions**: *FilterQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

▪ **update**: *UpdateQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

▪ **options**: *object & QueryFindOneAndUpdateOptions*

▪`Optional`  **callback**: *function*

▸ (`err`: any, `doc`: [IWeatherSchema](_models_weather_.iweatherschema.md), `res`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | any |
`doc` | [IWeatherSchema](_models_weather_.iweatherschema.md) |
`res` | any |

**Returns:** *DocumentQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md), [IWeatherSchema](_models_weather_.iweatherschema.md), QueryHelpers› & QueryHelpers*

▸ **findOneAndUpdate**(`conditions`: FilterQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›, `update`: UpdateQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›, `options`: object & QueryFindOneAndUpdateOptions, `callback?`: function): *Query‹FindAndModifyWriteOpResultObject‹[IWeatherSchema](_models_weather_.iweatherschema.md) | null›› & QueryHelpers*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[findOneAndUpdate](_models_horoscope_.ihoroscope.md#findoneandupdate)*

Defined in node_modules/@types/mongoose/index.d.ts:3523

**Parameters:**

▪ **conditions**: *FilterQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

▪ **update**: *UpdateQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

▪ **options**: *object & QueryFindOneAndUpdateOptions*

▪`Optional`  **callback**: *function*

▸ (`err`: any, `doc`: FindAndModifyWriteOpResultObject‹[IWeatherSchema](_models_weather_.iweatherschema.md) | null›, `res`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | any |
`doc` | FindAndModifyWriteOpResultObject‹[IWeatherSchema](_models_weather_.iweatherschema.md) &#124; null› |
`res` | any |

**Returns:** *Query‹FindAndModifyWriteOpResultObject‹[IWeatherSchema](_models_weather_.iweatherschema.md) | null›› & QueryHelpers*

▸ **findOneAndUpdate**(`conditions`: FilterQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›, `update`: UpdateQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›, `options`: object & Omit‹QueryFindOneAndUpdateOptions, "lean"›, `callback?`: function): *Query‹DocumentDefinition‹[IWeatherSchema](_models_weather_.iweatherschema.md)›› & QueryHelpers*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[findOneAndUpdate](_models_horoscope_.ihoroscope.md#findoneandupdate)*

Defined in node_modules/@types/mongoose/index.d.ts:3527

**Parameters:**

▪ **conditions**: *FilterQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

▪ **update**: *UpdateQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

▪ **options**: *object & Omit‹QueryFindOneAndUpdateOptions, "lean"›*

▪`Optional`  **callback**: *function*

▸ (`err`: any, `doc`: DocumentDefinition‹[IWeatherSchema](_models_weather_.iweatherschema.md)›, `res`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | any |
`doc` | DocumentDefinition‹[IWeatherSchema](_models_weather_.iweatherschema.md)› |
`res` | any |

**Returns:** *Query‹DocumentDefinition‹[IWeatherSchema](_models_weather_.iweatherschema.md)›› & QueryHelpers*

▸ **findOneAndUpdate**(`conditions`: FilterQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›, `update`: UpdateQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›, `options`: QueryFindOneAndUpdateOptions, `callback?`: function): *DocumentQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md) | null, [IWeatherSchema](_models_weather_.iweatherschema.md), QueryHelpers› & QueryHelpers*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[findOneAndUpdate](_models_horoscope_.ihoroscope.md#findoneandupdate)*

Defined in node_modules/@types/mongoose/index.d.ts:3530

**Parameters:**

▪ **conditions**: *FilterQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

▪ **update**: *UpdateQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

▪ **options**: *QueryFindOneAndUpdateOptions*

▪`Optional`  **callback**: *function*

▸ (`err`: any, `doc`: [IWeatherSchema](_models_weather_.iweatherschema.md) | null, `res`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | any |
`doc` | [IWeatherSchema](_models_weather_.iweatherschema.md) &#124; null |
`res` | any |

**Returns:** *DocumentQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md) | null, [IWeatherSchema](_models_weather_.iweatherschema.md), QueryHelpers› & QueryHelpers*

___

###  findOutdatedCurrent

▸ **findOutdatedCurrent**(): *Promise‹[IWeatherSchema](_models_weather_.iweatherschema.md)[]›*

*Defined in [src/models/Weather.ts:257](https://github.com/Xisabla/Korbots/blob/177cb32/server/src/models/Weather.ts#L257)*

Look for all the Current entries that can be updated

**Returns:** *Promise‹[IWeatherSchema](_models_weather_.iweatherschema.md)[]›*

A Promise of an Array of Document

___

###  fromCurrent

▸ **fromCurrent**(`lat`: number, `lon`: number): *Promise‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

*Defined in [src/models/Weather.ts:267](https://github.com/Xisabla/Korbots/blob/177cb32/server/src/models/Weather.ts#L267)*

Run a fetch call to the API for the Current entry of a location and create a Document for it

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`lat` | number | Latitude of the location |
`lon` | number | Longitude of the location |

**Returns:** *Promise‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

A Promise of a Document

___

###  fromDaily

▸ **fromDaily**(`lat`: number, `long`: number): *Promise‹[IWeatherSchema](_models_weather_.iweatherschema.md)[]›*

*Defined in [src/models/Weather.ts:275](https://github.com/Xisabla/Korbots/blob/177cb32/server/src/models/Weather.ts#L275)*

Run a fetch call to the API for the Daily entries of a location and create a Document for each entry

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`lat` | number | Latitude of the location |
`long` | number | - |

**Returns:** *Promise‹[IWeatherSchema](_models_weather_.iweatherschema.md)[]›*

A Promise of a Document Array

___

###  geoSearch

▸ **geoSearch**(`conditions`: any, `options`: object, `callback?`: function): *DocumentQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)[], [IWeatherSchema](_models_weather_.iweatherschema.md), QueryHelpers› & QueryHelpers*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[geoSearch](_models_horoscope_.ihoroscope.md#geosearch)*

Defined in node_modules/@types/mongoose/index.d.ts:3540

Implements $geoSearch functionality for Mongoose

**Parameters:**

▪ **conditions**: *any*

an object that specifies the match condition (required)

▪ **options**: *object*

for the geoSearch, some (near, maxDistance) are required

Name | Type | Description |
------ | ------ | ------ |
`lean?` | boolean | return the raw object instead of the Mongoose Model |
`limit?` | number | The maximum number of results to return |
`maxDistance` | number | the maximum distance from the point near that a result can be |
`near` | number[] | x,y point to search for |

▪`Optional`  **callback**: *function*

optional callback

▸ (`err`: any, `res`: [IWeatherSchema](_models_weather_.iweatherschema.md)[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | any |
`res` | [IWeatherSchema](_models_weather_.iweatherschema.md)[] |

**Returns:** *DocumentQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)[], [IWeatherSchema](_models_weather_.iweatherschema.md), QueryHelpers› & QueryHelpers*

___

###  getCurrent

▸ **getCurrent**(`lat`: number, `lon`: number): *Promise‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

*Defined in [src/models/Weather.ts:165](https://github.com/Xisabla/Korbots/blob/177cb32/server/src/models/Weather.ts#L165)*

Look for existing Document or create a new one for the Current weather at the given location
Also perform update actions if needed

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`lat` | number | Latitude of the location |
`lon` | number | Longitude of the location |

**Returns:** *Promise‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

A promise of the Document

```typescript
Weather.getCurrent(51.51, -0.13).then((doc) => {
     console.log('London temperature:', doc.temperature)
})
```

___

###  getDaily

▸ **getDaily**(`lat`: number, `lon`: number, `date`: Date): *Promise‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

*Defined in [src/models/Weather.ts:181](https://github.com/Xisabla/Korbots/blob/177cb32/server/src/models/Weather.ts#L181)*

Look for existing Document or create a new one for the Daily weather at the given location and date

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`lat` | number | Latitude of the location |
`lon` | number | Longitude of the location |
`date` | Date | A promise of the Document  ```typescript const tomorrow = moment().add(1, 'days').toDate()  Weather.getDaily(51.51, -0.13, tomorrow).then((doc) => {      console.log('London temperature tomorrow:', doc.temperature) }) ```  |

**Returns:** *Promise‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

___

###  getDailyAll

▸ **getDailyAll**(`lat`: number, `lon`: number, `further?`: number): *Promise‹[IWeatherSchema](_models_weather_.iweatherschema.md)[]›*

*Defined in [src/models/Weather.ts:196](https://github.com/Xisabla/Korbots/blob/177cb32/server/src/models/Weather.ts#L196)*

Get all (look for or create if needed) the Daily weather Documents for next further days (begin: tomorrow) at the given location

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`lat` | number | Latitude of the location |
`lon` | number | Longitude of the location |
`further?` | number | Number of further days (1 means only tomorrow) (default: 4) |

**Returns:** *Promise‹[IWeatherSchema](_models_weather_.iweatherschema.md)[]›*

A promise of an Array of the Documents

```typescript
Weather.getDailyAll(51.51, -0.13).then((docs) => {
     console.log('London temperature tomorrow:', docs[0].temperature)
})
```

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from [IHoroscopeSchema](_models_horoscope_.ihoroscopeschema.md).[getMaxListeners](_models_horoscope_.ihoroscopeschema.md#getmaxlisteners)*

Defined in node_modules/@types/node/globals.d.ts:557

**Returns:** *number*

___

###  hydrate

▸ **hydrate**(`obj`: any): *[IWeatherSchema](_models_weather_.iweatherschema.md)*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[hydrate](_models_horoscope_.ihoroscope.md#hydrate)*

Defined in node_modules/@types/mongoose/index.d.ts:3556

Shortcut for creating a new Document from existing raw data,
pre-saved in the DB. The document returned has no paths marked
as modified initially.

**Parameters:**

Name | Type |
------ | ------ |
`obj` | any |

**Returns:** *[IWeatherSchema](_models_weather_.iweatherschema.md)*

___

###  init

▸ **init**(`callback?`: function): *Promise‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[init](_models_horoscope_.ihoroscope.md#init)*

Defined in node_modules/@types/mongoose/index.d.ts:3585

Performs any async initialization of this model against MongoDB.
This function is called automatically, so you don't need to call it.
This function is also idempotent, so you may call it to get back a promise
that will resolve when your indexes are finished building as an alternative
to `MyModel.on('index')`

**Parameters:**

▪`Optional`  **callback**: *function*

optional

▸ (`err`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | any |

**Returns:** *Promise‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

___

###  insertMany

▸ **insertMany**(`docs`: any[], `callback?`: function): *Promise‹[IWeatherSchema](_models_weather_.iweatherschema.md)[]›*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[insertMany](_models_horoscope_.ihoroscope.md#insertmany)*

Defined in node_modules/@types/mongoose/index.d.ts:3572

Shortcut for validating an array of documents and inserting them into
MongoDB if they're all valid. This function is faster than .create()
because it only sends one operation to the server, rather than one for each
document.
This function does not trigger save middleware.

**Parameters:**

▪ **docs**: *any[]*

Documents to insert.

▪`Optional`  **callback**: *function*

▸ (`error`: any, `docs`: [IWeatherSchema](_models_weather_.iweatherschema.md)[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error` | any |
`docs` | [IWeatherSchema](_models_weather_.iweatherschema.md)[] |

**Returns:** *Promise‹[IWeatherSchema](_models_weather_.iweatherschema.md)[]›*

▸ **insertMany**(`docs`: any[], `options?`: object & ModelOptions, `callback?`: function): *Promise‹[IWeatherSchema](_models_weather_.iweatherschema.md)[]›*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[insertMany](_models_horoscope_.ihoroscope.md#insertmany)*

Defined in node_modules/@types/mongoose/index.d.ts:3573

**Parameters:**

▪ **docs**: *any[]*

▪`Optional`  **options**: *object & ModelOptions*

▪`Optional`  **callback**: *function*

▸ (`error`: any, `docs`: [IWeatherSchema](_models_weather_.iweatherschema.md)[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error` | any |
`docs` | [IWeatherSchema](_models_weather_.iweatherschema.md)[] |

**Returns:** *Promise‹[IWeatherSchema](_models_weather_.iweatherschema.md)[]›*

▸ **insertMany**(`doc`: any, `callback?`: function): *Promise‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[insertMany](_models_horoscope_.ihoroscope.md#insertmany)*

Defined in node_modules/@types/mongoose/index.d.ts:3574

**Parameters:**

▪ **doc**: *any*

▪`Optional`  **callback**: *function*

▸ (`error`: any, `doc`: [IWeatherSchema](_models_weather_.iweatherschema.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error` | any |
`doc` | [IWeatherSchema](_models_weather_.iweatherschema.md) |

**Returns:** *Promise‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

▸ **insertMany**(`doc`: any, `options?`: object & ModelOptions, `callback?`: function): *Promise‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[insertMany](_models_horoscope_.ihoroscope.md#insertmany)*

Defined in node_modules/@types/mongoose/index.d.ts:3575

**Parameters:**

▪ **doc**: *any*

▪`Optional`  **options**: *object & ModelOptions*

▪`Optional`  **callback**: *function*

▸ (`error`: any, `doc`: [IWeatherSchema](_models_weather_.iweatherschema.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error` | any |
`doc` | [IWeatherSchema](_models_weather_.iweatherschema.md) |

**Returns:** *Promise‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

___

###  listIndexes

▸ **listIndexes**(`callback`: function): *void*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[listIndexes](_models_horoscope_.ihoroscope.md#listindexes)*

Defined in node_modules/@types/mongoose/index.d.ts:3333

Lists the indexes currently defined in MongoDB. This may or may not be
the same as the indexes defined in your schema depending on whether you
use the [`autoIndex` option](/docs/guide.html#autoIndex) and if you
build indexes manually.

**Parameters:**

▪ **callback**: *function*

▸ (`err`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | any |

**Returns:** *void*

Returns `undefined` if callback is specified, returns a promise if no callback.

▸ **listIndexes**(): *Promise‹void›*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[listIndexes](_models_horoscope_.ihoroscope.md#listindexes)*

Defined in node_modules/@types/mongoose/index.d.ts:3334

**Returns:** *Promise‹void›*

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

###  mapReduce

▸ **mapReduce**‹**Key**, **Value**›(`o`: ModelMapReduceOption‹[IWeatherSchema](_models_weather_.iweatherschema.md), Key, Value›, `callback?`: function): *Promise‹any›*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[mapReduce](_models_horoscope_.ihoroscope.md#mapreduce)*

Defined in node_modules/@types/mongoose/index.d.ts:3592

Executes a mapReduce command.

**Type parameters:**

▪ **Key**

▪ **Value**

**Parameters:**

▪ **o**: *ModelMapReduceOption‹[IWeatherSchema](_models_weather_.iweatherschema.md), Key, Value›*

an object specifying map-reduce options

▪`Optional`  **callback**: *function*

▸ (`err`: any, `res`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | any |
`res` | any |

**Returns:** *Promise‹any›*

___

###  model

▸ **model**‹**U**›(`name`: string): *[Model](_models_horoscope_.ihoroscope.md#model)‹U›*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[model](_models_horoscope_.ihoroscope.md#model)*

Defined in node_modules/@types/mongoose/index.d.ts:3228

**Type parameters:**

▪ **U**: *Document*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *[Model](_models_horoscope_.ihoroscope.md#model)‹U›*

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

###  populate

▸ **populate**(`docs`: any[], `options`: ModelPopulateOptions | ModelPopulateOptions[], `callback?`: function): *Promise‹[IWeatherSchema](_models_weather_.iweatherschema.md)[]›*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[populate](_models_horoscope_.ihoroscope.md#populate)*

Defined in node_modules/@types/mongoose/index.d.ts:3603

Populates document references.

**Parameters:**

▪ **docs**: *any[]*

Either a single document or array of documents to populate.

▪ **options**: *ModelPopulateOptions | ModelPopulateOptions[]*

A hash of key/val (path, options) used for population.

▪`Optional`  **callback**: *function*

Optional callback, executed upon completion. Receives err and the doc(s).

▸ (`err`: any, `res`: [IWeatherSchema](_models_weather_.iweatherschema.md)[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | any |
`res` | [IWeatherSchema](_models_weather_.iweatherschema.md)[] |

**Returns:** *Promise‹[IWeatherSchema](_models_weather_.iweatherschema.md)[]›*

▸ **populate**‹**T**›(`docs`: any, `options`: ModelPopulateOptions | ModelPopulateOptions[], `callback?`: function): *Promise‹T›*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[populate](_models_horoscope_.ihoroscope.md#populate)*

Defined in node_modules/@types/mongoose/index.d.ts:3605

**Type parameters:**

▪ **T**

**Parameters:**

▪ **docs**: *any*

▪ **options**: *ModelPopulateOptions | ModelPopulateOptions[]*

▪`Optional`  **callback**: *function*

▸ (`err`: any, `res`: T): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | any |
`res` | T |

**Returns:** *Promise‹T›*

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

▸ **remove**(`conditions`: FilterQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›, `callback?`: function): *Query‹DeleteWriteOpResultObject["result"] & object› & QueryHelpers*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[remove](_models_horoscope_.ihoroscope.md#remove)*

Defined in node_modules/@types/mongoose/index.d.ts:3609

Removes documents from the collection.

**Parameters:**

▪ **conditions**: *FilterQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

▪`Optional`  **callback**: *function*

▸ (`err`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | any |

**Returns:** *Query‹DeleteWriteOpResultObject["result"] & object› & QueryHelpers*

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

###  removeLowScored

▸ **removeLowScored**(): *Promise‹any›*

*Defined in [src/models/Weather.ts:308](https://github.com/Xisabla/Korbots/blob/177cb32/server/src/models/Weather.ts#L308)*

Will remove all Documents with a low updateScore

**Returns:** *Promise‹any›*

___

###  removeOld

▸ **removeOld**(): *Promise‹any›*

*Defined in [src/models/Weather.ts:303](https://github.com/Xisabla/Korbots/blob/177cb32/server/src/models/Weather.ts#L303)*

Will remove all Documents older than 24 hours to avoid useless entries in the Database

**Returns:** *Promise‹any›*

___

###  replaceOne

▸ **replaceOne**(`conditions`: FilterQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›, `replacement`: any, `callback?`: function): *Query‹any› & QueryHelpers*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[replaceOne](_models_horoscope_.ihoroscope.md#replaceone)*

Defined in node_modules/@types/mongoose/index.d.ts:3619

Same as update(), except MongoDB replace the existing document with the given document (no atomic operators like $set).
This function triggers the following middleware: replaceOne

**Parameters:**

▪ **conditions**: *FilterQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

▪ **replacement**: *any*

▪`Optional`  **callback**: *function*

▸ (`err`: any, `raw`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | any |
`raw` | any |

**Returns:** *Query‹any› & QueryHelpers*

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

###  syncIndexes

▸ **syncIndexes**(`options`: object | null | undefined, `callback`: function): *void*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[syncIndexes](_models_horoscope_.ihoroscope.md#syncindexes)*

Defined in node_modules/@types/mongoose/index.d.ts:3322

Makes the indexes in MongoDB match the indexes defined in this model's
schema. This function will drop any indexes that are not defined in
the model's schema except the `_id` index, and build any indexes that
are in your schema but not in MongoDB.

**Parameters:**

▪ **options**: *object | null | undefined*

options to pass to `ensureIndexes()`

▪ **callback**: *function*

optional callback

▸ (`err`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | any |

**Returns:** *void*

Returns `undefined` if callback is specified, returns a promise if no callback.

▸ **syncIndexes**(`options?`: object | null): *Promise‹void›*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[syncIndexes](_models_horoscope_.ihoroscope.md#syncindexes)*

Defined in node_modules/@types/mongoose/index.d.ts:3323

**Parameters:**

Name | Type |
------ | ------ |
`options?` | object &#124; null |

**Returns:** *Promise‹void›*

___

###  translateAliases

▸ **translateAliases**(`raw`: any): *any*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[translateAliases](_models_horoscope_.ihoroscope.md#translatealiases)*

Defined in node_modules/@types/mongoose/index.d.ts:3213

Translate any aliases fields/conditions so the final query or document object is pure

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`raw` | any | fields/conditions that may contain aliased keys |

**Returns:** *any*

the translated 'pure' fields/conditions

___

###  update

▸ **update**(`conditions`: FilterQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›, `doc`: UpdateQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›, `callback?`: function): *Query‹any› & QueryHelpers*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[update](_models_horoscope_.ihoroscope.md#update)*

Defined in node_modules/@types/mongoose/index.d.ts:3625

Updates documents in the database without returning them.
All update values are cast to their appropriate SchemaTypes before being sent.

**Parameters:**

▪ **conditions**: *FilterQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

▪ **doc**: *UpdateQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

▪`Optional`  **callback**: *function*

▸ (`err`: any, `raw`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | any |
`raw` | any |

**Returns:** *Query‹any› & QueryHelpers*

▸ **update**(`conditions`: FilterQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›, `doc`: UpdateQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›, `options`: ModelUpdateOptions, `callback?`: function): *Query‹any› & QueryHelpers*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[update](_models_horoscope_.ihoroscope.md#update)*

Defined in node_modules/@types/mongoose/index.d.ts:3627

**Parameters:**

▪ **conditions**: *FilterQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

▪ **doc**: *UpdateQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

▪ **options**: *ModelUpdateOptions*

▪`Optional`  **callback**: *function*

▸ (`err`: any, `raw`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | any |
`raw` | any |

**Returns:** *Query‹any› & QueryHelpers*

___

###  updateMany

▸ **updateMany**(`conditions`: FilterQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›, `doc`: UpdateQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›, `callback?`: function): *Query‹any› & QueryHelpers*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[updateMany](_models_horoscope_.ihoroscope.md#updatemany)*

Defined in node_modules/@types/mongoose/index.d.ts:3633

**Parameters:**

▪ **conditions**: *FilterQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

▪ **doc**: *UpdateQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

▪`Optional`  **callback**: *function*

▸ (`err`: any, `raw`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | any |
`raw` | any |

**Returns:** *Query‹any› & QueryHelpers*

▸ **updateMany**(`conditions`: FilterQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›, `doc`: UpdateQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›, `options`: ModelUpdateOptions, `callback?`: function): *Query‹any› & QueryHelpers*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[updateMany](_models_horoscope_.ihoroscope.md#updatemany)*

Defined in node_modules/@types/mongoose/index.d.ts:3635

**Parameters:**

▪ **conditions**: *FilterQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

▪ **doc**: *UpdateQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

▪ **options**: *ModelUpdateOptions*

▪`Optional`  **callback**: *function*

▸ (`err`: any, `raw`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | any |
`raw` | any |

**Returns:** *Query‹any› & QueryHelpers*

___

###  updateOne

▸ **updateOne**(`conditions`: FilterQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›, `doc`: UpdateQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›, `callback?`: function): *Query‹any› & QueryHelpers*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[updateOne](_models_horoscope_.ihoroscope.md#updateone)*

Defined in node_modules/@types/mongoose/index.d.ts:3629

**Parameters:**

▪ **conditions**: *FilterQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

▪ **doc**: *UpdateQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

▪`Optional`  **callback**: *function*

▸ (`err`: any, `raw`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | any |
`raw` | any |

**Returns:** *Query‹any› & QueryHelpers*

▸ **updateOne**(`conditions`: FilterQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›, `doc`: UpdateQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›, `options`: ModelUpdateOptions, `callback?`: function): *Query‹any› & QueryHelpers*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[updateOne](_models_horoscope_.ihoroscope.md#updateone)*

Defined in node_modules/@types/mongoose/index.d.ts:3631

**Parameters:**

▪ **conditions**: *FilterQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

▪ **doc**: *UpdateQuery‹[IWeatherSchema](_models_weather_.iweatherschema.md)›*

▪ **options**: *ModelUpdateOptions*

▪`Optional`  **callback**: *function*

▸ (`err`: any, `raw`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | any |
`raw` | any |

**Returns:** *Query‹any› & QueryHelpers*

___

###  watch

▸ **watch**(`pipeline?`: object[], `options?`: ChangeStreamOptions & object): *ChangeStream*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[watch](_models_horoscope_.ihoroscope.md#watch)*

Defined in node_modules/@types/mongoose/index.d.ts:3203

Requires a replica set running MongoDB >= 3.6.0. Watches the underlying collection for changes using MongoDB change streams.
This function does not trigger any middleware. In particular, it does not trigger aggregate middleware.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`pipeline?` | object[] | See http://mongodb.github.io/node-mongodb-native/3.3/api/Collection.html#watch |
`options?` | ChangeStreamOptions & object | See https://mongodb.github.io/node-mongodb-native/3.3/api/Collection.html#watch  |

**Returns:** *ChangeStream*

___

###  where

▸ **where**(`path`: string, `val?`: any): *Query‹any› & QueryHelpers*

*Inherited from [IHoroscope](_models_horoscope_.ihoroscope.md).[where](_models_horoscope_.ihoroscope.md#where)*

Defined in node_modules/@types/mongoose/index.d.ts:3639

Creates a Query, applies the passed conditions, and returns the Query.

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |
`val?` | any |

**Returns:** *Query‹any› & QueryHelpers*
