import { Document, Model, model, Schema } from 'mongoose'
import fetch from 'node-fetch'

export const WeatherSchema = new Schema(
    {
        temperature: { type: Number, required: true },
        humidity: { type: Number, required: true },
        wind: { type: Number, required: true },
        weather: { type: String, required: true },
        latitude: { type: Number, required: true },
        longitude: { type: Number, required: true },
        country: String,
        name: String,
        date: { type: Date, required: true },
        lastUpdate : { type: Date, required: true }
    },
    { collection : 'weather' }
)

export interface IWeatherSchema extends Document {
    temperature: number
    humidity: number
    wind: number
    weather: string
    latitude: number
    longitude: number
    country?: string
    name?: string
    date: Date
    lastUpdate : Date
}

export interface IWeather extends Model<IWeatherSchema> {
    needsUpdate(latitude: number, longitude: number, date: Date): Promise<boolean>
    updateApi(latitude: number, longitude: number, date: Date): void
    setUrl(latitude: number, longitude: number): string
}

export const Weather = model<IWeatherSchema, IWeather>('Weather', WeatherSchema)


// set url with needed coordinates for API fetch
WeatherSchema.statics.setUrl = function (latitude: number, longitude: number) {
    return `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.API_OPENWEATHERMAP_KEY}`
}

// return false if the last update was made 1h ago at most = too old
WeatherSchema.statics.needsUpdate = function (latitude: number, longitude: number, date: Date) {
    return Weather.find({latitude, longitude})
    .then((weather) => {
        let flag = false
        weather.forEach((element) => {
            let oneHourBefore = date
            oneHourBefore.setHours(date.getHours() - 1)
            if (element.date.getTime >= oneHourBefore.getTime) flag = true
        })
        return flag
    })
}

// fetch API data if model need an update, then save changes in database
WeatherSchema.statics.updateApi = function (latitude: number, longitude: number) {
    if (Weather.needsUpdate) {
        return Weather.findOne({ latitude, longitude })
        .then((weather) => {
            fetch(Weather.setUrl(latitude, longitude))
            .then((res) => res.json())
            .then((data) => {
                weather.temperature = data.main.temp
                weather.wind = data.wind.speed
                weather.humidity = data.main.humidity
                weather.weather = data.weather.main
                weather.lastUpdate = new Date()
                weather.date = data.dt
                if (data.name != '') {
                    weather.name = data.name
                    weather.country = data.country
                }
                return weather.save()
            })
            .catch((err) => console.error(err))
        })
    }
}
