/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { Socket } from 'socket.io'

import Application from './Application'

export default class Module {
    app: Application
    sockets: Socket[]

    register(app: Application): void {
        this.app = app
        this.sockets = app.sockets
    }

    onSocketJoin(socket: Socket): void {
        // Update socket list
        this.sockets = this.app.sockets
    }

    onSocketLeave(socket: Socket): void {
        // Update socket list
        this.sockets = this.app.sockets
    }

    get waitForDatabase(): boolean {
        return false
    }
}
