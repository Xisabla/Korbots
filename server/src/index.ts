import { OpenweatherCurrentAPI, OpenweatherOnecallAPI } from './config/API'
import Application from './core/Application'
import { Weather } from './models/Weather'
import { SampleModule } from './modules/SampleModule'
import { WeatherModule } from './modules/WeatherModule'

const app = new Application({ useEnv: true })

app.connectDB()

// ---- API Registering --------------------------

Application.registerAPIs([OpenweatherCurrentAPI, OpenweatherOnecallAPI])

// ---- Modules Registering ----------------------
app.registerModule(new WeatherModule())
app.registerModule(new SampleModule()) // Only for testing

app.run()

// Weather Model tests

Weather.getCurrent(51.51, -0.13)
    .then((result) => console.log(result.toJSON()))
    .then(() => Weather.getDailyAll(51.51, -0.13))
    .then((result) => console.log(result))
