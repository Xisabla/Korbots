/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { Socket } from 'socket.io'

import Application from './Application'

/**
 * All Modules extends from this Object, it's working like a Controller registered by the
 *  Application Object, registering events and dealing with behavior between the Application
 *  and the Models
 */
export default class Module {
    /** Application instance */
    private app: Application
    /** Internal sockets store, updated on SocketJoin and on SocketLeave */
    private sockets: Socket[]

    /**
     * Register the Module inside the Application
     * @param app main Application instance
     */
    public register(app: Application): void {
        this.app = app
        this.sockets = app.sockets
    }

    // ---- Sockets ----------------------------------

    /**
     * Function called once a Socket is connected
     * @param socket Incoming socket
     */
    public onSocketJoin(socket: Socket): void {
        // Update socket list
        this.sockets = this.app.sockets
    }

    /**
     * Function called once a Socket is disconnected
     * @param socket Disconnecting socket
     */
    public onSocketLeave(socket: Socket): void {
        // Update socket list
        this.sockets = this.app.sockets
    }

    // ---- Getters ----------------------------------

    /** Name of the Module (default: 'name') */
    get name(): string {
        return 'module'
    }

    /** Does the Module need to wait for the Database to be connected ? (default : false) */
    get waitForDatabase(): boolean {
        return false
    }
}
