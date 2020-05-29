import { DATE_SET, DATE_UPDATE } from '../actions'

export function date(state = new Date(), action) {
    if (action.type == DATE_SET) return action.date
    if (action.type == DATE_UPDATE) return new Date()

    return state
}
