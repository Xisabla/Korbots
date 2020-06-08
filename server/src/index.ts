import Application from './core/Application'
import { Weather } from './models/Weather'

const app = new Application({ useEnv: true })

app.connectDB()
app.run()

const london_lat = 51.509865
const london_lon = -0.118092

Weather.getData(london_lat, london_lon, new Date())
    .then((data) => console.log(data.toObject()))
    .catch((err) => console.log(err))
