import { OpenweatherCurrentAPI, OpenweatherOnecallAPI } from './config/API'
import Application from './core/Application'
// import { Weather } from './models/Weather'
import { SampleModule } from './modules/SampleModule'
import { WeatherModule } from './modules/WeatherModule'

const app = new Application({ useEnv: true })

app.connectDB()

// ---- API Registering --------------------------

Application.registerAPIs([OpenweatherCurrentAPI, OpenweatherOnecallAPI])

console.log(Application.getAPIKey('openweather:current'))
console.log(Application.getAPIBaseUrl('openweather:current'))

process.exit()

// ---- Modules Registering ----------------------
app.registerModule(new WeatherModule())
app.registerModule(new SampleModule()) // Only for testing

app.run()

// NOTE: Keep it on the side, test data for weather

/*
const london_lat = 51.509865
const london_lon = -0.118092

Weather.getData(london_lat, london_lon, new Date())
    .then((data) => console.log(data.toObject()))
    .then(() => Weather.removeOld())
    .catch((err) => console.log(err))
*/
