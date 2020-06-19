import debug from 'debug'
import { Socket } from 'socket.io'

import Application from '../core/Application'
import Module from '../core/Module'
import { Coordinates, Location } from '../models/Location'
import { IWeatherSchema, Weather } from '../models/Weather'

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
        // Schedules
        const eachHours = '0 0 * * * *'

        // Registering
        const ids: number[] = [
            this.registerTask(() => this.updateCurrentEntries(), eachHours)
        ]

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

        this.getCoordinates(data).then(({ lat, lon }) => {
            // Get Current
            Weather.getCurrent(lat, lon)
                .then((doc) => {
                    log(`Entry found, responding with weather:currentData`)
                    // Send
                    socket.emit('weather:currentData', doc.toJSON())
                })
                .catch((err) => {
                    log(`Error in the process, responding with weather:error`)
                    socket.emit('weather:error', err)
                })
        })
    }

    /**
     * Get the Daily entry from Weather according to the data provided by the Socket, then send one event to the Socket
     * @param socket Client Socket
     * @param data Provided data
     */
    private getDaily(socket: Socket, data: any): void {
        log(`Received getDaily event from ${socket.id}`)

        const date = new Date(data.date)

        this.getCoordinates(data).then(({ lat, lon }) => {
            // Get Daily
            Weather.getDaily(lat, lon, date)
                .then((doc) => {
                    log(`Entry found, responding with weather:dailyData`)

                    // Send
                    socket.emit('weather:dailyData', doc.toJSON())
                })
                .catch((err) => {
                    log(`Error in the process, responding with weather:error`)
                    socket.emit('weather:error', err)
                })
        })
    }

    /**
     * Get the Daily entries from Weather according to the data provided by the Socket, then send one event to the Socket
     * @param socket Client Socket
     * @param data Provided data
     */
    private getDailyAll(socket: Socket, data: any): void {
        log(`Received getDailyAll event from ${socket.id}`)

        const further: number = data.further || 4

        this.getCoordinates(data).then(({ lat, lon }) => {
            // Get daily
            Weather.getDailyAll(lat, lon, further)
                .then((docs) => {
                    log(`Entries found, responding with weather:dailyAllData`)

                    // Send
                    socket.emit(
                        'weather:dailyAllData',
                        docs.map((doc) => doc.toJSON())
                    )
                })
                .catch((err) => {
                    log(`Error in the process, responding with weather:error`)
                    socket.emit('weather:error', err)
                })
        })
    }

    /**
     * Get the Current entry and the Daily entries from Weather according to the data provided by the Socket, then send one event to the Socket
     * @param socket Client Socket
     * @param data Provided data
     */
    private getAll(socket: Socket, data: any): void {
        log(`Received getAll event from ${socket.id}`)

        this.getCoordinates(data).then(({ lat, lon }) => {
            // Get daily
            Weather.getDailyAll(lat, lon, 4)
                // Get current
                .then((daily) => {
                    return Weather.getCurrent(lat, lon).then((current) => {
                        log(`Entries found, responding with weather:allData`)

                        // Send
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
        })
    }

    /**
     * Task method, update all the weather entries from the database
     */
    private updateCurrentEntries(): Promise<any> {
        // Get outdated
        return (
            Weather.findOutdatedCurrent()
                // Update
                .then((docs: IWeatherSchema[]) =>
                    Promise.all(docs.map((doc) => doc.updateCurrent()))
                )
                // Decrement updateScore
                .then((docs: IWeatherSchema[]) =>
                    Promise.all(docs.map((doc) => doc.decrementUpdateScore()))
                )
                // Broadcast Socket.IO
                .then((docs) => {
                    const docsJson = docs.map((doc) => doc.toJSON())

                    log(
                        `${docsJson.length} entries updated, broadcasting with weather:autoUpdateCurrent`
                    )

                    this.app.io.emit('weather:autoUpdateCurrent', docsJson)

                    return docsJson
                })
                // TODO: Check for duplicate
                .catch((err) => {
                    log(`Unable to update current outdated entries: ${err}`)
                })
        )
    }

    /**
     * Extracts coordinates from Data, or extract City and use Location to look for the coordinates
     * @param data The data received from the Socket
     * @returns A Promise of Coordinates
     */
    private getCoordinates(data: any): Promise<Coordinates> {
        // Check for a string
        if (typeof data === 'string') {
            const [city, country] = data.split(',')
            return Location.getCoordinates(city, country)
        }

        // Check for data.latitude, data.longitude
        if (data.latitude && data.longitude) {
            return Promise.resolve({
                lat: data.latitude,
                lon: data.longitude
            } as Coordinates)
        }

        // Check for data.city and fetch
        if (data.city) {
            return Location.getCoordinates(data.city, data.country)
        }
        // Reject
        return Promise.reject('Bad fields')
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
