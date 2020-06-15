import { CronJob } from 'cron'
import debug, { Debugger } from 'debug'
import moment, { Moment } from 'moment'

export interface TaskSettings {
    /** Origin of the task (eg: "module:weather", "core") just set 'none' if it's a dummy task */
    origin: string
    /** When should the task trigger (can be a Date, a Cron schedule or a Moment) */
    schedule: TaskSchedule
    /** The action that will be perform when the task will be running */
    action: TaskAction
    /** Set on true to auto start the Task, otherwise will wait to be started */
    start?: boolean
    /** Function to perform once the action is performed (even on Promise failure) */
    after?: TaskAfter
}

export type TaskAction = () => Promise<any>
export type TaskAfter = (arg: any[]) => any
export type TaskSchedule = string | Date | Moment

/**
 * A Task will perform an action at a given Schedule (cron/date/moment)
 */
export class Task {
    /** Task uniq ID */
    private _id: number

    /** Where does the task come from, will allow to select all task related to a same origin */
    private _origin: string

    /** Internal job (CronJob) that will trigger the action */
    private _job: CronJob
    /** Action to run on job trigger */
    private _action: TaskAction
    /** Function to run after the action */
    private _after?: TaskAfter

    /** Class internal logger */
    private _log: debug.Debugger

    /** Moment of the last run() call */
    private _lastCall: Moment | null

    /** Task ID Counter, used to generate and increment ID of new tasks */
    static idCnt = 0

    /**
     * Create a new Task with the given settings, may not autostart by default
     * @param settings Settings of the task
     */
    constructor(settings: TaskSettings) {
        // Generate ID
        this._id = this.getId()

        const { origin, schedule, action } = settings

        // Create a task specific logger
        this._log = debug(`task:#${this._id}:${origin}`)

        // Set internal data
        this._origin = origin
        this._action = action

        // Store onComplete method if given
        if (settings.after) this._after = settings.after

        // Create a CronJob
        this._job = new CronJob(schedule, () => {
            this.run()
        })

        // Start the job if the start flag is on
        if (settings.start) this.start()
    }

    // ---- Job Control ------------------------------

    /**
     * Start the CronJob, will begin to perform action on given Schedule
     */
    public start(): void {
        this._log(`Job started, next call: ${this.nextCall}`)
        this._job.start()
    }

    /**
     * Stop the CronJob for running future actions
     */
    public stop(): void {
        this._log(`Job stopped`)
        this._job.stop()
    }

    // ---- Action performing ------------------------

    /**
     * Run the action, also triggers the onComplete method if exists
     * Will console.error on action.catch()
     */
    private run(): void {
        this._lastCall = moment()
        this._log(`Action performing`)

        this._action()
            .then((arg) => {
                if (this._after) return this._after(arg)
            })
            .catch((err) => {
                if (this._after) return this._after(err)
            })
            .then(() =>
                this._log(`Action performed, next call: ${this.nextCall}`)
            )
    }

    // ---- Getters ----------------------------------

    /**
     * Get the ID of the Task
     */
    get id(): number {
        return this._id
    }

    /**
     * Get the task logger
     */
    get log(): Debugger {
        return this._log
    }

    /**
     * Get the origin of the Task
     */
    get origin(): string {
        return this._origin
    }

    /**
     * Get the last call Moment of "run"
     */
    get lastCall(): Moment {
        return this._lastCall
    }

    /**
     * Get the next call Moment of "run"
     */
    get nextCall(): Moment {
        return this._job.nextDate()
    }

    /**
     * See if the CronJob is running (not stopped)
     */
    get running(): boolean {
        return this._job.running
    }

    // ---- Private methods --------------------------

    /**
     * Generate an ID and increment internal ID Counter
     */
    private getId(): number {
        return Task.idCnt++
    }
}
