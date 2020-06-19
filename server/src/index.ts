import path from 'path'

import * as APIs from './config/API'
import Application from './core/Application'
import { Music } from './models/Music'
import { MusicModule } from './modules/MusicModule'
import { WeatherModule } from './modules/WeatherModule'

const storage = path.join(__dirname, '../', 'storage')

const app = new Application({ storage, useEnv: true })

app.connectDB()

// ---- API Registering --------------------------

Application.registerAPIs(Object.values(APIs))

// ---- Modules Registering ----------------------

app.registerModule(new WeatherModule())
app.registerModule(new MusicModule())

app.run()

Music.checkOrphan().then(console.log)
