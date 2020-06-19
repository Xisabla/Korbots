[korbots-server](../README.md) › ["models/Music"](_models_music_.md)

# Module: "models/Music"

## Index

### Interfaces

* [IMusic](../interfaces/_models_music_.imusic.md)
* [IMusicSchema](../interfaces/_models_music_.imusicschema.md)

### Variables

* [Music](_models_music_.md#const-music)
* [MusicSchema](_models_music_.md#const-musicschema)

## Variables

### `Const` Music

• **Music**: *[IMusic](../interfaces/_models_music_.imusic.md)‹›* = model<IMusicSchema, IMusic>('Music', MusicSchema)

*Defined in [src/models/Music.ts:191](https://github.com/Xisabla/Korbots/blob/02d848f/server/src/models/Music.ts#L191)*

___

### `Const` MusicSchema

• **MusicSchema**: *Schema‹any›* = new Schema(
    {
        title: { type: String, required: true },
        duration: { type: Number, required: true },
        thumbnail: { type: String, required: true },
        sourceId: { type: String, required: true },
        source: { type: String, required: true },
        path: { type: String, required: true }
    },
    { collection: 'music' }
)

*Defined in [src/models/Music.ts:8](https://github.com/Xisabla/Korbots/blob/02d848f/server/src/models/Music.ts#L8)*
