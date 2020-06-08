import debug from 'debug'
import { config } from 'dotenv'
import express from 'express'
import http from 'http'
import mongoose, { Mongoose } from 'mongoose'
import { ConnectionOptions } from 'mongoose'
import path from 'path'
import socketIO from 'socket.io'

const log = debug('core:Application')

// ---- Interfaces -------------------------------

export interface ApplicationOptions {
    server?: string
    public?: string
    port?: number
    useEnv?: boolean
    mongo?: DatabaseConfiguration
}

export interface DatabaseConfiguration {
    url: string
    user?: string
    pass?: string
    dbname?: string
}

/**
 * TODO:
 *  - Implement modules registering
 *  - Implement tasks registering
 */

/**
 * Main application Object, registers components, starts the server
 */
export default class Application {
    // ---- Attributes -------------------------------

    options: ApplicationOptions

    app: express.Application
    server: http.Server
    io: SocketIO.Server

    dbPending?: Promise<Mongoose>
    db?: Mongoose

    // ---- Configuration ----------------------------

    /**
     * Create an application object that controls the server and the components
     * @param options Application global options
     */
    constructor(options: ApplicationOptions = {}) {
        // Server path
        const server = options.server
            ? options.server
            : path.join(__dirname, '../', '../', '../', 'client/')

        log(`Using server path: ${server}`)

        // Default options
        this.options = {
            server,
            public: path.join(server, 'public'),
            port: 3000
        }

        log(`Using port ${this.options.port}`)

        // Load given options
        Object.assign(this.options, options)

        if (!this.options.mongo) this.options.mongo = { url: 'none' }
        if (options.useEnv) this.loadEnv()

        // Initialize servers
        this.init()
    }

    /**
     * Initialize internal data, http and socket.io server
     */
    init(): void {
        this.app = express()
        this.server = http.createServer(this.app)
        this.io = socketIO(this.server)
    }

    /**
     * Load options from the .env file
     */
    loadEnv(): void {
        config()

        if (process.env.MONGO_URL)
            this.options.mongo.url = process.env.MONGO_URL
        if (process.env.MONGO_USER)
            this.options.mongo.user = process.env.MONGO_USER
        if (process.env.MONGO_PASS)
            this.options.mongo.pass = process.env.MONGO_PASS
        if (process.env.MONGO_DB)
            this.options.mongo.dbname = process.env.MONGO_DB
    }

    // ---- Database ---------------------------------

    /**
     * Try to connect to the database, updates internal dbPending promise
     * @param configuration Database configuration (user, password, dbname)
     */
    connectDB(configuration?: DatabaseConfiguration): Promise<Mongoose> {
        // Use the global configuration if no one given
        if (!configuration) configuration = this.options.mongo

        // Create a promise to define the dbPending attribute early
        return (this.dbPending = new Promise((resolve, reject) => {
            const { url, user, pass, dbname } = configuration

            // Build up Mongoose configuration
            const options: ConnectionOptions = {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }

            if (user) options.user = configuration.user
            if (pass) options.pass = configuration.pass
            if (dbname) options.dbName = configuration.dbname

            log('Attempting to connect to mongodb server:', url)

            mongoose
                .connect(url, options)
                .then((db) => {
                    this.db = db
                    log('Successfully connected to the database')

                    resolve(db)
                })
                .catch((err) => {
                    log('Unable to connect to the database')
                    reject(err)
                })
        }))
    }

    // ---- Running ----------------------------------

    /**
     * Start the server, returns a Promise to keep the promise pipe
     */
    startServer(): Promise<http.Server> {
        return new Promise((resolve) => {
            const { app, server, options } = this
            const { port } = options

            // Use the public path defined in the options
            if (options.public) app.use(express.static(options.public))

            resolve(
                server.listen(port, () => {
                    log(`Server started on port ${port}`)
                    log(`http://localhost:${port}`)
                })
            )
        })
    }

    /**
     * Start the server, if there is a pending connection try to the database, wait for it to end
     */
    run(): Promise<http.Server> {
        return new Promise((resolve) => {
            if (this.dbPending) {
                // Wait for the promise to end
                this.dbPending.then(() => resolve(this.startServer()))
            } else {
                resolve(this.startServer())
            }
        })
    }
}
