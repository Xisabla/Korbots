import debug from 'debug'
import { Socket } from 'socket.io'

import Application from '../core/Application'
import Module from '../core/Module'
import { Horoscope } from '../models/Horoscope'

const log = debug('module:horoscope')

export class HoroscopeModule extends Module {
    public register(app: Application): void {
        super.register(app)

        log('Registered')
    }

    // ---- Sockets ----------------------------------

    public onSocketJoin(socket: Socket): void {
        super.onSocketJoin(socket)

        log(`Socket joined: ${socket.id}`)

        socket.on('horoscope:getCurrent', (data) =>
            this.getCurrent(socket, data)
        )
    }

    // ---- Tasks ------------------------------------

    protected registerTasks(): number[] {
        // Empty cause no tasks here

        return []
    }

    // ---- Methods ----------------------------------

    /**
     * Get the Current entry from Horoscope according to the data provided by the Socket, then send one event to the Socket
     * @param socket Client Socket
     * @param data Provided data
     */
    private getCurrent(socket: Socket, data: any): void {
        log(`Received horoscope:getCurrent event from ${socket.id}`)

        const sign: string = data.sign.toLowerCase()
        
        Horoscope.getCurrent(sign)
            .then((doc) => {
                log(`Entry found, responding with horoscope:currentData`)
                socket.emit('horoscope:currentData', doc.toJSON())
            })
            .catch((err) => {
                log(`Error in the process, responding with horoscope:error`)
                socket.emit('horoscope:error', err)
            })
    }

    // ---- Getters ----------------------------------

    get name(): string {
        // Module name is 'horoscope'
        return 'horoscope'
    }

    get waitForDatabase(): boolean {
        // We do need to wait for the database
        return true
    }
}
