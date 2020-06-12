import debug from 'debug'
import { config } from 'dotenv'
import express from 'express'
import http from 'http'
import mongoose, { Mongoose } from 'mongoose'
import { ConnectionOptions } from 'mongoose'
import path from 'path'
import socketIO, { Socket } from 'socket.io'

import Module from './Module'

const log = debug('core:Application')

// ---- Interfaces -------------------------------

export interface ApplicationOptions {
    /** Absolute path to the folder containing server statics files */
    server?: string
    /** Public path of the server (absolute please), default: path.join(server, 'public') */
    public?: string
    /** Port on which the server will listen */
    port?: number
    /** If set on true, will look un into .env file to load important configuration */
    useEnv?: boolean
    /** mongoose connection base configuration */
    mongo?: DatabaseConfiguration
}

export interface DatabaseConfiguration {
    /** Connect URL of Mongo database */
    url: string
    /** "user" for the Mongoose options */
    user?: string
    /** "pass" for the Mongoose options */
    pass?: string
    /** "dbname" for the Mongoose options */
    dbname?: string
}

/**
 * Main application Object, registers components, starts the server
 */
export default class Application {
    // ---- Attributes -------------------------------

    // Options
    options: ApplicationOptions

    // Server
    /** Express internal server */
    app: express.Application
    /** HTTP server from express server */
    server: http.Server
    /** SocketIO server linked  with the HTTP server */
    io: SocketIO.Server

    // Mongo
    /** Promise returned on Mongoose connection, allows to synchronize after DB connection, null if no database connection */
    dbPending?: Promise<Mongoose>
    /** Result of the resolve from Mongoose Connection, null if no database connection */
    db?: Mongoose

    // Modules
    /** Module store */
    modules: Module[]
    /** Socket store */
    sockets: Socket[]
    /** API store */
    static apis: APIwk[]

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

        // Initialize server and data
        this.init()

        // Fix event handlers scope
        this.onSocketJoin = this.onSocketJoin.bind(this)
    }

    /**
     * Initialize internal data, http and socket.io server
     */
    init(): void {
        this.dbPending = null
        this.db = null

        this.modules = []
        this.sockets = []
        if (!Application.apis) Application.apis = []

        this.app = express()
        this.server = http.createServer(this.app)
        this.io = socketIO(this.server)
    }

    /**
     * Load options from the .env file
     */
    loadEnv(): void {
        log('Loading environnement resources')
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

            if (user) options.user = user
            if (pass) options.pass = pass
            if (dbname) options.dbName = dbname

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

    // ---- Modules ----------------------------------

    /**
     * Register a Module inside the Application, run the internal "register" method of the Module
     * @param module The Module to register
     */
    registerModule(module: Module): void {
        // TODO: Maybe give a name to modules (and id ?) to show it on logging

        // If needs the database
        if (module.waitForDatabase) {
            // And there is a dbPending
            if (this.dbPending) {
                // Wait for it to end and register
                this.dbPending.then(() => {
                    module.register(this)
                    this.modules.push(module)
                    log('Module registered')
                })
            } else {
                // Otherwise, don't register the module and dump an error
                console.error(
                    `Unable to register module, Module.waitForDatabase is set on true while there is no database connection in the Application`
                )
            }
        } else {
            module.register(this)
            this.modules.push(module)
            log('Module registered')
        }
    }

    // ---- API --------------------------------------

    /**
     * Register a API inside the Application, erase API with the same name, will automatically retrieve the api_key from .env file it the entry exists
     * @param api The API to register
     */
    static registerAPI(api: API): void {
        // Erase API if it already exists
        if (this.apis.find((elem) => elem.name === api.name)) {
            log(`Erased existing API: "${api.name}"`)
            this.apis = this.apis.filter((elem) => elem.name !== api.name)
        }

        const { name, baseUrl, envKeyEntry } = api

        let key = ''
        let foundKey: string

        if ((foundKey = process.env[envKeyEntry])) {
            key = foundKey
            log(`Key found for API: "${api.name}"`)
        }

        const apiwk: APIwk = {
            name,
            baseUrl,
            envKeyEntry,
            key
        }

        this.apis.push(apiwk)

        log(`Registered new API: "${apiwk.name}"`)
    }

    /**
     * Register multiple APIs, if any API has the same name as an existing it will erase
     * @param apis APIs to register
     */
    static registerAPIs(apis: API[]): void {
        apis.forEach((api) => this.registerAPI(api))
    }

    /**
     * Get an API from it's name, null if not found
     * @param name The API name
     */
    static getAPI(name: string): APIwk | null {
        return this.apis.find((api) => api.name === name)
    }

    /**
     * Get the key of an API from it's name, empty if not found
     * @param name The API name
     */
    static getAPIKey(name: string): string {
        const api = this.getAPI(name)

        return api ? api.key : ''
    }

    /**
     * Get the baseUrl of an API from it's name, empty if not found
     * @param name The API name
     */
    static getAPIBaseUrl(name: string): string {
        const api = this.getAPI(name)

        return api ? api.baseUrl : ''
    }

    // ---- Sockets ----------------------------------

    /**
     * Triggers all connection listeners, also wait for disconnection to trigger disconnection listeners
     * @param socket
     */
    onSocketJoin(socket: Socket): void {
        const { id } = socket

        this.sockets.push(socket)
        log(`Socket connected: ${id}, stored`)

        this.modules.forEach((module) => module.onSocketJoin(socket))

        socket.on('disconnect', () => {
            this.sockets = this.sockets.filter((s) => s.id !== id)

            log(`Socket disconnected: ${id}, removed`)
        })
    }

    // ---- Running ----------------------------------

    /**
     * Start the server, returns a Promise to keep the promise pipe
     */
    startServer(): Promise<http.Server> {
        return new Promise((resolve) => {
            const { app, io, server, options } = this
            const { port } = options

            // Use the public path defined in the options
            if (options.public) app.use(express.static(options.public))

            // Triggers "onSocketJoin" on a socket.io connection
            io.on('connection', this.onSocketJoin)

            // Start the server
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