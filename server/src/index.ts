import { config } from 'dotenv'
import express from 'express'
import http from 'http'
import mongoose from 'mongoose'
import path from 'path'
import socketIO from 'socket.io'

import { User } from './models/User'

config()

const mongoUrl = process.env.MONGO_URL
const mongoUser = process.env.MONGO_USER
const mongoPass = process.env.MONGO_PASS
const mongoDb = process.env.MONGO_DB

// API FETCH EXAMPLE
/*
// import fetch from 'node-fetch'
fetch('https://api.github.com/users/Xisabla/repos')
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
    */

// SERVER CONFIGURATION

const app = express()
const server = http.createServer(app)
const io = socketIO(server)

const publicPath: string = path.join(
    __dirname,
    '../',
    '../',
    'client/',
    'public'
)

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

    // EXAMPLE #1 INITIALIZING
    .then(() => {
        return User.updateMany(
            { connected: true },
            {
                $set: { connected: false }
            }
        )
    })
    .then(() => {
        // SERVER START

        server.listen(3000, () => {
            console.log('Server running')
            console.log('http://localhost:3000')
        })

        io.on('connect', (socket) => {
            console.log('Socket connected:', socket.id)

            socket.emit('connected', socket.id)
        })

        /*
        // START EXAMPLE #1 MAIN BEHAVIOR

        io.on('connection', (socket) => {
            User.find({ connected: true }).then((users) => {
                io.emit(
                    'users',
                    users.map((user) => user.toObject())
                )
            })

            socket.on('disconnect', () => {
                return User.updateOne(
                    { socketId: socket.id },
                    {
                        $set: { connected: false }
                    }
                )
                    .then(() => {
                        return User.find({ connected: true })
                    })
                    .then((users) => {
                        io.emit(
                            'users',
                            users.map((user) => user.toObject())
                        )
                    })
                    .catch(console.error)
            })

            socket.on('setUsername', (username) => {
                console.log(username)

                const user = new User({
                    username,
                    connected: true,
                    socketId: socket.id
                })

                User.doesExists(username)
                    .then((result) => {
                        if (result) {
                            return User.findOne({
                                username,
                                connected: true
                            }).then((user) => {
                                if (user == null) {
                                    return User.updateOne(
                                        { username },
                                        {
                                            $set: {
                                                connected: true,
                                                socketId: socket.id
                                            }
                                        }
                                    )
                                } else {
                                    return Promise.reject(
                                        'User already connected'
                                    )
                                }
                            })
                        } else {
                            return user.save()
                        }
                    })
                    .then(() => {
                        return User.find({ connected: true })
                    })
                    .then((users) => {
                        io.emit(
                            'users',
                            users.map((user) => user.toObject())
                        )
                    })
                    .catch((err) => {
                        socket.emit('error', err)
                    })
            })
        })

        // END EXAMPLE #1 MAIN BEHAVIOR

        */
    })
    .catch(() => {
        console.log(
            'Unable to connect to the database. Application not running'
        )
    })
