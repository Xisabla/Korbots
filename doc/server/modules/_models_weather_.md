[korbots-server](../README.md) › ["models/Weather"](_models_weather_.md)

# Module: "models/Weather"

## Index

### Interfaces

* [IWeather](../interfaces/_models_weather_.iweather.md)
* [IWeatherSchema](../interfaces/_models_weather_.iweatherschema.md)

### Variables

* [Weather](_models_weather_.md#const-weather)
* [WeatherSchema](_models_weather_.md#const-weatherschema)
* [coordinatesQueryOffset](_models_weather_.md#const-coordinatesqueryoffset)

## Variables

### `Const` Weather

• **Weather**: *[IWeather](../interfaces/_models_weather_.iweather.md)‹›* = model<IWeatherSchema, IWeather>('Weather', WeatherSchema)

*Defined in [src/models/Weather.ts:715](https://github.com/Xisabla/Korbots/blob/4bc77ee/server/src/models/Weather.ts#L715)*

Weather Model, allow to create, manipulate and save weather entries

```typescript
const weatherEntry: IWeatherSchema = new Weather({
     temperature: 189,
     latitude: 12,
     longitude: 14,
     humidity: 18,
     weather: "sunny",
     weatherDescription: "Really sunny"
     wind: 1.2
     date: new Date(),
     lastUpdate: new Date()
})

weatherEntry.updateCurrent()
 .then((entry) => {
     entry.save()
})
```

___

### `Const` WeatherSchema

• **WeatherSchema**: *Schema‹any›* = new Schema(
    {
        temperature: { type: Number, required: true },
        humidity: { type: Number, required: true },
        wind: { type: Number, required: true },
        weather: { type: String, required: true },
        weatherDescription: { type: String, required: true },
        weatherIcon: { type: String, required: true },
        latitude: { type: Number, required: true },
        longitude: { type: Number, required: true },
        country: String,
        name: String,
        date: { type: Date, required: true },
        lastUpdate: { type: Date, required: true },
        updateScore: { type: Number, required: true }
    },
    { collection: 'weather' }
)

*Defined in [src/models/Weather.ts:19](https://github.com/Xisabla/Korbots/blob/4bc77ee/server/src/models/Weather.ts#L19)*

Mongoose Schema of the Weather Model Document, works in the "weather" collection
See "Document" inside all the documentation of this file as instance of this Schema

___

### `Const` coordinatesQueryOffset

• **coordinatesQueryOffset**: *0.025* = 0.025

*Defined in [src/models/Weather.ts:11](https://github.com/Xisabla/Korbots/blob/4bc77ee/server/src/models/Weather.ts#L11)*
