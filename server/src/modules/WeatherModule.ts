import debug from 'debug'
import { Socket } from 'socket.io'

import Application from '../core/Application'
import Module from '../core/Module'
import { Weather } from '../models/Weather'

const log = debug('module:weather')

export class WeatherModule extends Module {
    public register(app: Application): void {
        super.register(app)

        log('Registered')
    }

    // ---- Sockets ----------------------------------

    public onSocketJoin(socket: Socket): void {
        super.onSocketJoin(socket)

        log(`Socket joined: ${socket.id}`)

        socket.on('weather:getCurrent', (data) => this.getCurrent(socket, data))
        socket.on('weather:getDaily', (data) => this.getDaily(socket, data))
        socket.on('weather:getDailyAll', (data) =>
            this.getDailyAll(socket, data)
        )
        socket.on('weather:getAll', (data) => this.getAll(socket, data))
    }

    // ---- Tasks ------------------------------------

    protected registerTasks(): number[] {
        const ids: number[] = []

        log(`Registered ${ids.length} tasks`)

        return ids
    }

    // ---- Methods ----------------------------------

    /**
     * Get the Current entry from Weather according to the data provided by the Socket, then send one event to the Socket
     * @param socket Client Socket
     * @param data Provided data
     */
    private getCurrent(socket: Socket, data: any): void {
        log(`Received getCurrent event from ${socket.id}`)

        const lat: number = data.latitude
        const lon: number = data.longitude

        Weather.getCurrent(lat, lon)
            .then((doc) => {
                log(`Entry found, responding with weather:currentData`)
                socket.emit('weather:currentData', doc.toJSON())
            })
            .catch((err) => {
                log(`Error in the process, responding with weather:error`)
                socket.emit('weather:error', err)
            })
    }

    /**
     * Get the Daily entry from Weather according to the data provided by the Socket, then send one event to the Socket
     * @param socket Client Socket
     * @param data Provided data
     */
    private getDaily(socket: Socket, data: any): void {
        log(`Received getDaily event from ${socket.id}`)

        const lat: number = data.latitude
        const lon: number = data.longitude
        const date = new Date(data.date)

        Weather.getDaily(lat, lon, date)
            .then((doc) => {
                log(`Entry found, responding with weather:dailyData`)
                socket.emit('weather:dailyData', doc.toJSON())
            })
            .catch((err) => {
                log(`Error in the process, responding with weather:error`)
                socket.emit('weather:error', err)
            })
    }

    /**
     * Get the Daily entries from Weather according to the data provided by the Socket, then send one event to the Socket
     * @param socket Client Socket
     * @param data Provided data
     */
    private getDailyAll(socket: Socket, data: any): void {
        log(`Received getDailyAll event from ${socket.id}`)

        const lat: number = data.latitude
        const lon: number = data.longitude
        const further: number = data.further

        Weather.getDailyAll(lat, lon, further)
            .then((docs) => {
                log(`Entries found, responding with weather:dailyAllData`)
                socket.emit(
                    'weather:dailyAllData',
                    docs.map((doc) => doc.toJSON())
                )
            })
            .catch((err) => {
                log(`Error in the process, responding with weather:error`)
                socket.emit('weather:error', err)
            })
    }

    /**
     * Get the Current entry and the Daily entries from Weather according to the data provided by the Socket, then send one event to the Socket
     * @param socket Client Socket
     * @param data Provided data
     */
    private getAll(socket: Socket, data: any): void {
        log(`Received getAll event from ${socket.id}`)

        const lat: number = data.latitude
        const lon: number = data.longitude

        Weather.getDailyAll(lat, lon, 4)
            .then((daily) => {
                return Weather.getCurrent(lat, lon).then((current) => {
                    log(`Entries found, responding with weather:allData`)
                    socket.emit('weather:allData', {
                        current,
                        daily
                    })
                })
            })
            .catch((err) => {
                log(`Error in the process, responding with weather:error`)
                socket.emit('weather:error', err)
            })
    }

    // ---- Getters ----------------------------------

    get name(): string {
        // Module name is 'weather'
        return 'weather'
    }

    get waitForDatabase(): boolean {
        // We do need to wait for the database
        return true
    }
}
