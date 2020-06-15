import debug from 'debug'
import { Moment } from 'moment'
import moment from 'moment'

import { Task, TaskSettings } from './Task'

const log = debug(`task:manager`)

/**
 * Object that store and allow to manage Tasks
 */
export default class TaskManager {
    private _tasks: Task[]

    /**
     * Create a TaskManager
     * @param tasks Initial tasks of the store
     */
    constructor(...tasks: Task[]) {
        this._tasks = tasks
    }

    // ---- Store ------------------------------------

    /**
     * Try to add a task into the store, fail if a task with the same id is already in the store
     * @param task Task to add
     * @returns The task id, or -1 if the task already exists
     */
    public add(task: Task | TaskSettings): number {
        if (task instanceof Task) {
            // Check for existing
            if (this.get(task.id)) {
                log(`Task add rejection: id ${task.id} already exists`)
                return -1
            }

            // Push
            this._tasks.push(task)
            log(`Registered task ${task.id}`)

            return task.id
        } else {
            return this.add(new Task(task))
        }
    }

    /**
     * Stop and remove a task from the store
     * @param id The id of the task
     */
    public remove(id: number): void {
        const task = this.get(id)

        if (task) {
            task.stop()
            this._tasks = this._tasks.filter((t) => t.id !== task.id)
        }
    }

    /**
     * Get a Task from the store by its id
     * @param id The id of the task
     * @returns The Task found
     */
    public get(id: number): Task {
        return this._tasks.find((task) => task.id === id)
    }

    /**
     * Get all Tasks from the store that has the given origin
     * @param origin The origin of the task (all if empty)
     * @returns The tasks that match the origin
     */
    public getAll(origin?: string) {
        if (!origin) return this._tasks

        return this._tasks.filter((task) => task.origin === origin)
    }

    // ---- Task actions -----------------------------

    /**
     * Allow the Task to check for the Schedule and run the action
     * @param id The id of the Task
     */
    public start(id: number): void {
        const task = this.get(id)

        if (task) task.start()
    }

    /**
     * Disallow the Task to check for the Schedule and run the action
     * @param id The id of the Task
     */
    public stop(id: number): void {
        const task = this.get(id)

        if (task) task.stop()
    }

    /**
     * Start all the tasks which matches the given origin (empty means all)
     * @param origin The origin to match
     */
    public startAll(origin?: string): void {
        this.getAll(origin).forEach((task) => task.start())
    }

    /**
     * Stop all the tasks which matches the given origin (empty means all)
     * @param origin The origin to match
     */
    public stopAll(origin?: string): void {
        this.getAll(origin).forEach((task) => task.stop())
    }

    // ---- Getters ----------------------------------

    /**
     * Get when the action was last called
     * @param id The id of the Task
     * @returns A moment of the last call of the action, moment(-1) if the Task is not found
     */
    public lastCall(id: number): Moment {
        const task = this.get(id)

        return task ? task.lastCall : moment(-1)
    }

    /**
     * Get when the action will be next called
     * @param id The id of the Task
     * @returns A moment of the next call of the action, moment(-1) if the Task is not found
     */
    public nextCall(id: number): Moment {
        const task = this.get(id)

        return task ? task.nextCall : moment(-1)
    }

    /**
     * Get the origin of a Task in the store
     * @param id The id of the Task
     * @returns The origin of the task, empty if the Task is not found
     */
    public origin(id: number): string {
        const task = this.get(id)

        return task ? task.origin : 'none'
    }

    /**
     * Get the status of a Task in the store
     * @param id The id of the Task
     * @returns True if the task is running, false otherwise
     */
    public status(id: number): boolean {
        const task = this.get(id)

        return task ? task.running : false
    }
}
