import Listener, { ListenerSelector } from './Listener'

/**
 * ListenerCollection object that allows to manage, select, remove and trigger Listeners
 */
export default class ListenerCollection {
    /**
     * All stored listeners
     */
    listeners: Listener[]

    /**
     * Create a ListenerCollection filled with given listeners
     * @param listeners Array of listeners to store
     */
    constructor(...listeners: Listener[]) {
        this.listeners = listeners
    }

    /**
     * Triggers (run "handle" method) the first found selector with the given data
     * @param selector Filter to select one (or many, but only the first one will be used) listener
     * @param data Data that will be given the "handle" method
     */
    trigger(selector: ListenerSelector, ...data: []): Promise<any> {
        const listeners = this.filter(selector)

        if (listeners.length > 0) {
            return listeners.listeners[0].handle(data)
        }

        return Promise.resolve(null)
    }

    /**
     * Triggers all the selected listeners, will run their "handle" method without waiting the others
     * @param selector Filter to select one or many listeners
     * @param cbSuccess Method to run after the handle on success (then)
     * @param cbError Method to run after the handle on error (catch)
     * @param data Data tha will be given to all of the "handle" method
     */
    triggerAll(
        selector: ListenerSelector,
        cbSuccess?: (...args: any[]) => any,
        cbError?: (err: any) => any,
        ...data: any[]
    ): void {
        this.filter(selector).listeners.forEach((listener) => {
            listener
                .handle(data)
                .then((...args: any[]) => {
                    return cbSuccess ? cbSuccess(args) : args
                })
                .catch((err) => {
                    if (cbError) return cbError(err)
                })
        })
    }

    /**
     * Triggers all the selected listeners, will run their "handle" method one after each other
     * @param selector Filter to select one or many listeners
     * @param data Data tha will be given to all of the "handle" method
     */
    triggerAllSync(selector: ListenerSelector, ...data: any[]): Promise<any[]> {
        return Promise.all(
            this.filter(selector).listeners.map((listener) =>
                listener.handle(data)
            )
        )
    }

    /**
     * Add a listener to the internal store
     * @param listener Listener to add
     */
    add(listener: Listener): number {
        return this.listeners.push(listener)
    }

    /**
     * Keep all listeners in the store that does not match the selector
     * @param selector Selector for the listeners to remove
     */
    remove(selector: ListenerSelector): void {
        this.listeners = this.listeners.filter((listener) => {
            if (selector instanceof Function) return !selector(listener)
            if ('action' in selector) return listener.action !== selector.action

            return false
        })
    }

    /**
     * Returns a new ListenerCollection filtered by the given selector
     * @param selector Selector to filter the element with
     */
    filter(selector: ListenerSelector): ListenerCollection {
        if (selector == null) return this

        const listeners = this.listeners.filter((listener) => {
            if (selector instanceof Function) return selector(listener)
            if ('action' in selector) return listener.action == selector.action

            return false
        })

        const collection = new ListenerCollection()

        listeners.forEach((listener) => collection.add(listener))

        return collection
    }

    /**
     * Returns the internal store length
     */
    get length(): number {
        return this.listeners.length
    }
}
