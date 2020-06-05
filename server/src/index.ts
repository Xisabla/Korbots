import { config } from 'dotenv'
import express from 'express'
import mongoose, { Document } from 'mongoose'
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
        useCreateIndex: true,
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
                name: { type: String, unique: true, required: true },
                surname: String
            },
            { collection: 'accounts' }
        )

        interface IUserSchema extends Document {
            name: string
            surname: string
        }

        const User = mongoose.model<IUserSchema>('User', userSchema)

        User.findOne({ name: 'Gautier' }).then((user) => {
            console.log(user.toObject())
        })

        /*
        User.updateOne(
            { name: 'Gautieezar' },
            {
                $set: { surname: 'Miquet' }
            }
        )
            .then((elem) => console.log(elem))
            .catch((err) => console.log(err))
        */
    })
    .catch(() => {
        console.log(
            'Unable to connect to the database. Application not running'
        )
    })
