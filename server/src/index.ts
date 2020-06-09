import Application from './core/Application'
import { SampleModule } from './modules/SampleModule'
import { WeatherModule } from './modules/WeatherModule'

const app = new Application({ useEnv: true })

// app.connectDB()

app.registerModule(new WeatherModule())
app.registerModule(new SampleModule())  // Only for testing

app.run()

/*
NOTE: Keep it on the side, test data for weather

const london_lat = 51.509865
const london_lon = -0.118092

Weather.getData(london_lat, london_lon, new Date())
    .then((data) => console.log(data.toObject()))
    .catch((err) => console.log(err))
*/
