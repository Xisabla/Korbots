[korbots-server](../README.md) › ["services/ffmpeg"](_services_ffmpeg_.md)

# Module: "services/ffmpeg"

## Index

### Variables

* [log](_services_ffmpeg_.md#const-log)

### Functions

* [ffmpeg](_services_ffmpeg_.md#ffmpeg)
* [mp4ToMp3](_services_ffmpeg_.md#mp4tomp3)

## Variables

### `Const` log

• **log**: *Debugger* = debug('service:ffmpeg')

*Defined in [src/services/ffmpeg.ts:5](https://github.com/Xisabla/Korbots/blob/abf6d68/server/src/services/ffmpeg.ts#L5)*

## Functions

###  ffmpeg

▸ **ffmpeg**(`args`: string[]): *Promise‹void›*

*Defined in [src/services/ffmpeg.ts:7](https://github.com/Xisabla/Korbots/blob/abf6d68/server/src/services/ffmpeg.ts#L7)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`args` | string[] | [] |

**Returns:** *Promise‹void›*

___

###  mp4ToMp3

▸ **mp4ToMp3**(`input`: string, `output`: string): *Promise‹string›*

*Defined in [src/services/ffmpeg.ts:19](https://github.com/Xisabla/Korbots/blob/abf6d68/server/src/services/ffmpeg.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`input` | string |
`output` | string |

**Returns:** *Promise‹string›*
