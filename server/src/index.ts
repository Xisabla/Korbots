import Application from './core/Application'

const app = new Application({ useEnv: true })

app.connectDB()
app.run()
