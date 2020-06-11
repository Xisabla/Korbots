import { OpenweatherCurrentAPI, OpenweatherOnecallAPI } from './config/API'
import Application from './core/Application'
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
