import debug from 'debug'
import { config } from 'dotenv'
import express from 'express'
import * as fs from 'fs'
import http from 'http'
import mongoose, { Mongoose } from 'mongoose'
import { ConnectionOptions } from 'mongoose'
import path from 'path'
import socketIO, { Socket } from 'socket.io'

import Module from './Module'
import TaskManager from './TaskManager'

const log = debug('core:Application')

// ---- Interfaces -------------------------------

export interface ApplicationOptions {
    /** Absolute path to the folder containing server statics files */
    server?: string
    /** Public path of the server (absolute please), default: path.join(server, 'public') */
    public?: string
    /** Storage directory for server files */
    storage?: string
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
    private _options: ApplicationOptions

    // Server
    /** Express internal server */
    private _app: express.Application
    /** HTTP server from express server */
    private _server: http.Server
    /** SocketIO server linked  with the HTTP server */
    private _io: SocketIO.Server

    // Mongo
    /** Promise returned on Mongoose connection, allows to synchronize after DB connection, null if no database connection */
    private dbPending?: Promise<Mongoose>
    /** Result of the resolve from Mongoose Connection, null if no database connection */
    private db?: Mongoose

    // Modules
    /** Module store */
    private _modules: Module[]
    /** Socket store */
    private _sockets: Socket[]
    /** Tasks store */
    private _tasks: TaskManager
    /** API store */
    public static apis: APIwk[]

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
        this._options = {
            server,
            public: path.join(server, 'public'),
            storage: path.join(__dirname, 'storage'),
            port: 3000
        }

        log(`Using port ${this._options.port}`)

        // Load given options
        Object.assign(this._options, options)

        if (!this._options.mongo) this._options.mongo = { url: 'none' }
        if (options.useEnv) this.loadEnv()

        // Initialize server and data
        this.checkStorage()
        this.init()

        // Fix event handlers scope
        this.onSocketJoin = this.onSocketJoin.bind(this)
    }

    /**
     * Initialize internal data, http and socket.io server
     */
    private init(): void {
        this.dbPending = null
        this.db = null

        this._modules = []
        this._sockets = []
        this._tasks = new TaskManager()
        if (!Application.apis) Application.apis = []

        this._app = express()
        this._server = http.createServer(this._app)
        this._io = socketIO(this._server)
    }

    /**
     * Load options from the .env file
     */
    private loadEnv(): void {
        log('Loading environnement resources')
        config()

        if (process.env.MONGO_URL)
            this._options.mongo.url = process.env.MONGO_URL
        if (process.env.MONGO_USER)
            this._options.mongo.user = process.env.MONGO_USER
        if (process.env.MONGO_PASS)
            this._options.mongo.pass = process.env.MONGO_PASS
        if (process.env.MONGO_DB)
            this._options.mongo.dbname = process.env.MONGO_DB
    }

    // ---- Storage ----------------------------------

    /**
     * Get the path to the sub-storage directory for the given name, create directory if needed
     * @param name Name of the sub-storage
     * @returns The path to the sub-storage directory
     */
    public getStorage(name = '') {
        const dir = path.join(this._options.storage, name)

        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true })

            log(`Sub storage created: ${dir}`)
        }

        return dir
    }

    /**
     * Check for existing storage folder
     */
    private checkStorage() {
        const { storage } = this._options

        if (fs.existsSync(storage)) {
            log(`Use storage: ${storage}`)
        } else {
            fs.mkdirSync(storage, {
                recursive: true
            })

            log(`Storage created: ${storage}`)
        }
    }

    // ---- Database ---------------------------------

    /**
     * Try to connect to the database, updates internal dbPending promise
     * @param configuration Database configuration (user, password, dbname)
     */
    public connectDB(configuration?: DatabaseConfiguration): Promise<Mongoose> {
        // Use the global configuration if no one given
        if (!configuration) configuration = this._options.mongo

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
    public registerModule(module: Module): void {
        // If needs the database
        if (module.waitForDatabase) {
            // And there is a dbPending
            if (this.dbPending) {
                // Wait for it to end and register
                this.dbPending.then(() => {
                    module.register(this)
                    this._modules.push(module)
                })
            } else {
                // Otherwise, don't register the module and dump an error
                log(
                    `Unable to register ${module.name}, needs database while no database connection running`
                )
            }
        } else {
            module.register(this)
            this._modules.push(module)
        }
    }

    // ---- API --------------------------------------

    /**
     * Register a API inside the Application, erase API with the same name, will automatically retrieve the api_key from .env file it the entry exists
     * @param api The API to register
     */
    public static registerAPI(api: API): void {
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
    public static registerAPIs(apis: API[]): void {
        apis.forEach((api) => this.registerAPI(api))
    }

    /**
     * Get an API from it's name, null if not found
     * @param name The API name
     */
    public static getAPI(name: string): APIwk | null {
        return this.apis.find((api) => api.name === name)
    }

    /**
     * Get the key of an API from it's name, empty if not found
     * @param name The API name
     */
    public static getAPIKey(name: string): string {
        const api = this.getAPI(name)

        return api ? api.key : ''
    }

    /**
     * Get the baseUrl of an API from it's name, empty if not found
     * @param name The API name
     */
    public static getAPIBaseUrl(name: string): string {
        const api = this.getAPI(name)

        return api ? api.baseUrl : ''
    }

    // ---- Sockets ----------------------------------

    /**
     * Triggers all connection listeners, also wait for disconnection to trigger disconnection listeners
     * @param socket
     */
    private onSocketJoin(socket: Socket): void {
        const { id } = socket

        this._sockets.push(socket)
        log(`Socket connected: ${id}, stored`)

        this._modules.forEach((module) => {
            module.onSocketJoin(socket)
        })

        socket.on('disconnect', () => {
            this._sockets = this._sockets.filter((s) => s.id !== id)

            this._modules.forEach((module) => {
                module.onSocketLeave(socket)
            })

            log(`Socket disconnected: ${id}, removed`)
        })
    }

    // ---- Running ----------------------------------

    /**
     * Start the server, returns a Promise to keep the promise pipe
     */
    private startServer(): Promise<http.Server> {
        return new Promise((resolve) => {
            const {
                _app: app,
                _io: io,
                _server: server,
                _options: options
            } = this
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
    public run(): Promise<http.Server> {
        return new Promise((resolve) => {
            if (this.dbPending) {
                // Wait for the promise to end
                this.dbPending.then(() => resolve(this.startServer()))
            } else {
                resolve(this.startServer())
            }
        })
    }

    // ---- Getters ----------------------------------

    get io(): SocketIO.Server {
        return this._io
    }

    get sockets(): Socket[] {
        return this._sockets
    }

    get tasks(): TaskManager {
        return this._tasks
    }

    get server(): express.Application {
        return this._app
    }

    get public(): string {
        return this._options.public
    }
}
