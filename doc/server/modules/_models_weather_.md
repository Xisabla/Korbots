[korbots-server](../README.md) › [Globals](../globals.md) › ["models/Weather"](_models_weather_.md)

# Module: "models/Weather"

## Index

### Interfaces

* [IWeather](../interfaces/_models_weather_.iweather.md)
* [IWeatherSchema](../interfaces/_models_weather_.iweatherschema.md)

### Variables

* [Weather](_models_weather_.md#const-weather)
* [WeatherSchema](_models_weather_.md#const-weatherschema)

## Variables

### `Const` Weather

• **Weather**: *[IWeather](../interfaces/_models_weather_.iweather.md)‹›* = model<IWeatherSchema, IWeather>('Weather', WeatherSchema)

*Defined in [src/models/Weather.ts:637](https://github.com/Xisabla/Korbots/blob/4e41610/server/src/models/Weather.ts#L637)*

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
        latitude: { type: Number, required: true },
        longitude: { type: Number, required: true },
        country: String,
        name: String,
        date: { type: Date, required: true },
        lastUpdate: { type: Date, required: true }
    },
    { collection: 'weather' }
)

*Defined in [src/models/Weather.ts:17](https://github.com/Xisabla/Korbots/blob/4e41610/server/src/models/Weather.ts#L17)*

Mongoose Schema of the Weather Model Document, works in the "weather" collection
See "Document" inside all the documentation of this file as instance of this Schema
