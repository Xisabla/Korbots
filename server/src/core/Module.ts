/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { Socket } from 'socket.io'

import Application from './Application'
import { TaskAction, TaskAfter, TaskSchedule } from './Task'

/**
 * All Modules extends from this Object, it's working like a Controller registered by the
 *  Application Object, registering events and dealing with behavior between the Application
 *  and the Models
 */
export default abstract class Module {
    /** Application instance */
    protected app: Application
    /** Internal sockets store, updated on SocketJoin and on SocketLeave */
    protected sockets: Socket[]

    /**
     * Register the Module inside the Application
     * @param app main Application instance
     */
    public register(app: Application): void {
        this.app = app
        this.sockets = app.sockets
        this.registerTasks()
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

    // ---- Tasks ------------------------------------

    /**
     * A shortcut to register a Task into the Task Manager of the Application
     * Will fill the field "origin" with the name of the Module
     * @param action Action of the Task
     * @param schedule Schedule of the Task
     * @param start Should the task start ?
     * @param after Function to call after the action (facultative)
     * @returns The id of the Task
     */
    protected registerTask(
        action: TaskAction,
        schedule: TaskSchedule,
        start = true,
        after?: TaskAfter
    ): number {
        return this.app.tasks.add({
            origin: `module:${this.name}`,
            action,
            schedule,
            start,
            after
        })
    }

    /**
     * Register all of the basic Tasks of the Module into the Application Task Manager
     * @returns The ids of the tasks
     * @abstract
     */
    protected abstract registerTasks(): number[]

    // ---- Getters ----------------------------------

    /** Name of the Module */
    abstract get name(): string

    /** Does the Module need to wait for the Database to be connected ? (default : false) */
    get waitForDatabase(): boolean {
        return false
    }
}
