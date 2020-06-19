[korbots-server](../README.md) › ["models/Horoscope"](_models_horoscope_.md)

# Module: "models/Horoscope"

## Index

### Interfaces

* [IHoroscope](../interfaces/_models_horoscope_.ihoroscope.md)
* [IHoroscopeSchema](../interfaces/_models_horoscope_.ihoroscopeschema.md)

### Variables

* [Horoscope](_models_horoscope_.md#const-horoscope)
* [HoroscopeSchema](_models_horoscope_.md#const-horoscopeschema)

## Variables

### `Const` Horoscope

• **Horoscope**: *[IHoroscope](../interfaces/_models_horoscope_.ihoroscope.md)‹›* = model<IHoroscopeSchema, IHoroscope>(
    'Horoscope',
    HoroscopeSchema
)

*Defined in [src/models/Horoscope.ts:167](https://github.com/Xisabla/Korbots/blob/76dbc29/server/src/models/Horoscope.ts#L167)*

___

### `Const` HoroscopeSchema

• **HoroscopeSchema**: *Schema‹any›* = new Schema(
    {
        sign: { type: String, required: true },
        date: { type: Date, required: true },
        luckyNumber: { type: Number, required: true },
        mood: String,
        love: { type: String, required: true },
        work: { type: String, required: true },
        family: { type: String, required: true },
        health: { type: String, required: true }
    },
    { collection: 'horoscope' }
)

*Defined in [src/models/Horoscope.ts:9](https://github.com/Xisabla/Korbots/blob/76dbc29/server/src/models/Horoscope.ts#L9)*
