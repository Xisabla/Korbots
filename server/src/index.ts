import path from 'path'

import * as APIs from './config/API'
import Application from './core/Application'
import { HoroscopeModule } from './modules/HoroscopeModule'
import { MusicModule } from './modules/MusicModule'
import { WeatherModule } from './modules/WeatherModule'

const storage = path.join(__dirname, '../', 'storage')

const app = new Application({ storage, useEnv: true })

app.connectDB()

// ---- API Registering --------------------------

Application.registerAPIs(Object.values(APIs))

// ---- Modules Registering ----------------------

app.registerModule(new WeatherModule())
app.registerModule(new HoroscopeModule())
app.registerModule(new MusicModule())

app.run()
