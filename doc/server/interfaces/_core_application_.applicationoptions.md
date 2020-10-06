[korbots-server](../README.md) › ["core/Application"](../modules/_core_application_.md) › [ApplicationOptions](_core_application_.applicationoptions.md)

# Interface: ApplicationOptions

## Hierarchy

* **ApplicationOptions**

## Index

### Properties

* [mongo](_core_application_.applicationoptions.md#optional-mongo)
* [port](_core_application_.applicationoptions.md#optional-port)
* [public](_core_application_.applicationoptions.md#optional-public)
* [server](_core_application_.applicationoptions.md#optional-server)
* [storage](_core_application_.applicationoptions.md#optional-storage)
* [useEnv](_core_application_.applicationoptions.md#optional-useenv)

## Properties

### `Optional` mongo

• **mongo**? : *[DatabaseConfiguration](_core_application_.databaseconfiguration.md)*

*Defined in [src/core/Application.ts:30](https://github.com/Xisabla/Korbots/blob/177cb32/server/src/core/Application.ts#L30)*

mongoose connection base configuration

___

### `Optional` port

• **port**? : *number*

*Defined in [src/core/Application.ts:26](https://github.com/Xisabla/Korbots/blob/177cb32/server/src/core/Application.ts#L26)*

Port on which the server will listen

___

### `Optional` public

• **public**? : *string*

*Defined in [src/core/Application.ts:22](https://github.com/Xisabla/Korbots/blob/177cb32/server/src/core/Application.ts#L22)*

Public path of the server (absolute please), default: path.join(server, 'public')

___

### `Optional` server

• **server**? : *string*

*Defined in [src/core/Application.ts:20](https://github.com/Xisabla/Korbots/blob/177cb32/server/src/core/Application.ts#L20)*

Absolute path to the folder containing server statics files

___

### `Optional` storage

• **storage**? : *string*

*Defined in [src/core/Application.ts:24](https://github.com/Xisabla/Korbots/blob/177cb32/server/src/core/Application.ts#L24)*

Storage directory for server files

___

### `Optional` useEnv

• **useEnv**? : *boolean*

*Defined in [src/core/Application.ts:28](https://github.com/Xisabla/Korbots/blob/177cb32/server/src/core/Application.ts#L28)*

If set on true, will look un into .env file to load important configuration
