import * as APIs from './config/API'
import Application from './core/Application'
import { WeatherModule } from './modules/WeatherModule'

const app = new Application({ useEnv: true })

app.connectDB()

// ---- API Registering --------------------------

Application.registerAPIs(Object.values(APIs))

// ---- Modules Registering ----------------------
app.registerModule(new WeatherModule())

app.run()
