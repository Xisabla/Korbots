import {
    AztroAPI,
    OpenweatherCurrentAPI,
    OpenweatherOnecallAPI
} from './config/API'
import Application from './core/Application'
import { HoroscopeModule } from './modules/HoroscopeModule'
import { WeatherModule } from './modules/WeatherModule'

const app = new Application({ useEnv: true })

app.connectDB()

// ---- API Registering --------------------------

Application.registerAPIs([
    OpenweatherCurrentAPI,
    OpenweatherOnecallAPI,
    AztroAPI
])

// ---- Modules Registering ----------------------
app.registerModule(new WeatherModule())
app.registerModule(new HoroscopeModule()) // a moi

app.run()
