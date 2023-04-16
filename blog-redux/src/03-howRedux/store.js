// import { createStore, applyMiddleware } from 'redux'
import { createStore, applyMiddleware } from './lib/redux'
import logger from "redux-logger";
import thunk from 'redux-thunk'
import reducer from './reducers'
import { getFromStorage } from '../utils/helpers'
import { storageKey, initialState } from './constant'

export const preloadedState = getFromStorage(storageKey) || initialState

// const store = createStore(reducer, preloadedState)
const store = createStore(reducer, preloadedState, applyMiddleware(thunk, logger))
// const store = applyMiddleware(thunk, logger)(createStore)(reducer, preloadedState)

export default store