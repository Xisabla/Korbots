[korbots-server](../README.md) › ["models/Playlist"](_models_playlist_.md)

# Module: "models/Playlist"

## Index

### Interfaces

* [IPlaylist](../interfaces/_models_playlist_.iplaylist.md)
* [IPlaylistSchema](../interfaces/_models_playlist_.iplaylistschema.md)
* [ISongSchema](../interfaces/_models_playlist_.isongschema.md)

### Variables

* [Playlist](_models_playlist_.md#const-playlist)
* [PlaylistSchema](_models_playlist_.md#const-playlistschema)
* [Song](_models_playlist_.md#const-song)
* [SongSchema](_models_playlist_.md#const-songschema)

## Variables

### `Const` Playlist

• **Playlist**: *[IPlaylist](../interfaces/_models_playlist_.iplaylist.md)‹›* = model<IPlaylistSchema, IPlaylist>(
    'Playist',
    PlaylistSchema
)

*Defined in [src/models/Playlist.ts:141](https://github.com/Xisabla/Korbots/blob/4216c83/server/src/models/Playlist.ts#L141)*

___

### `Const` PlaylistSchema

• **PlaylistSchema**: *Schema‹any›* = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String },
        duration: { type: Number, required: true, default: 0 },
        creationDate: { type: Date, required: true },
        songs: { type: [SongSchema], required: true }
    },
    { collection: 'playlist' }
)

*Defined in [src/models/Playlist.ts:13](https://github.com/Xisabla/Korbots/blob/4216c83/server/src/models/Playlist.ts#L13)*

___

### `Const` Song

• **Song**: *[Model](../interfaces/_models_horoscope_.ihoroscope.md#model)‹[ISongSchema](../interfaces/_models_playlist_.isongschema.md)‹›, object›* = model<ISongSchema>('Song', SongSchema)

*Defined in [src/models/Playlist.ts:146](https://github.com/Xisabla/Korbots/blob/4216c83/server/src/models/Playlist.ts#L146)*

___

### `Const` SongSchema

• **SongSchema**: *Schema‹any›* = new Schema({
    id: { type: String, required: true },
    title: { type: String, required: true },
    addingDate: { type: Date, required: true }
})

*Defined in [src/models/Playlist.ts:7](https://github.com/Xisabla/Korbots/blob/4216c83/server/src/models/Playlist.ts#L7)*
