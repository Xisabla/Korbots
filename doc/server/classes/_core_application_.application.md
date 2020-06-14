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
* [db](_core_application_.application.md#private-optional-db)
* [dbPending](_core_application_.application.md#private-optional-dbpending)
* [apis](_core_application_.application.md#static-apis)

### Accessors

* [sockets](_core_application_.application.md#sockets)

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

*Defined in [src/core/Application.ts:69](https://github.com/Xisabla/Korbots/blob/f6d7359/server/src/core/Application.ts#L69)*

Create an application object that controls the server and the components

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`options` | [ApplicationOptions](../interfaces/_core_application_.applicationoptions.md) | {} | Application global options  |

**Returns:** *[Application](_core_application_.application.md)*

## Properties

### `Private` _app

• **_app**: *express.Application*

*Defined in [src/core/Application.ts:51](https://github.com/Xisabla/Korbots/blob/f6d7359/server/src/core/Application.ts#L51)*

Express internal server

___

### `Private` _io

• **_io**: *Server*

*Defined in [src/core/Application.ts:55](https://github.com/Xisabla/Korbots/blob/f6d7359/server/src/core/Application.ts#L55)*

SocketIO server linked  with the HTTP server

___

### `Private` _modules

• **_modules**: *[Module](_core_module_.module.md)[]*

*Defined in [src/core/Application.ts:65](https://github.com/Xisabla/Korbots/blob/f6d7359/server/src/core/Application.ts#L65)*

Module store

___

### `Private` _options

• **_options**: *[ApplicationOptions](../interfaces/_core_application_.applicationoptions.md)*

*Defined in [src/core/Application.ts:47](https://github.com/Xisabla/Korbots/blob/f6d7359/server/src/core/Application.ts#L47)*

___

### `Private` _server

• **_server**: *Server*

*Defined in [src/core/Application.ts:53](https://github.com/Xisabla/Korbots/blob/f6d7359/server/src/core/Application.ts#L53)*

HTTP server from express server

___

### `Private` _sockets

• **_sockets**: *Socket[]*

*Defined in [src/core/Application.ts:67](https://github.com/Xisabla/Korbots/blob/f6d7359/server/src/core/Application.ts#L67)*

Socket store

___

### `Private` `Optional` db

• **db**? : *Mongoose*

*Defined in [src/core/Application.ts:61](https://github.com/Xisabla/Korbots/blob/f6d7359/server/src/core/Application.ts#L61)*

Result of the resolve from Mongoose Connection, null if no database connection

___

### `Private` `Optional` dbPending

• **dbPending**? : *Promise‹Mongoose›*

*Defined in [src/core/Application.ts:59](https://github.com/Xisabla/Korbots/blob/f6d7359/server/src/core/Application.ts#L59)*

Promise returned on Mongoose connection, allows to synchronize after DB connection, null if no database connection

___

### `Static` apis

▪ **apis**: *[APIwk](../interfaces/_core_api_api_.apiwk.md)[]*

*Defined in [src/core/Application.ts:69](https://github.com/Xisabla/Korbots/blob/f6d7359/server/src/core/Application.ts#L69)*

API store

## Accessors

###  sockets

• **get sockets**(): *Socket[]*

*Defined in [src/core/Application.ts:354](https://github.com/Xisabla/Korbots/blob/f6d7359/server/src/core/Application.ts#L354)*

**Returns:** *Socket[]*

## Methods

###  connectDB

▸ **connectDB**(`configuration?`: [DatabaseConfiguration](../interfaces/_core_application_.databaseconfiguration.md)): *Promise‹Mongoose›*

*Defined in [src/core/Application.ts:146](https://github.com/Xisabla/Korbots/blob/f6d7359/server/src/core/Application.ts#L146)*

Try to connect to the database, updates internal dbPending promise

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`configuration?` | [DatabaseConfiguration](../interfaces/_core_application_.databaseconfiguration.md) | Database configuration (user, password, dbname)  |

**Returns:** *Promise‹Mongoose›*

___

### `Private` init

▸ **init**(): *void*

*Defined in [src/core/Application.ts:110](https://github.com/Xisabla/Korbots/blob/f6d7359/server/src/core/Application.ts#L110)*

Initialize internal data, http and socket.io server

**Returns:** *void*

___

### `Private` loadEnv

▸ **loadEnv**(): *void*

*Defined in [src/core/Application.ts:126](https://github.com/Xisabla/Korbots/blob/f6d7359/server/src/core/Application.ts#L126)*

Load options from the .env file

**Returns:** *void*

___

### `Private` onSocketJoin

▸ **onSocketJoin**(`socket`: Socket): *void*

*Defined in [src/core/Application.ts:286](https://github.com/Xisabla/Korbots/blob/f6d7359/server/src/core/Application.ts#L286)*

Triggers all connection listeners, also wait for disconnection to trigger disconnection listeners

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`socket` | Socket |   |

**Returns:** *void*

___

###  registerModule

▸ **registerModule**(`module`: [Module](_core_module_.module.md)): *void*

*Defined in [src/core/Application.ts:187](https://github.com/Xisabla/Korbots/blob/f6d7359/server/src/core/Application.ts#L187)*

Register a Module inside the Application, run the internal "register" method of the Module

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`module` | [Module](_core_module_.module.md) | The Module to register  |

**Returns:** *void*

___

###  run

▸ **run**(): *Promise‹Server›*

*Defined in [src/core/Application.ts:341](https://github.com/Xisabla/Korbots/blob/f6d7359/server/src/core/Application.ts#L341)*

Start the server, if there is a pending connection try to the database, wait for it to end

**Returns:** *Promise‹Server›*

___

### `Private` startServer

▸ **startServer**(): *Promise‹Server›*

*Defined in [src/core/Application.ts:312](https://github.com/Xisabla/Korbots/blob/f6d7359/server/src/core/Application.ts#L312)*

Start the server, returns a Promise to keep the promise pipe

**Returns:** *Promise‹Server›*

___

### `Static` getAPI

▸ **getAPI**(`name`: string): *[APIwk](../interfaces/_core_api_api_.apiwk.md) | null*

*Defined in [src/core/Application.ts:256](https://github.com/Xisabla/Korbots/blob/f6d7359/server/src/core/Application.ts#L256)*

Get an API from it's name, null if not found

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | The API name  |

**Returns:** *[APIwk](../interfaces/_core_api_api_.apiwk.md) | null*

___

### `Static` getAPIBaseUrl

▸ **getAPIBaseUrl**(`name`: string): *string*

*Defined in [src/core/Application.ts:274](https://github.com/Xisabla/Korbots/blob/f6d7359/server/src/core/Application.ts#L274)*

Get the baseUrl of an API from it's name, empty if not found

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | The API name  |

**Returns:** *string*

___

### `Static` getAPIKey

▸ **getAPIKey**(`name`: string): *string*

*Defined in [src/core/Application.ts:264](https://github.com/Xisabla/Korbots/blob/f6d7359/server/src/core/Application.ts#L264)*

Get the key of an API from it's name, empty if not found

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | The API name  |

**Returns:** *string*

___

### `Static` registerAPI

▸ **registerAPI**(`api`: [API](../interfaces/_core_api_api_.api.md)): *void*

*Defined in [src/core/Application.ts:215](https://github.com/Xisabla/Korbots/blob/f6d7359/server/src/core/Application.ts#L215)*

Register a API inside the Application, erase API with the same name, will automatically retrieve the api_key from .env file it the entry exists

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`api` | [API](../interfaces/_core_api_api_.api.md) | The API to register  |

**Returns:** *void*

___

### `Static` registerAPIs

▸ **registerAPIs**(`apis`: [API](../interfaces/_core_api_api_.api.md)[]): *void*

*Defined in [src/core/Application.ts:248](https://github.com/Xisabla/Korbots/blob/f6d7359/server/src/core/Application.ts#L248)*

Register multiple APIs, if any API has the same name as an existing it will erase

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`apis` | [API](../interfaces/_core_api_api_.api.md)[] | APIs to register  |

**Returns:** *void*
