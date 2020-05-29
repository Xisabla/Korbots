import { USER_SET } from '../actions'

export function user(state = { username: 'guest' }, action) {
    if (action.type == USER_SET) return { username: action.username }

    return state
}
