[korbots-server](../README.md) › [Globals](../globals.md) › ["core/Module"](../modules/_core_module_.md) › [Module](_core_module_.module.md)

# Class: Module

## Hierarchy

* **Module**

  ↳ [WeatherModule](_modules_weathermodule_.weathermodule.md)

## Index

### Properties

* [app](_core_module_.module.md#app)
* [sockets](_core_module_.module.md#sockets)

### Accessors

* [waitForDatabase](_core_module_.module.md#waitfordatabase)

### Methods

* [onSocketJoin](_core_module_.module.md#onsocketjoin)
* [onSocketLeave](_core_module_.module.md#onsocketleave)
* [register](_core_module_.module.md#register)

## Properties

###  app

• **app**: *[Application](_core_application_.application.md)*

*Defined in [src/core/Module.ts:9](https://github.com/Xisabla/Korbots/blob/c8927cf/server/src/core/Module.ts#L9)*

___

###  sockets

• **sockets**: *Socket[]*

*Defined in [src/core/Module.ts:10](https://github.com/Xisabla/Korbots/blob/c8927cf/server/src/core/Module.ts#L10)*

## Accessors

###  waitForDatabase

• **get waitForDatabase**(): *boolean*

*Defined in [src/core/Module.ts:27](https://github.com/Xisabla/Korbots/blob/c8927cf/server/src/core/Module.ts#L27)*

**Returns:** *boolean*

## Methods

###  onSocketJoin

▸ **onSocketJoin**(`socket`: Socket): *void*

*Defined in [src/core/Module.ts:17](https://github.com/Xisabla/Korbots/blob/c8927cf/server/src/core/Module.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`socket` | Socket |

**Returns:** *void*

___

###  onSocketLeave

▸ **onSocketLeave**(`socket`: Socket): *void*

*Defined in [src/core/Module.ts:22](https://github.com/Xisabla/Korbots/blob/c8927cf/server/src/core/Module.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`socket` | Socket |

**Returns:** *void*

___

###  register

▸ **register**(`app`: [Application](_core_application_.application.md)): *void*

*Defined in [src/core/Module.ts:12](https://github.com/Xisabla/Korbots/blob/c8927cf/server/src/core/Module.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`app` | [Application](_core_application_.application.md) |

**Returns:** *void*
