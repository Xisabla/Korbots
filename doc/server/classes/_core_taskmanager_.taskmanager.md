[korbots-server](../README.md) › ["core/TaskManager"](../modules/_core_taskmanager_.md) › [TaskManager](_core_taskmanager_.taskmanager.md)

# Class: TaskManager

Object that store and allow to manage Tasks

## Hierarchy

* **TaskManager**

## Index

### Constructors

* [constructor](_core_taskmanager_.taskmanager.md#constructor)

### Properties

* [_tasks](_core_taskmanager_.taskmanager.md#private-_tasks)

### Methods

* [add](_core_taskmanager_.taskmanager.md#add)
* [get](_core_taskmanager_.taskmanager.md#get)
* [getAll](_core_taskmanager_.taskmanager.md#getall)
* [lastCall](_core_taskmanager_.taskmanager.md#lastcall)
* [nextCall](_core_taskmanager_.taskmanager.md#nextcall)
* [origin](_core_taskmanager_.taskmanager.md#origin)
* [remove](_core_taskmanager_.taskmanager.md#remove)
* [start](_core_taskmanager_.taskmanager.md#start)
* [startAll](_core_taskmanager_.taskmanager.md#startall)
* [status](_core_taskmanager_.taskmanager.md#status)
* [stop](_core_taskmanager_.taskmanager.md#stop)
* [stopAll](_core_taskmanager_.taskmanager.md#stopall)

## Constructors

###  constructor

\+ **new TaskManager**(...`tasks`: [Task](_core_task_.task.md)[]): *[TaskManager](_core_taskmanager_.taskmanager.md)*

*Defined in [src/core/TaskManager.ts:13](https://github.com/Xisabla/Korbots/blob/57d3739/server/src/core/TaskManager.ts#L13)*

Create a TaskManager

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...tasks` | [Task](_core_task_.task.md)[] | Initial tasks of the store  |

**Returns:** *[TaskManager](_core_taskmanager_.taskmanager.md)*

## Properties

### `Private` _tasks

• **_tasks**: *[Task](_core_task_.task.md)[]*

*Defined in [src/core/TaskManager.ts:13](https://github.com/Xisabla/Korbots/blob/57d3739/server/src/core/TaskManager.ts#L13)*

## Methods

###  add

▸ **add**(`task`: [Task](_core_task_.task.md) | [TaskSettings](../interfaces/_core_task_.tasksettings.md)): *number*

*Defined in [src/core/TaskManager.ts:30](https://github.com/Xisabla/Korbots/blob/57d3739/server/src/core/TaskManager.ts#L30)*

Try to add a task into the store, fail if a task with the same id is already in the store

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`task` | [Task](_core_task_.task.md) &#124; [TaskSettings](../interfaces/_core_task_.tasksettings.md) | Task to add |

**Returns:** *number*

The task id, or -1 if the task already exists

___

###  get

▸ **get**(`id`: number): *[Task](_core_task_.task.md)*

*Defined in [src/core/TaskManager.ts:66](https://github.com/Xisabla/Korbots/blob/57d3739/server/src/core/TaskManager.ts#L66)*

Get a Task from the store by its id

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | number | The id of the task |

**Returns:** *[Task](_core_task_.task.md)*

The Task found

___

###  getAll

▸ **getAll**(`origin?`: string): *[Task](_core_task_.task.md)‹›[]*

*Defined in [src/core/TaskManager.ts:75](https://github.com/Xisabla/Korbots/blob/57d3739/server/src/core/TaskManager.ts#L75)*

Get all Tasks from the store that has the given origin

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`origin?` | string | The origin of the task (all if empty) |

**Returns:** *[Task](_core_task_.task.md)‹›[]*

The tasks that match the origin

___

###  lastCall

▸ **lastCall**(`id`: number): *Moment*

*Defined in [src/core/TaskManager.ts:126](https://github.com/Xisabla/Korbots/blob/57d3739/server/src/core/TaskManager.ts#L126)*

Get when the action was last called

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | number | The id of the Task |

**Returns:** *Moment*

A moment of the last call of the action, moment(-1) if the Task is not found

___

###  nextCall

▸ **nextCall**(`id`: number): *Moment*

*Defined in [src/core/TaskManager.ts:137](https://github.com/Xisabla/Korbots/blob/57d3739/server/src/core/TaskManager.ts#L137)*

Get when the action will be next called

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | number | The id of the Task |

**Returns:** *Moment*

A moment of the next call of the action, moment(-1) if the Task is not found

___

###  origin

▸ **origin**(`id`: number): *string*

*Defined in [src/core/TaskManager.ts:148](https://github.com/Xisabla/Korbots/blob/57d3739/server/src/core/TaskManager.ts#L148)*

Get the origin of a Task in the store

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | number | The id of the Task |

**Returns:** *string*

The origin of the task, empty if the Task is not found

___

###  remove

▸ **remove**(`id`: number): *void*

*Defined in [src/core/TaskManager.ts:52](https://github.com/Xisabla/Korbots/blob/57d3739/server/src/core/TaskManager.ts#L52)*

Stop and remove a task from the store

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | number | The id of the task  |

**Returns:** *void*

___

###  start

▸ **start**(`id`: number): *void*

*Defined in [src/core/TaskManager.ts:87](https://github.com/Xisabla/Korbots/blob/57d3739/server/src/core/TaskManager.ts#L87)*

Allow the Task to check for the Schedule and run the action

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | number | The id of the Task  |

**Returns:** *void*

___

###  startAll

▸ **startAll**(`origin?`: string): *void*

*Defined in [src/core/TaskManager.ts:107](https://github.com/Xisabla/Korbots/blob/57d3739/server/src/core/TaskManager.ts#L107)*

Start all the tasks which matches the given origin (empty means all)

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`origin?` | string | The origin to match  |

**Returns:** *void*

___

###  status

▸ **status**(`id`: number): *boolean*

*Defined in [src/core/TaskManager.ts:159](https://github.com/Xisabla/Korbots/blob/57d3739/server/src/core/TaskManager.ts#L159)*

Get the status of a Task in the store

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | number | The id of the Task |

**Returns:** *boolean*

True if the task is running, false otherwise

___

###  stop

▸ **stop**(`id`: number): *void*

*Defined in [src/core/TaskManager.ts:97](https://github.com/Xisabla/Korbots/blob/57d3739/server/src/core/TaskManager.ts#L97)*

Disallow the Task to check for the Schedule and run the action

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | number | The id of the Task  |

**Returns:** *void*

___

###  stopAll

▸ **stopAll**(`origin?`: string): *void*

*Defined in [src/core/TaskManager.ts:115](https://github.com/Xisabla/Korbots/blob/57d3739/server/src/core/TaskManager.ts#L115)*

Stop all the tasks which matches the given origin (empty means all)

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`origin?` | string | The origin to match  |

**Returns:** *void*
