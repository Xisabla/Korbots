import { configure } from 'mobx'

import date from './date'
import user from './user'

export { date }
export { user }

configure({ enforceActions: 'always' })
