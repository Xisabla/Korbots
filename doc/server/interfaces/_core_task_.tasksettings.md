[korbots-server](../README.md) › ["core/Task"](../modules/_core_task_.md) › [TaskSettings](_core_task_.tasksettings.md)

# Interface: TaskSettings

## Hierarchy

* **TaskSettings**

## Index

### Properties

* [action](_core_task_.tasksettings.md#action)
* [after](_core_task_.tasksettings.md#optional-after)
* [origin](_core_task_.tasksettings.md#origin)
* [schedule](_core_task_.tasksettings.md#schedule)
* [start](_core_task_.tasksettings.md#optional-start)

## Properties

###  action

• **action**: *[TaskAction](../modules/_core_task_.md#taskaction)*

*Defined in [src/core/Task.ts:11](https://github.com/Xisabla/Korbots/blob/7261d8b/server/src/core/Task.ts#L11)*

The action that will be perform when the task will be running

___

### `Optional` after

• **after**? : *[TaskAfter](../modules/_core_task_.md#taskafter)*

*Defined in [src/core/Task.ts:15](https://github.com/Xisabla/Korbots/blob/7261d8b/server/src/core/Task.ts#L15)*

Function to perform once the action is performed (even on Promise failure)

___

###  origin

• **origin**: *string*

*Defined in [src/core/Task.ts:7](https://github.com/Xisabla/Korbots/blob/7261d8b/server/src/core/Task.ts#L7)*

Origin of the task (eg: "module:weather", "core") just set 'none' if it's a dummy task

___

###  schedule

• **schedule**: *[TaskSchedule](../modules/_core_task_.md#taskschedule)*

*Defined in [src/core/Task.ts:9](https://github.com/Xisabla/Korbots/blob/7261d8b/server/src/core/Task.ts#L9)*

When should the task trigger (can be a Date, a Cron schedule or a Moment)

___

### `Optional` start

• **start**? : *boolean*

*Defined in [src/core/Task.ts:13](https://github.com/Xisabla/Korbots/blob/7261d8b/server/src/core/Task.ts#L13)*

Set on true to auto start the Task, otherwise will wait to be started
