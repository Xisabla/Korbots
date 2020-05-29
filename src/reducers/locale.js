import { LOCALE_SET } from '../actions'

export function locale(state = 'en-US', action) {
    if (action.type == LOCALE_SET) return action.locale

    return state
}
