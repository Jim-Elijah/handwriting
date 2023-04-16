import { combineReducers } from '../lib/redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import fetchData from './fetchData'

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  fetchData,
})

export default todoApp