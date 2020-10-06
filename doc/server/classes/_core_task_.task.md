[korbots-server](../README.md) › ["core/Task"](../modules/_core_task_.md) › [Task](_core_task_.task.md)

# Class: Task

A Task will perform an action at a given Schedule (cron/date/moment)

## Hierarchy

* **Task**

## Index

### Constructors

* [constructor](_core_task_.task.md#constructor)

### Properties

* [_action](_core_task_.task.md#private-_action)
* [_after](_core_task_.task.md#private-optional-_after)
* [_id](_core_task_.task.md#private-_id)
* [_job](_core_task_.task.md#private-_job)
* [_lastCall](_core_task_.task.md#private-_lastcall)
* [_log](_core_task_.task.md#private-_log)
* [_origin](_core_task_.task.md#private-_origin)
* [idCnt](_core_task_.task.md#static-idcnt)

### Accessors

* [id](_core_task_.task.md#id)
* [lastCall](_core_task_.task.md#lastcall)
* [log](_core_task_.task.md#log)
* [nextCall](_core_task_.task.md#nextcall)
* [origin](_core_task_.task.md#origin)
* [running](_core_task_.task.md#running)

### Methods

* [getId](_core_task_.task.md#private-getid)
* [run](_core_task_.task.md#private-run)
* [start](_core_task_.task.md#start)
* [stop](_core_task_.task.md#stop)

## Constructors

###  constructor

\+ **new Task**(`settings`: [TaskSettings](../interfaces/_core_task_.tasksettings.md)): *[Task](_core_task_.task.md)*

*Defined in [src/core/Task.ts:46](https://github.com/Xisabla/Korbots/blob/6e5e234/server/src/core/Task.ts#L46)*

Create a new Task with the given settings, may not autostart by default

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`settings` | [TaskSettings](../interfaces/_core_task_.tasksettings.md) | Settings of the task  |

**Returns:** *[Task](_core_task_.task.md)*

## Properties

### `Private` _action

• **_action**: *[TaskAction](../modules/_core_task_.md#taskaction)*

*Defined in [src/core/Task.ts:35](https://github.com/Xisabla/Korbots/blob/6e5e234/server/src/core/Task.ts#L35)*

Action to run on job trigger

___

### `Private` `Optional` _after

• **_after**? : *[TaskAfter](../modules/_core_task_.md#taskafter)*

*Defined in [src/core/Task.ts:37](https://github.com/Xisabla/Korbots/blob/6e5e234/server/src/core/Task.ts#L37)*

Function to run after the action

___

### `Private` _id

• **_id**: *number*

*Defined in [src/core/Task.ts:27](https://github.com/Xisabla/Korbots/blob/6e5e234/server/src/core/Task.ts#L27)*

Task uniq ID

___

### `Private` _job

• **_job**: *CronJob*

*Defined in [src/core/Task.ts:33](https://github.com/Xisabla/Korbots/blob/6e5e234/server/src/core/Task.ts#L33)*

Internal job (CronJob) that will trigger the action

___

### `Private` _lastCall

• **_lastCall**: *Moment | null*

*Defined in [src/core/Task.ts:43](https://github.com/Xisabla/Korbots/blob/6e5e234/server/src/core/Task.ts#L43)*

Moment of the last run() call

___

### `Private` _log

• **_log**: *Debugger*

*Defined in [src/core/Task.ts:40](https://github.com/Xisabla/Korbots/blob/6e5e234/server/src/core/Task.ts#L40)*

Class internal logger

___

### `Private` _origin

• **_origin**: *string*

*Defined in [src/core/Task.ts:30](https://github.com/Xisabla/Korbots/blob/6e5e234/server/src/core/Task.ts#L30)*

Where does the task come from, will allow to select all task related to a same origin

___

### `Static` idCnt

▪ **idCnt**: *number* = 0

*Defined in [src/core/Task.ts:46](https://github.com/Xisabla/Korbots/blob/6e5e234/server/src/core/Task.ts#L46)*

Task ID Counter, used to generate and increment ID of new tasks

## Accessors

###  id

• **get id**(): *number*

*Defined in [src/core/Task.ts:122](https://github.com/Xisabla/Korbots/blob/6e5e234/server/src/core/Task.ts#L122)*

Get the ID of the Task

**Returns:** *number*

___

###  lastCall

• **get lastCall**(): *Moment*

*Defined in [src/core/Task.ts:143](https://github.com/Xisabla/Korbots/blob/6e5e234/server/src/core/Task.ts#L143)*

Get the last call Moment of "run"

**Returns:** *Moment*

___

###  log

• **get log**(): *Debugger*

*Defined in [src/core/Task.ts:129](https://github.com/Xisabla/Korbots/blob/6e5e234/server/src/core/Task.ts#L129)*

Get the task logger

**Returns:** *Debugger*

___

###  nextCall

• **get nextCall**(): *Moment*

*Defined in [src/core/Task.ts:150](https://github.com/Xisabla/Korbots/blob/6e5e234/server/src/core/Task.ts#L150)*

Get the next call Moment of "run"

**Returns:** *Moment*

___

###  origin

• **get origin**(): *string*

*Defined in [src/core/Task.ts:136](https://github.com/Xisabla/Korbots/blob/6e5e234/server/src/core/Task.ts#L136)*

Get the origin of the Task

**Returns:** *string*

___

###  running

• **get running**(): *boolean*

*Defined in [src/core/Task.ts:157](https://github.com/Xisabla/Korbots/blob/6e5e234/server/src/core/Task.ts#L157)*

See if the CronJob is running (not stopped)

**Returns:** *boolean*

## Methods

### `Private` getId

▸ **getId**(): *number*

*Defined in [src/core/Task.ts:166](https://github.com/Xisabla/Korbots/blob/6e5e234/server/src/core/Task.ts#L166)*

Generate an ID and increment internal ID Counter

**Returns:** *number*

___

### `Private` run

▸ **run**(): *void*

*Defined in [src/core/Task.ts:101](https://github.com/Xisabla/Korbots/blob/6e5e234/server/src/core/Task.ts#L101)*

Run the action, also triggers the onComplete method if exists
Will console.error on action.catch()

**Returns:** *void*

___

###  start

▸ **start**(): *void*

*Defined in [src/core/Task.ts:82](https://github.com/Xisabla/Korbots/blob/6e5e234/server/src/core/Task.ts#L82)*

Start the CronJob, will begin to perform action on given Schedule

**Returns:** *void*

___

###  stop

▸ **stop**(): *void*

*Defined in [src/core/Task.ts:90](https://github.com/Xisabla/Korbots/blob/6e5e234/server/src/core/Task.ts#L90)*

Stop the CronJob for running future actions

**Returns:** *void*
