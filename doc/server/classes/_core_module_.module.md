[korbots-server](../README.md) › ["core/Module"](../modules/_core_module_.md) › [Module](_core_module_.module.md)

# Class: Module

All Modules extends from this Object, it's working like a Controller registered by the
 Application Object, registering events and dealing with behavior between the Application
 and the Models

## Hierarchy

* **Module**

  ↳ [WeatherModule](_modules_weathermodule_.weathermodule.md)

## Index

### Properties

* [app](_core_module_.module.md#private-app)
* [sockets](_core_module_.module.md#private-sockets)

### Accessors

* [name](_core_module_.module.md#name)
* [waitForDatabase](_core_module_.module.md#waitfordatabase)

### Methods

* [onSocketJoin](_core_module_.module.md#onsocketjoin)
* [onSocketLeave](_core_module_.module.md#onsocketleave)
* [register](_core_module_.module.md#register)

## Properties

### `Private` app

• **app**: *[Application](_core_application_.application.md)*

*Defined in [src/core/Module.ts:15](https://github.com/Xisabla/Korbots/blob/e566151/server/src/core/Module.ts#L15)*

Application instance

___

### `Private` sockets

• **sockets**: *Socket[]*

*Defined in [src/core/Module.ts:17](https://github.com/Xisabla/Korbots/blob/e566151/server/src/core/Module.ts#L17)*

Internal sockets store, updated on SocketJoin and on SocketLeave

## Accessors

###  name

• **get name**(): *string*

*Defined in [src/core/Module.ts:51](https://github.com/Xisabla/Korbots/blob/e566151/server/src/core/Module.ts#L51)*

Name of the Module (default: 'name')

**Returns:** *string*

___

###  waitForDatabase

• **get waitForDatabase**(): *boolean*

*Defined in [src/core/Module.ts:56](https://github.com/Xisabla/Korbots/blob/e566151/server/src/core/Module.ts#L56)*

Does the Module need to wait for the Database to be connected ? (default : false)

**Returns:** *boolean*

## Methods

###  onSocketJoin

▸ **onSocketJoin**(`socket`: Socket): *void*

*Defined in [src/core/Module.ts:34](https://github.com/Xisabla/Korbots/blob/e566151/server/src/core/Module.ts#L34)*

Function called once a Socket is connected

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`socket` | Socket | Incoming socket  |

**Returns:** *void*

___

###  onSocketLeave

▸ **onSocketLeave**(`socket`: Socket): *void*

*Defined in [src/core/Module.ts:43](https://github.com/Xisabla/Korbots/blob/e566151/server/src/core/Module.ts#L43)*

Function called once a Socket is disconnected

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`socket` | Socket | Disconnecting socket  |

**Returns:** *void*

___

###  register

▸ **register**(`app`: [Application](_core_application_.application.md)): *void*

*Defined in [src/core/Module.ts:23](https://github.com/Xisabla/Korbots/blob/e566151/server/src/core/Module.ts#L23)*

Register the Module inside the Application

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`app` | [Application](_core_application_.application.md) | main Application instance  |

**Returns:** *void*
