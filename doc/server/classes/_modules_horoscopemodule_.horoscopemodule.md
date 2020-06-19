[korbots-server](../README.md) › ["modules/HoroscopeModule"](../modules/_modules_horoscopemodule_.md) › [HoroscopeModule](_modules_horoscopemodule_.horoscopemodule.md)

# Class: HoroscopeModule

## Hierarchy

* [Module](_core_module_.module.md)

  ↳ **HoroscopeModule**

## Index

### Properties

* [app](_modules_horoscopemodule_.horoscopemodule.md#protected-app)
* [sockets](_modules_horoscopemodule_.horoscopemodule.md#protected-sockets)

### Accessors

* [name](_modules_horoscopemodule_.horoscopemodule.md#name)
* [waitForDatabase](_modules_horoscopemodule_.horoscopemodule.md#waitfordatabase)

### Methods

* [getCurrent](_modules_horoscopemodule_.horoscopemodule.md#private-getcurrent)
* [onSocketJoin](_modules_horoscopemodule_.horoscopemodule.md#onsocketjoin)
* [onSocketLeave](_modules_horoscopemodule_.horoscopemodule.md#onsocketleave)
* [register](_modules_horoscopemodule_.horoscopemodule.md#register)
* [registerTask](_modules_horoscopemodule_.horoscopemodule.md#protected-registertask)
* [registerTasks](_modules_horoscopemodule_.horoscopemodule.md#protected-registertasks)

## Properties

### `Protected` app

• **app**: *[Application](_core_application_.application.md)*

*Inherited from [Module](_core_module_.module.md).[app](_core_module_.module.md#protected-app)*

*Defined in [src/core/Module.ts:16](https://github.com/Xisabla/Korbots/blob/4216c83/server/src/core/Module.ts#L16)*

Application instance

___

### `Protected` sockets

• **sockets**: *Socket[]*

*Inherited from [Module](_core_module_.module.md).[sockets](_core_module_.module.md#protected-sockets)*

*Defined in [src/core/Module.ts:18](https://github.com/Xisabla/Korbots/blob/4216c83/server/src/core/Module.ts#L18)*

Internal sockets store, updated on SocketJoin and on SocketLeave

## Accessors

###  name

• **get name**(): *string*

*Overrides [Module](_core_module_.module.md).[name](_core_module_.module.md#name)*

*Defined in [src/modules/HoroscopeModule.ts:62](https://github.com/Xisabla/Korbots/blob/4216c83/server/src/modules/HoroscopeModule.ts#L62)*

**Returns:** *string*

___

###  waitForDatabase

• **get waitForDatabase**(): *boolean*

*Overrides [Module](_core_module_.module.md).[waitForDatabase](_core_module_.module.md#waitfordatabase)*

*Defined in [src/modules/HoroscopeModule.ts:67](https://github.com/Xisabla/Korbots/blob/4216c83/server/src/modules/HoroscopeModule.ts#L67)*

**Returns:** *boolean*

## Methods

### `Private` getCurrent

▸ **getCurrent**(`socket`: Socket, `data`: any): *void*

*Defined in [src/modules/HoroscopeModule.ts:44](https://github.com/Xisabla/Korbots/blob/4216c83/server/src/modules/HoroscopeModule.ts#L44)*

Get the Current entry from Horoscope according to the data provided by the Socket, then send one event to the Socket

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

*Defined in [src/modules/HoroscopeModule.ts:19](https://github.com/Xisabla/Korbots/blob/4216c83/server/src/modules/HoroscopeModule.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`socket` | Socket |

**Returns:** *void*

___

###  onSocketLeave

▸ **onSocketLeave**(`socket`: Socket): *void*

*Inherited from [Module](_core_module_.module.md).[onSocketLeave](_core_module_.module.md#onsocketleave)*

*Defined in [src/core/Module.ts:45](https://github.com/Xisabla/Korbots/blob/4216c83/server/src/core/Module.ts#L45)*

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

*Defined in [src/modules/HoroscopeModule.ts:11](https://github.com/Xisabla/Korbots/blob/4216c83/server/src/modules/HoroscopeModule.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`app` | [Application](_core_application_.application.md) |

**Returns:** *void*

___

### `Protected` registerTask

▸ **registerTask**(`action`: [TaskAction](../modules/_core_task_.md#taskaction), `schedule`: [TaskSchedule](../modules/_core_task_.md#taskschedule), `start`: boolean, `after?`: [TaskAfter](../modules/_core_task_.md#taskafter)): *number*

*Inherited from [Module](_core_module_.module.md).[registerTask](_core_module_.module.md#protected-registertask)*

*Defined in [src/core/Module.ts:61](https://github.com/Xisabla/Korbots/blob/4216c83/server/src/core/Module.ts#L61)*

A shortcut to register a Task into the Task Manager of the Application
Will fill the field "origin" with the name of the Module

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`action` | [TaskAction](../modules/_core_task_.md#taskaction) | - | Action of the Task |
`schedule` | [TaskSchedule](../modules/_core_task_.md#taskschedule) | - | Schedule of the Task |
`start` | boolean | true | Should the task start ? |
`after?` | [TaskAfter](../modules/_core_task_.md#taskafter) | - | Function to call after the action (facultative) |

**Returns:** *number*

The id of the Task

___

### `Protected` registerTasks

▸ **registerTasks**(): *number[]*

*Overrides [Module](_core_module_.module.md).[registerTasks](_core_module_.module.md#protected-abstract-registertasks)*

*Defined in [src/modules/HoroscopeModule.ts:31](https://github.com/Xisabla/Korbots/blob/4216c83/server/src/modules/HoroscopeModule.ts#L31)*

**Returns:** *number[]*
