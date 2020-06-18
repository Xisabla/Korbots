[korbots-server](../README.md) › ["core/Module"](../modules/_core_module_.md) › [Module](_core_module_.module.md)

# Class: Module

All Modules extends from this Object, it's working like a Controller registered by the
 Application Object, registering events and dealing with behavior between the Application
 and the Models

## Hierarchy

* **Module**

  ↳ [MusicModule](_modules_musicmodule_.musicmodule.md)

  ↳ [WeatherModule](_modules_weathermodule_.weathermodule.md)

## Index

### Properties

* [app](_core_module_.module.md#protected-app)
* [sockets](_core_module_.module.md#protected-sockets)

### Accessors

* [name](_core_module_.module.md#name)
* [waitForDatabase](_core_module_.module.md#waitfordatabase)

### Methods

* [onSocketJoin](_core_module_.module.md#onsocketjoin)
* [onSocketLeave](_core_module_.module.md#onsocketleave)
* [register](_core_module_.module.md#register)
* [registerTask](_core_module_.module.md#protected-registertask)
* [registerTasks](_core_module_.module.md#protected-abstract-registertasks)

## Properties

### `Protected` app

• **app**: *[Application](_core_application_.application.md)*

*Defined in [src/core/Module.ts:16](https://github.com/Xisabla/Korbots/blob/6eaa780/server/src/core/Module.ts#L16)*

Application instance

___

### `Protected` sockets

• **sockets**: *Socket[]*

*Defined in [src/core/Module.ts:18](https://github.com/Xisabla/Korbots/blob/6eaa780/server/src/core/Module.ts#L18)*

Internal sockets store, updated on SocketJoin and on SocketLeave

## Accessors

###  name

• **get name**(): *string*

*Defined in [src/core/Module.ts:86](https://github.com/Xisabla/Korbots/blob/6eaa780/server/src/core/Module.ts#L86)*

Name of the Module

**Returns:** *string*

___

###  waitForDatabase

• **get waitForDatabase**(): *boolean*

*Defined in [src/core/Module.ts:89](https://github.com/Xisabla/Korbots/blob/6eaa780/server/src/core/Module.ts#L89)*

Does the Module need to wait for the Database to be connected ? (default : false)

**Returns:** *boolean*

## Methods

###  onSocketJoin

▸ **onSocketJoin**(`socket`: Socket): *void*

*Defined in [src/core/Module.ts:36](https://github.com/Xisabla/Korbots/blob/6eaa780/server/src/core/Module.ts#L36)*

Function called once a Socket is connected

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`socket` | Socket | Incoming socket  |

**Returns:** *void*

___

###  onSocketLeave

▸ **onSocketLeave**(`socket`: Socket): *void*

*Defined in [src/core/Module.ts:45](https://github.com/Xisabla/Korbots/blob/6eaa780/server/src/core/Module.ts#L45)*

Function called once a Socket is disconnected

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`socket` | Socket | Disconnecting socket  |

**Returns:** *void*

___

###  register

▸ **register**(`app`: [Application](_core_application_.application.md)): *void*

*Defined in [src/core/Module.ts:24](https://github.com/Xisabla/Korbots/blob/6eaa780/server/src/core/Module.ts#L24)*

Register the Module inside the Application

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`app` | [Application](_core_application_.application.md) | main Application instance  |

**Returns:** *void*

___

### `Protected` registerTask

▸ **registerTask**(`action`: [TaskAction](../modules/_core_task_.md#taskaction), `schedule`: [TaskSchedule](../modules/_core_task_.md#taskschedule), `start`: boolean, `after?`: [TaskAfter](../modules/_core_task_.md#taskafter)): *number*

*Defined in [src/core/Module.ts:61](https://github.com/Xisabla/Korbots/blob/6eaa780/server/src/core/Module.ts#L61)*

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

### `Protected` `Abstract` registerTasks

▸ **registerTasks**(): *number[]*

*Defined in [src/core/Module.ts:81](https://github.com/Xisabla/Korbots/blob/6eaa780/server/src/core/Module.ts#L81)*

Register all of the basic Tasks of the Module into the Application Task Manager

**`abstract`** 

**Returns:** *number[]*

The ids of the tasks
