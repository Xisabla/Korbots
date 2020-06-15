[korbots-server](../README.md) › ["core/Application"](../modules/_core_application_.md) › [Application](_core_application_.application.md)

# Class: Application

Main application Object, registers components, starts the server

## Hierarchy

* **Application**

## Index

### Constructors

* [constructor](_core_application_.application.md#constructor)

### Properties

* [_app](_core_application_.application.md#private-_app)
* [_io](_core_application_.application.md#private-_io)
* [_modules](_core_application_.application.md#private-_modules)
* [_options](_core_application_.application.md#private-_options)
* [_server](_core_application_.application.md#private-_server)
* [_sockets](_core_application_.application.md#private-_sockets)
* [_tasks](_core_application_.application.md#private-_tasks)
* [db](_core_application_.application.md#private-optional-db)
* [dbPending](_core_application_.application.md#private-optional-dbpending)
* [apis](_core_application_.application.md#static-apis)

### Accessors

* [io](_core_application_.application.md#io)
* [sockets](_core_application_.application.md#sockets)
* [tasks](_core_application_.application.md#tasks)

### Methods

* [connectDB](_core_application_.application.md#connectdb)
* [init](_core_application_.application.md#private-init)
* [loadEnv](_core_application_.application.md#private-loadenv)
* [onSocketJoin](_core_application_.application.md#private-onsocketjoin)
* [registerModule](_core_application_.application.md#registermodule)
* [run](_core_application_.application.md#run)
* [startServer](_core_application_.application.md#private-startserver)
* [getAPI](_core_application_.application.md#static-getapi)
* [getAPIBaseUrl](_core_application_.application.md#static-getapibaseurl)
* [getAPIKey](_core_application_.application.md#static-getapikey)
* [registerAPI](_core_application_.application.md#static-registerapi)
* [registerAPIs](_core_application_.application.md#static-registerapis)

## Constructors

###  constructor

\+ **new Application**(`options`: [ApplicationOptions](../interfaces/_core_application_.applicationoptions.md)): *[Application](_core_application_.application.md)*

*Defined in [src/core/Application.ts:72](https://github.com/Xisabla/Korbots/blob/2fc3376/server/src/core/Application.ts#L72)*

Create an application object that controls the server and the components

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`options` | [ApplicationOptions](../interfaces/_core_application_.applicationoptions.md) | {} | Application global options  |

**Returns:** *[Application](_core_application_.application.md)*

## Properties

### `Private` _app

• **_app**: *express.Application*

*Defined in [src/core/Application.ts:52](https://github.com/Xisabla/Korbots/blob/2fc3376/server/src/core/Application.ts#L52)*

Express internal server

___

### `Private` _io

• **_io**: *Server*

*Defined in [src/core/Application.ts:56](https://github.com/Xisabla/Korbots/blob/2fc3376/server/src/core/Application.ts#L56)*

SocketIO server linked  with the HTTP server

___

### `Private` _modules

• **_modules**: *[Module](_core_module_.module.md)[]*

*Defined in [src/core/Application.ts:66](https://github.com/Xisabla/Korbots/blob/2fc3376/server/src/core/Application.ts#L66)*

Module store

___

### `Private` _options

• **_options**: *[ApplicationOptions](../interfaces/_core_application_.applicationoptions.md)*

*Defined in [src/core/Application.ts:48](https://github.com/Xisabla/Korbots/blob/2fc3376/server/src/core/Application.ts#L48)*

___

### `Private` _server

• **_server**: *Server*

*Defined in [src/core/Application.ts:54](https://github.com/Xisabla/Korbots/blob/2fc3376/server/src/core/Application.ts#L54)*

HTTP server from express server

___

### `Private` _sockets

• **_sockets**: *Socket[]*

*Defined in [src/core/Application.ts:68](https://github.com/Xisabla/Korbots/blob/2fc3376/server/src/core/Application.ts#L68)*

Socket store

___

### `Private` _tasks

• **_tasks**: *[TaskManager](_core_taskmanager_.taskmanager.md)*

*Defined in [src/core/Application.ts:70](https://github.com/Xisabla/Korbots/blob/2fc3376/server/src/core/Application.ts#L70)*

Tasks store

___

### `Private` `Optional` db

• **db**? : *Mongoose*

*Defined in [src/core/Application.ts:62](https://github.com/Xisabla/Korbots/blob/2fc3376/server/src/core/Application.ts#L62)*

Result of the resolve from Mongoose Connection, null if no database connection

___

### `Private` `Optional` dbPending

• **dbPending**? : *Promise‹Mongoose›*

*Defined in [src/core/Application.ts:60](https://github.com/Xisabla/Korbots/blob/2fc3376/server/src/core/Application.ts#L60)*

Promise returned on Mongoose connection, allows to synchronize after DB connection, null if no database connection

___

### `Static` apis

▪ **apis**: *[APIwk](../interfaces/_core_api_api_.apiwk.md)[]*

*Defined in [src/core/Application.ts:72](https://github.com/Xisabla/Korbots/blob/2fc3376/server/src/core/Application.ts#L72)*

API store

## Accessors

###  io

• **get io**(): *Server*

*Defined in [src/core/Application.ts:358](https://github.com/Xisabla/Korbots/blob/2fc3376/server/src/core/Application.ts#L358)*

**Returns:** *Server*

___

###  sockets

• **get sockets**(): *Socket[]*

*Defined in [src/core/Application.ts:362](https://github.com/Xisabla/Korbots/blob/2fc3376/server/src/core/Application.ts#L362)*

**Returns:** *Socket[]*

___

###  tasks

• **get tasks**(): *[TaskManager](_core_taskmanager_.taskmanager.md)*

*Defined in [src/core/Application.ts:366](https://github.com/Xisabla/Korbots/blob/2fc3376/server/src/core/Application.ts#L366)*

**Returns:** *[TaskManager](_core_taskmanager_.taskmanager.md)*

## Methods

###  connectDB

▸ **connectDB**(`configuration?`: [DatabaseConfiguration](../interfaces/_core_application_.databaseconfiguration.md)): *Promise‹Mongoose›*

*Defined in [src/core/Application.ts:150](https://github.com/Xisabla/Korbots/blob/2fc3376/server/src/core/Application.ts#L150)*

Try to connect to the database, updates internal dbPending promise

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`configuration?` | [DatabaseConfiguration](../interfaces/_core_application_.databaseconfiguration.md) | Database configuration (user, password, dbname)  |

**Returns:** *Promise‹Mongoose›*

___

### `Private` init

▸ **init**(): *void*

*Defined in [src/core/Application.ts:113](https://github.com/Xisabla/Korbots/blob/2fc3376/server/src/core/Application.ts#L113)*

Initialize internal data, http and socket.io server

**Returns:** *void*

___

### `Private` loadEnv

▸ **loadEnv**(): *void*

*Defined in [src/core/Application.ts:130](https://github.com/Xisabla/Korbots/blob/2fc3376/server/src/core/Application.ts#L130)*

Load options from the .env file

**Returns:** *void*

___

### `Private` onSocketJoin

▸ **onSocketJoin**(`socket`: Socket): *void*

*Defined in [src/core/Application.ts:290](https://github.com/Xisabla/Korbots/blob/2fc3376/server/src/core/Application.ts#L290)*

Triggers all connection listeners, also wait for disconnection to trigger disconnection listeners

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`socket` | Socket |   |

**Returns:** *void*

___

###  registerModule

▸ **registerModule**(`module`: [Module](_core_module_.module.md)): *void*

*Defined in [src/core/Application.ts:191](https://github.com/Xisabla/Korbots/blob/2fc3376/server/src/core/Application.ts#L191)*

Register a Module inside the Application, run the internal "register" method of the Module

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`module` | [Module](_core_module_.module.md) | The Module to register  |

**Returns:** *void*

___

###  run

▸ **run**(): *Promise‹Server›*

*Defined in [src/core/Application.ts:345](https://github.com/Xisabla/Korbots/blob/2fc3376/server/src/core/Application.ts#L345)*

Start the server, if there is a pending connection try to the database, wait for it to end

**Returns:** *Promise‹Server›*

___

### `Private` startServer

▸ **startServer**(): *Promise‹Server›*

*Defined in [src/core/Application.ts:316](https://github.com/Xisabla/Korbots/blob/2fc3376/server/src/core/Application.ts#L316)*

Start the server, returns a Promise to keep the promise pipe

**Returns:** *Promise‹Server›*

___

### `Static` getAPI

▸ **getAPI**(`name`: string): *[APIwk](../interfaces/_core_api_api_.apiwk.md) | null*

*Defined in [src/core/Application.ts:260](https://github.com/Xisabla/Korbots/blob/2fc3376/server/src/core/Application.ts#L260)*

Get an API from it's name, null if not found

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | The API name  |

**Returns:** *[APIwk](../interfaces/_core_api_api_.apiwk.md) | null*

___

### `Static` getAPIBaseUrl

▸ **getAPIBaseUrl**(`name`: string): *string*

*Defined in [src/core/Application.ts:278](https://github.com/Xisabla/Korbots/blob/2fc3376/server/src/core/Application.ts#L278)*

Get the baseUrl of an API from it's name, empty if not found

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | The API name  |

**Returns:** *string*

___

### `Static` getAPIKey

▸ **getAPIKey**(`name`: string): *string*

*Defined in [src/core/Application.ts:268](https://github.com/Xisabla/Korbots/blob/2fc3376/server/src/core/Application.ts#L268)*

Get the key of an API from it's name, empty if not found

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | The API name  |

**Returns:** *string*

___

### `Static` registerAPI

▸ **registerAPI**(`api`: [API](../interfaces/_core_api_api_.api.md)): *void*

*Defined in [src/core/Application.ts:219](https://github.com/Xisabla/Korbots/blob/2fc3376/server/src/core/Application.ts#L219)*

Register a API inside the Application, erase API with the same name, will automatically retrieve the api_key from .env file it the entry exists

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`api` | [API](../interfaces/_core_api_api_.api.md) | The API to register  |

**Returns:** *void*

___

### `Static` registerAPIs

▸ **registerAPIs**(`apis`: [API](../interfaces/_core_api_api_.api.md)[]): *void*

*Defined in [src/core/Application.ts:252](https://github.com/Xisabla/Korbots/blob/2fc3376/server/src/core/Application.ts#L252)*

Register multiple APIs, if any API has the same name as an existing it will erase

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`apis` | [API](../interfaces/_core_api_api_.api.md)[] | APIs to register  |

**Returns:** *void*
