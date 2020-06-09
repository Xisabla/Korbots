import debug from 'debug'
import { Socket } from 'socket.io'

import Application from '../core/Application'
import Module from '../core/Module'

const log = debug('module:SampleModule')

export class SampleModule extends Module {
    register(app: Application): void {
        super.register(app)

        app.registerListener({
            action: 'connection',
            handle: this.connectionHandler
        })

        log('Registered')
    }

    connectionHandler(sockets: Socket[]): Promise<void> {
        const socket = sockets[0]
        log('Got connection:', socket.id)

        return Promise.resolve()
    }

    get waitForDatabase(): boolean {
        return true
    }
}
