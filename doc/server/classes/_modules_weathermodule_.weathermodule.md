[korbots-server](../README.md) › ["modules/WeatherModule"](../modules/_modules_weathermodule_.md) › [WeatherModule](_modules_weathermodule_.weathermodule.md)

# Class: WeatherModule

## Hierarchy

* [Module](_core_module_.module.md)

  ↳ **WeatherModule**

## Index

### Accessors

* [name](_modules_weathermodule_.weathermodule.md#name)
* [waitForDatabase](_modules_weathermodule_.weathermodule.md#waitfordatabase)

### Methods

* [getAll](_modules_weathermodule_.weathermodule.md#private-getall)
* [getCurrent](_modules_weathermodule_.weathermodule.md#private-getcurrent)
* [getDaily](_modules_weathermodule_.weathermodule.md#private-getdaily)
* [getDailyAll](_modules_weathermodule_.weathermodule.md#private-getdailyall)
* [onSocketJoin](_modules_weathermodule_.weathermodule.md#onsocketjoin)
* [onSocketLeave](_modules_weathermodule_.weathermodule.md#onsocketleave)
* [register](_modules_weathermodule_.weathermodule.md#register)

## Accessors

###  name

• **get name**(): *string*

*Overrides [Module](_core_module_.module.md).[name](_core_module_.module.md#name)*

*Defined in [src/modules/WeatherModule.ts:134](https://github.com/Xisabla/Korbots/blob/e566151/server/src/modules/WeatherModule.ts#L134)*

**Returns:** *string*

___

###  waitForDatabase

• **get waitForDatabase**(): *boolean*

*Overrides [Module](_core_module_.module.md).[waitForDatabase](_core_module_.module.md#waitfordatabase)*

*Defined in [src/modules/WeatherModule.ts:139](https://github.com/Xisabla/Korbots/blob/e566151/server/src/modules/WeatherModule.ts#L139)*

**Returns:** *boolean*

## Methods

### `Private` getAll

▸ **getAll**(`socket`: Socket, `data`: any): *void*

*Defined in [src/modules/WeatherModule.ts:110](https://github.com/Xisabla/Korbots/blob/e566151/server/src/modules/WeatherModule.ts#L110)*

Get the Current entry and the Daily entries from Weather according to the data provided by the Socket, then send one event to the Socket

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`socket` | Socket | Client Socket |
`data` | any | Provided data  |

**Returns:** *void*

___

### `Private` getCurrent

▸ **getCurrent**(`socket`: Socket, `data`: any): *void*

*Defined in [src/modules/WeatherModule.ts:39](https://github.com/Xisabla/Korbots/blob/e566151/server/src/modules/WeatherModule.ts#L39)*

Get the Current entry from Weather according to the data provided by the Socket, then send one event to the Socket

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`socket` | Socket | Client Socket |
`data` | any | Provided data  |

**Returns:** *void*

___

### `Private` getDaily

▸ **getDaily**(`socket`: Socket, `data`: any): *void*

*Defined in [src/modules/WeatherModule.ts:61](https://github.com/Xisabla/Korbots/blob/e566151/server/src/modules/WeatherModule.ts#L61)*

Get the Daily entry from Weather according to the data provided by the Socket, then send one event to the Socket

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`socket` | Socket | Client Socket |
`data` | any | Provided data  |

**Returns:** *void*

___

### `Private` getDailyAll

▸ **getDailyAll**(`socket`: Socket, `data`: any): *void*

*Defined in [src/modules/WeatherModule.ts:84](https://github.com/Xisabla/Korbots/blob/e566151/server/src/modules/WeatherModule.ts#L84)*

Get the Daily entries from Weather according to the data provided by the Socket, then send one event to the Socket

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`socket` | Socket | Client Socket |
`data` | any | Provided data  |

**Returns:** *void*

___

###  onSocketJoin

▸ **onSocketJoin**(`socket`: Socket): *void*

*Overrides [Module](_core_module_.module.md).[onSocketJoin](_core_module_.module.md#onsocketjoin)*

*Defined in [src/modules/WeatherModule.ts:19](https://github.com/Xisabla/Korbots/blob/e566151/server/src/modules/WeatherModule.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`socket` | Socket |

**Returns:** *void*

___

###  onSocketLeave

▸ **onSocketLeave**(`socket`: Socket): *void*

*Inherited from [Module](_core_module_.module.md).[onSocketLeave](_core_module_.module.md#onsocketleave)*

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

*Overrides [Module](_core_module_.module.md).[register](_core_module_.module.md#register)*

*Defined in [src/modules/WeatherModule.ts:11](https://github.com/Xisabla/Korbots/blob/e566151/server/src/modules/WeatherModule.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`app` | [Application](_core_application_.application.md) |

**Returns:** *void*
