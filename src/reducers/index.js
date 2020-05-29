import { combineReducers } from 'redux'

import { date } from './date'
import { locale } from './locale'
import { user } from './user'

export default combineReducers({ date, locale, user })
