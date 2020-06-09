/**
 * Object used to trigger an "handle" method on a specific action
 */
export default interface Listener {
    /** action name, which a string */
    action: string
    /** handle promise, will run if the action is detected */
    handle: (...data: any[]) => Promise<any>
}

/**
 * ListenerSelectorObject, will select only if all attributes (there is only "action" ATM) are matching
 */
export interface ListenerSelectorObject {
    action: string
}

/**
 * ListenerSelectorFunction, returns true to select the given listener
 */
export type ListenerSelectorFunction = (listener: Listener) => boolean

/**
 * ListenerSelector used to filter a ListenerCollection, null means all
 */
export type ListenerSelector =
    | ListenerSelectorObject
    | ListenerSelectorFunction
    | null
