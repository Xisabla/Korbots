[korbots-server](../README.md) › ["modules/MusicModule"](../modules/_modules_musicmodule_.md) › [MusicModule](_modules_musicmodule_.musicmodule.md)

# Class: MusicModule

## Hierarchy

* [Module](_core_module_.module.md)

  ↳ **MusicModule**

## Index

### Properties

* [app](_modules_musicmodule_.musicmodule.md#protected-app)
* [mp3Storage](_modules_musicmodule_.musicmodule.md#private-mp3storage)
* [sockets](_modules_musicmodule_.musicmodule.md#protected-sockets)
* [youtube](_modules_musicmodule_.musicmodule.md#private-youtube)
* [youtubeStorage](_modules_musicmodule_.musicmodule.md#private-youtubestorage)

### Accessors

* [name](_modules_musicmodule_.musicmodule.md#name)
* [waitForDatabase](_modules_musicmodule_.musicmodule.md#waitfordatabase)

### Methods

* [addToPlaylist](_modules_musicmodule_.musicmodule.md#private-addtoplaylist)
* [addToPlaylists](_modules_musicmodule_.musicmodule.md#private-addtoplaylists)
* [convertVideo](_modules_musicmodule_.musicmodule.md#private-convertvideo)
* [download](_modules_musicmodule_.musicmodule.md#private-download)
* [downloadYoutube](_modules_musicmodule_.musicmodule.md#private-downloadyoutube)
* [fetchYoutubeInfo](_modules_musicmodule_.musicmodule.md#private-fetchyoutubeinfo)
* [onSocketJoin](_modules_musicmodule_.musicmodule.md#onsocketjoin)
* [onSocketLeave](_modules_musicmodule_.musicmodule.md#onsocketleave)
* [register](_modules_musicmodule_.musicmodule.md#register)
* [registerTask](_modules_musicmodule_.musicmodule.md#protected-registertask)
* [registerTasks](_modules_musicmodule_.musicmodule.md#protected-registertasks)
* [search](_modules_musicmodule_.musicmodule.md#private-search)
* [searchYoutube](_modules_musicmodule_.musicmodule.md#private-searchyoutube)
* [sortPlaylist](_modules_musicmodule_.musicmodule.md#private-sortplaylist)

## Properties

### `Protected` app

• **app**: *[Application](_core_application_.application.md)*

*Inherited from [Module](_core_module_.module.md).[app](_core_module_.module.md#protected-app)*

*Defined in [src/core/Module.ts:16](https://github.com/Xisabla/Korbots/blob/57d3739/server/src/core/Module.ts#L16)*

Application instance

___

### `Private` mp3Storage

• **mp3Storage**: *string*

*Defined in [src/modules/MusicModule.ts:28](https://github.com/Xisabla/Korbots/blob/57d3739/server/src/modules/MusicModule.ts#L28)*

Audio songs storage path

___

### `Protected` sockets

• **sockets**: *Socket[]*

*Inherited from [Module](_core_module_.module.md).[sockets](_core_module_.module.md#protected-sockets)*

*Defined in [src/core/Module.ts:18](https://github.com/Xisabla/Korbots/blob/57d3739/server/src/core/Module.ts#L18)*

Internal sockets store, updated on SocketJoin and on SocketLeave

___

### `Private` youtube

• **youtube**: *YouTube*

*Defined in [src/modules/MusicModule.ts:25](https://github.com/Xisabla/Korbots/blob/57d3739/server/src/modules/MusicModule.ts#L25)*

Instance of the youtube API Controller

___

### `Private` youtubeStorage

• **youtubeStorage**: *string*

*Defined in [src/modules/MusicModule.ts:30](https://github.com/Xisabla/Korbots/blob/57d3739/server/src/modules/MusicModule.ts#L30)*

Youtube Storage Path (folder for youtube mp4 files)

## Accessors

###  name

• **get name**(): *string*

*Overrides [Module](_core_module_.module.md).[name](_core_module_.module.md#name)*

*Defined in [src/modules/MusicModule.ts:411](https://github.com/Xisabla/Korbots/blob/57d3739/server/src/modules/MusicModule.ts#L411)*

**Returns:** *string*

___

###  waitForDatabase

• **get waitForDatabase**(): *boolean*

*Overrides [Module](_core_module_.module.md).[waitForDatabase](_core_module_.module.md#waitfordatabase)*

*Defined in [src/modules/MusicModule.ts:416](https://github.com/Xisabla/Korbots/blob/57d3739/server/src/modules/MusicModule.ts#L416)*

**Returns:** *boolean*

## Methods

### `Private` addToPlaylist

▸ **addToPlaylist**(`socket`: Socket, `data`: any): *void*

*Defined in [src/modules/MusicModule.ts:82](https://github.com/Xisabla/Korbots/blob/57d3739/server/src/modules/MusicModule.ts#L82)*

**Parameters:**

Name | Type |
------ | ------ |
`socket` | Socket |
`data` | any |

**Returns:** *void*

___

### `Private` addToPlaylists

▸ **addToPlaylists**(`socket`: Socket, `data`: any): *void*

*Defined in [src/modules/MusicModule.ts:90](https://github.com/Xisabla/Korbots/blob/57d3739/server/src/modules/MusicModule.ts#L90)*

**Parameters:**

Name | Type |
------ | ------ |
`socket` | Socket |
`data` | any |

**Returns:** *void*

___

### `Private` convertVideo

▸ **convertVideo**(`socket`: Socket, `video`: [DownloadedVideo](../interfaces/_core_imusic_.downloadedvideo.md), `prefix`: string): *Promise‹[DownloadedMusic](../interfaces/_core_imusic_.downloadedmusic.md)›*

*Defined in [src/modules/MusicModule.ts:369](https://github.com/Xisabla/Korbots/blob/57d3739/server/src/modules/MusicModule.ts#L369)*

Convert a fresh download video into an audio file in the musics storage

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`socket` | Socket | - | Client Socket to send converting status |
`video` | [DownloadedVideo](../interfaces/_core_imusic_.downloadedvideo.md) | - | DownloadedVideo data |
`prefix` | string | "" | Prefix to add to the converted audio file name (empty by default) |

**Returns:** *Promise‹[DownloadedMusic](../interfaces/_core_imusic_.downloadedmusic.md)›*

A Promise of the DownloadedAudio data (id, title, storage, ...)

___

### `Private` download

▸ **download**(`socket`: Socket, `data`: any): *any*

*Defined in [src/modules/MusicModule.ts:232](https://github.com/Xisabla/Korbots/blob/57d3739/server/src/modules/MusicModule.ts#L232)*

**Parameters:**

Name | Type |
------ | ------ |
`socket` | Socket |
`data` | any |

**Returns:** *any*

___

### `Private` downloadYoutube

▸ **downloadYoutube**(`socket`: Socket, `url`: string): *Promise‹[DownloadedVideo](../interfaces/_core_imusic_.downloadedvideo.md)›*

*Defined in [src/modules/MusicModule.ts:280](https://github.com/Xisabla/Korbots/blob/57d3739/server/src/modules/MusicModule.ts#L280)*

Download a video from youtube into the youtube storage

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`socket` | Socket | Client Socket to send download status |
`url` | string | URL of the video to download |

**Returns:** *Promise‹[DownloadedVideo](../interfaces/_core_imusic_.downloadedvideo.md)›*

A Promise of the DownloadedVideo data (id, title, storage, ...)

___

### `Private` fetchYoutubeInfo

▸ **fetchYoutubeInfo**(`url`: string): *Promise‹[SearchResult](../interfaces/_core_imusic_.searchresult.md)›*

*Defined in [src/modules/MusicModule.ts:202](https://github.com/Xisabla/Korbots/blob/57d3739/server/src/modules/MusicModule.ts#L202)*

Fetch Youtube data from a Youtube Video url using YoutubeDL

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`url` | string | URL of the Youtube Video |

**Returns:** *Promise‹[SearchResult](../interfaces/_core_imusic_.searchresult.md)›*

A Promise of SearchResult

___

###  onSocketJoin

▸ **onSocketJoin**(`socket`: Socket): *void*

*Overrides [Module](_core_module_.module.md).[onSocketJoin](_core_module_.module.md#onsocketjoin)*

*Defined in [src/modules/MusicModule.ts:45](https://github.com/Xisabla/Korbots/blob/57d3739/server/src/modules/MusicModule.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`socket` | Socket |

**Returns:** *void*

___

###  onSocketLeave

▸ **onSocketLeave**(`socket`: Socket): *void*

*Inherited from [Module](_core_module_.module.md).[onSocketLeave](_core_module_.module.md#onsocketleave)*

*Defined in [src/core/Module.ts:45](https://github.com/Xisabla/Korbots/blob/57d3739/server/src/core/Module.ts#L45)*

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

*Defined in [src/modules/MusicModule.ts:32](https://github.com/Xisabla/Korbots/blob/57d3739/server/src/modules/MusicModule.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`app` | [Application](_core_application_.application.md) |

**Returns:** *void*

___

### `Protected` registerTask

▸ **registerTask**(`action`: [TaskAction](../modules/_core_task_.md#taskaction), `schedule`: [TaskSchedule](../modules/_core_task_.md#taskschedule), `start`: boolean, `after?`: [TaskAfter](../modules/_core_task_.md#taskafter)): *number*

*Inherited from [Module](_core_module_.module.md).[registerTask](_core_module_.module.md#protected-registertask)*

*Defined in [src/core/Module.ts:61](https://github.com/Xisabla/Korbots/blob/57d3739/server/src/core/Module.ts#L61)*

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

*Defined in [src/modules/MusicModule.ts:66](https://github.com/Xisabla/Korbots/blob/57d3739/server/src/modules/MusicModule.ts#L66)*

**Returns:** *number[]*

___

### `Private` search

▸ **search**(`socket`: Socket, `data`: any): *any*

*Defined in [src/modules/MusicModule.ts:143](https://github.com/Xisabla/Korbots/blob/57d3739/server/src/modules/MusicModule.ts#L143)*

Search for a music/video

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`socket` | Socket | Client Socket |
`data` | any | Provided data  |

**Returns:** *any*

___

### `Private` searchYoutube

▸ **searchYoutube**(`query`: string, `limit`: number): *Promise‹[SearchResult](../interfaces/_core_imusic_.searchresult.md)[]›*

*Defined in [src/modules/MusicModule.ts:181](https://github.com/Xisabla/Korbots/blob/57d3739/server/src/modules/MusicModule.ts#L181)*

Search for video on Youtube

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`query` | string | Search query |
`limit` | number | Result limit |

**Returns:** *Promise‹[SearchResult](../interfaces/_core_imusic_.searchresult.md)[]›*

A Promise of SearchResult Array

___

### `Private` sortPlaylist

▸ **sortPlaylist**(`socket`: Socket, `data`: any): *void*

*Defined in [src/modules/MusicModule.ts:98](https://github.com/Xisabla/Korbots/blob/57d3739/server/src/modules/MusicModule.ts#L98)*

**Parameters:**

Name | Type |
------ | ------ |
`socket` | Socket |
`data` | any |

**Returns:** *void*
