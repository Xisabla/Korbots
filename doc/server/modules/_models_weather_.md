[korbots-server](../README.md) › ["models/Weather"](_models_weather_.md)

# Module: "models/Weather"

## Index

### Interfaces

* [IWeather](../interfaces/_models_weather_.iweather.md)
* [IWeatherSchema](../interfaces/_models_weather_.iweatherschema.md)
* [LocationCoordinates](../interfaces/_models_weather_.locationcoordinates.md)

### Type aliases

* [Location](_models_weather_.md#location)

### Variables

* [Weather](_models_weather_.md#const-weather)
* [WeatherSchema](_models_weather_.md#const-weatherschema)

## Type aliases

###  Location

Ƭ **Location**: *[LocationCoordinates](../interfaces/_models_weather_.locationcoordinates.md) | string*

*Defined in [src/models/Weather.ts:21](https://github.com/Xisabla/Korbots/blob/c7d0b2c/server/src/models/Weather.ts#L21)*

Location can be coordinates or city name or "city_name,country_code", which are strings

## Variables

### `Const` Weather

• **Weather**: *[IWeather](../interfaces/_models_weather_.iweather.md)‹›* = model<IWeatherSchema, IWeather>('Weather', WeatherSchema)

*Defined in [src/models/Weather.ts:731](https://github.com/Xisabla/Korbots/blob/c7d0b2c/server/src/models/Weather.ts#L731)*

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
        lastUpdate: { type: Date, required: true },
        updateScore: { type: Number, required: true }
    },
    { collection: 'weather' }
)

*Defined in [src/models/Weather.ts:33](https://github.com/Xisabla/Korbots/blob/c7d0b2c/server/src/models/Weather.ts#L33)*

Mongoose Schema of the Weather Model Document, works in the "weather" collection
See "Document" inside all the documentation of this file as instance of this Schema
