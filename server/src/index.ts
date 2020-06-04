import { config } from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import fetch from 'node-fetch'
import path from 'path'

config()

const mongoUrl = process.env.MONGO_URL
const mongoUser = process.env.MONGO_USER
const mongoPass = process.env.MONGO_PASS
const mongoDb = process.env.MONGO_DB

// API FETCH EXAMPLE

fetch('https://api.github.com/users/Xisabla/repos')
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err))

// SERVER CONFIGURATION

const app = express()

const publicPath: string = path.join(__dirname, '../', 'public')

app.use(express.static(publicPath))

// DATABASE CONNECTION

mongoose
    .connect(mongoUrl, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        user: mongoUser,
        pass: mongoPass,
        dbName: mongoDb
    })
    .then(() => {
        // SERVER START

        app.listen(3000, () => {
            console.log('Server running')
            console.log('http://localhost:3000')
        })

        // TRY TO ADD A NEW USER TO "accounts" COLLECTION

        const userSchema = new mongoose.Schema(
            {
                name: { type: String, unique: true, required: true }
            },
            { collection: 'accounts' }
        )

        const User = mongoose.model('User', userSchema)

        User.findOne({ name: 'Uranium32' }).then((user) => {
            console.log(user.toObject())
        })

        /*
        const Uranium32 = new User({ name: 'Uranium32'})

        Uranium32.save()
            .then(() => { console.log('saved') })
            .catch((err) => { console.log(err.code) })
        */
    })
    .catch(() => {
        console.log(
            'Unable to connect to the database. Application not running'
        )
    })
