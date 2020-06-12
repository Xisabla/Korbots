[korbots-server](../README.md) › [Globals](../globals.md) › ["core/Application"](../modules/_core_application_.md) › [Application](_core_application_.application.md)

# Class: Application

Main application Object, registers components, starts the server

## Hierarchy

* **Application**

## Index

### Constructors

* [constructor](_core_application_.application.md#constructor)

### Properties

* [app](_core_application_.application.md#app)
* [db](_core_application_.application.md#optional-db)
* [dbPending](_core_application_.application.md#optional-dbpending)
* [io](_core_application_.application.md#io)
* [modules](_core_application_.application.md#modules)
* [options](_core_application_.application.md#options)
* [server](_core_application_.application.md#server)
* [sockets](_core_application_.application.md#sockets)
* [apis](_core_application_.application.md#static-apis)

### Methods

* [connectDB](_core_application_.application.md#connectdb)
* [init](_core_application_.application.md#init)
* [loadEnv](_core_application_.application.md#loadenv)
* [onSocketJoin](_core_application_.application.md#onsocketjoin)
* [registerModule](_core_application_.application.md#registermodule)
* [run](_core_application_.application.md#run)
* [startServer](_core_application_.application.md#startserver)
* [getAPI](_core_application_.application.md#static-getapi)
* [getAPIBaseUrl](_core_application_.application.md#static-getapibaseurl)
* [getAPIKey](_core_application_.application.md#static-getapikey)
* [registerAPI](_core_application_.application.md#static-registerapi)
* [registerAPIs](_core_application_.application.md#static-registerapis)

## Constructors

###  constructor

\+ **new Application**(`options`: [ApplicationOptions](../interfaces/_core_application_.applicationoptions.md)): *[Application](_core_application_.application.md)*

*Defined in [src/core/Application.ts:69](https://github.com/Xisabla/Korbots/blob/c8927cf/server/src/core/Application.ts#L69)*

Create an application object that controls the server and the components

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`options` | [ApplicationOptions](../interfaces/_core_application_.applicationoptions.md) | {} | Application global options  |

**Returns:** *[Application](_core_application_.application.md)*

## Properties

###  app

• **app**: *express.Application*

*Defined in [src/core/Application.ts:51](https://github.com/Xisabla/Korbots/blob/c8927cf/server/src/core/Application.ts#L51)*

Express internal server

___

### `Optional` db

• **db**? : *Mongoose*

*Defined in [src/core/Application.ts:61](https://github.com/Xisabla/Korbots/blob/c8927cf/server/src/core/Application.ts#L61)*

Result of the resolve from Mongoose Connection, null if no database connection

___

### `Optional` dbPending

• **dbPending**? : *Promise‹Mongoose›*

*Defined in [src/core/Application.ts:59](https://github.com/Xisabla/Korbots/blob/c8927cf/server/src/core/Application.ts#L59)*

Promise returned on Mongoose connection, allows to synchronize after DB connection, null if no database connection

___

###  io

• **io**: *Server*

*Defined in [src/core/Application.ts:55](https://github.com/Xisabla/Korbots/blob/c8927cf/server/src/core/Application.ts#L55)*

SocketIO server linked  with the HTTP server

___

###  modules

• **modules**: *[Module](_core_module_.module.md)[]*

*Defined in [src/core/Application.ts:65](https://github.com/Xisabla/Korbots/blob/c8927cf/server/src/core/Application.ts#L65)*

Module store

___

###  options

• **options**: *[ApplicationOptions](../interfaces/_core_application_.applicationoptions.md)*

*Defined in [src/core/Application.ts:47](https://github.com/Xisabla/Korbots/blob/c8927cf/server/src/core/Application.ts#L47)*

___

###  server

• **server**: *Server*

*Defined in [src/core/Application.ts:53](https://github.com/Xisabla/Korbots/blob/c8927cf/server/src/core/Application.ts#L53)*

HTTP server from express server

___

###  sockets

• **sockets**: *Socket[]*

*Defined in [src/core/Application.ts:67](https://github.com/Xisabla/Korbots/blob/c8927cf/server/src/core/Application.ts#L67)*

Socket store

___

### `Static` apis

▪ **apis**: *[APIwk](../interfaces/_core_api_api_.apiwk.md)[]*

*Defined in [src/core/Application.ts:69](https://github.com/Xisabla/Korbots/blob/c8927cf/server/src/core/Application.ts#L69)*

API store

## Methods

###  connectDB

▸ **connectDB**(`configuration?`: [DatabaseConfiguration](../interfaces/_core_application_.databaseconfiguration.md)): *Promise‹Mongoose›*

*Defined in [src/core/Application.ts:146](https://github.com/Xisabla/Korbots/blob/c8927cf/server/src/core/Application.ts#L146)*

Try to connect to the database, updates internal dbPending promise

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`configuration?` | [DatabaseConfiguration](../interfaces/_core_application_.databaseconfiguration.md) | Database configuration (user, password, dbname)  |

**Returns:** *Promise‹Mongoose›*

___

###  init

▸ **init**(): *void*

*Defined in [src/core/Application.ts:110](https://github.com/Xisabla/Korbots/blob/c8927cf/server/src/core/Application.ts#L110)*

Initialize internal data, http and socket.io server

**Returns:** *void*

___

###  loadEnv

▸ **loadEnv**(): *void*

*Defined in [src/core/Application.ts:126](https://github.com/Xisabla/Korbots/blob/c8927cf/server/src/core/Application.ts#L126)*

Load options from the .env file

**Returns:** *void*

___

###  onSocketJoin

▸ **onSocketJoin**(`socket`: Socket): *void*

*Defined in [src/core/Application.ts:290](https://github.com/Xisabla/Korbots/blob/c8927cf/server/src/core/Application.ts#L290)*

Triggers all connection listeners, also wait for disconnection to trigger disconnection listeners

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`socket` | Socket |   |

**Returns:** *void*

___

###  registerModule

▸ **registerModule**(`module`: [Module](_core_module_.module.md)): *void*

*Defined in [src/core/Application.ts:187](https://github.com/Xisabla/Korbots/blob/c8927cf/server/src/core/Application.ts#L187)*

Register a Module inside the Application, run the internal "register" method of the Module

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`module` | [Module](_core_module_.module.md) | The Module to register  |

**Returns:** *void*

___

###  run

▸ **run**(): *Promise‹Server›*

*Defined in [src/core/Application.ts:334](https://github.com/Xisabla/Korbots/blob/c8927cf/server/src/core/Application.ts#L334)*

Start the server, if there is a pending connection try to the database, wait for it to end

**Returns:** *Promise‹Server›*

___

###  startServer

▸ **startServer**(): *Promise‹Server›*

*Defined in [src/core/Application.ts:310](https://github.com/Xisabla/Korbots/blob/c8927cf/server/src/core/Application.ts#L310)*

Start the server, returns a Promise to keep the promise pipe

**Returns:** *Promise‹Server›*

___

### `Static` getAPI

▸ **getAPI**(`name`: string): *[APIwk](../interfaces/_core_api_api_.apiwk.md) | null*

*Defined in [src/core/Application.ts:260](https://github.com/Xisabla/Korbots/blob/c8927cf/server/src/core/Application.ts#L260)*

Get an API from it's name, null if not found

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | The API name  |

**Returns:** *[APIwk](../interfaces/_core_api_api_.apiwk.md) | null*

___

### `Static` getAPIBaseUrl

▸ **getAPIBaseUrl**(`name`: string): *string*

*Defined in [src/core/Application.ts:278](https://github.com/Xisabla/Korbots/blob/c8927cf/server/src/core/Application.ts#L278)*

Get the baseUrl of an API from it's name, empty if not found

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | The API name  |

**Returns:** *string*

___

### `Static` getAPIKey

▸ **getAPIKey**(`name`: string): *string*

*Defined in [src/core/Application.ts:268](https://github.com/Xisabla/Korbots/blob/c8927cf/server/src/core/Application.ts#L268)*

Get the key of an API from it's name, empty if not found

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | The API name  |

**Returns:** *string*

___

### `Static` registerAPI

▸ **registerAPI**(`api`: [API](../interfaces/_core_api_api_.api.md)): *void*

*Defined in [src/core/Application.ts:219](https://github.com/Xisabla/Korbots/blob/c8927cf/server/src/core/Application.ts#L219)*

Register a API inside the Application, erase API with the same name, will automatically retrieve the api_key from .env file it the entry exists

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`api` | [API](../interfaces/_core_api_api_.api.md) | The API to register  |

**Returns:** *void*

___

### `Static` registerAPIs

▸ **registerAPIs**(`apis`: [API](../interfaces/_core_api_api_.api.md)[]): *void*

*Defined in [src/core/Application.ts:252](https://github.com/Xisabla/Korbots/blob/c8927cf/server/src/core/Application.ts#L252)*

Register multiple APIs, if any API has the same name as an existing it will erase

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`apis` | [API](../interfaces/_core_api_api_.api.md)[] | APIs to register  |

**Returns:** *void*
