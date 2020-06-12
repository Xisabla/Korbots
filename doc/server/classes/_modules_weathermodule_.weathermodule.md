[korbots-server](../README.md) › [Globals](../globals.md) › ["modules/WeatherModule"](../modules/_modules_weathermodule_.md) › [WeatherModule](_modules_weathermodule_.weathermodule.md)

# Class: WeatherModule

## Hierarchy

* [Module](_core_module_.module.md)

  ↳ **WeatherModule**

## Index

### Properties

* [app](_modules_weathermodule_.weathermodule.md#app)
* [sockets](_modules_weathermodule_.weathermodule.md#sockets)

### Accessors

* [waitForDatabase](_modules_weathermodule_.weathermodule.md#waitfordatabase)

### Methods

* [getAll](_modules_weathermodule_.weathermodule.md#getall)
* [getCurrent](_modules_weathermodule_.weathermodule.md#getcurrent)
* [getDaily](_modules_weathermodule_.weathermodule.md#getdaily)
* [getDailyAll](_modules_weathermodule_.weathermodule.md#getdailyall)
* [onSocketJoin](_modules_weathermodule_.weathermodule.md#onsocketjoin)
* [onSocketLeave](_modules_weathermodule_.weathermodule.md#onsocketleave)
* [register](_modules_weathermodule_.weathermodule.md#register)

## Properties

###  app

• **app**: *[Application](_core_application_.application.md)*

*Inherited from [Module](_core_module_.module.md).[app](_core_module_.module.md#app)*

*Defined in [src/core/Module.ts:9](https://github.com/Xisabla/Korbots/blob/e3795ca/server/src/core/Module.ts#L9)*

___

###  sockets

• **sockets**: *Socket[]*

*Inherited from [Module](_core_module_.module.md).[sockets](_core_module_.module.md#sockets)*

*Defined in [src/core/Module.ts:10](https://github.com/Xisabla/Korbots/blob/e3795ca/server/src/core/Module.ts#L10)*

## Accessors

###  waitForDatabase

• **get waitForDatabase**(): *boolean*

*Overrides [Module](_core_module_.module.md).[waitForDatabase](_core_module_.module.md#waitfordatabase)*

*Defined in [src/modules/WeatherModule.ts:106](https://github.com/Xisabla/Korbots/blob/e3795ca/server/src/modules/WeatherModule.ts#L106)*

**Returns:** *boolean*

## Methods

###  getAll

▸ **getAll**(`socket`: Socket, `data`: any): *void*

*Defined in [src/modules/WeatherModule.ts:84](https://github.com/Xisabla/Korbots/blob/e3795ca/server/src/modules/WeatherModule.ts#L84)*

**Parameters:**

Name | Type |
------ | ------ |
`socket` | Socket |
`data` | any |

**Returns:** *void*

___

###  getCurrent

▸ **getCurrent**(`socket`: Socket, `data`: any): *void*

*Defined in [src/modules/WeatherModule.ts:28](https://github.com/Xisabla/Korbots/blob/e3795ca/server/src/modules/WeatherModule.ts#L28)*

**Parameters:**

Name | Type |
------ | ------ |
`socket` | Socket |
`data` | any |

**Returns:** *void*

___

###  getDaily

▸ **getDaily**(`socket`: Socket, `data`: any): *void*

*Defined in [src/modules/WeatherModule.ts:45](https://github.com/Xisabla/Korbots/blob/e3795ca/server/src/modules/WeatherModule.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`socket` | Socket |
`data` | any |

**Returns:** *void*

___

###  getDailyAll

▸ **getDailyAll**(`socket`: Socket, `data`: any): *void*

*Defined in [src/modules/WeatherModule.ts:63](https://github.com/Xisabla/Korbots/blob/e3795ca/server/src/modules/WeatherModule.ts#L63)*

**Parameters:**

Name | Type |
------ | ------ |
`socket` | Socket |
`data` | any |

**Returns:** *void*

___

###  onSocketJoin

▸ **onSocketJoin**(`socket`: Socket): *void*

*Overrides [Module](_core_module_.module.md).[onSocketJoin](_core_module_.module.md#onsocketjoin)*

*Defined in [src/modules/WeatherModule.ts:17](https://github.com/Xisabla/Korbots/blob/e3795ca/server/src/modules/WeatherModule.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`socket` | Socket |

**Returns:** *void*

___

###  onSocketLeave

▸ **onSocketLeave**(`socket`: Socket): *void*

*Inherited from [Module](_core_module_.module.md).[onSocketLeave](_core_module_.module.md#onsocketleave)*

*Defined in [src/core/Module.ts:22](https://github.com/Xisabla/Korbots/blob/e3795ca/server/src/core/Module.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`socket` | Socket |

**Returns:** *void*

___

###  register

▸ **register**(`app`: [Application](_core_application_.application.md)): *void*

*Overrides [Module](_core_module_.module.md).[register](_core_module_.module.md#register)*

*Defined in [src/modules/WeatherModule.ts:11](https://github.com/Xisabla/Korbots/blob/e3795ca/server/src/modules/WeatherModule.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`app` | [Application](_core_application_.application.md) |

**Returns:** *void*
