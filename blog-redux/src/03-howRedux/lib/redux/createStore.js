export default function createStore(reducer, initalState, enhancer) {
  if (typeof reducer !== 'function') {
    throw new Error(`Expected reducer to be a function. Instead received '${typeof reducer}'`)
  }

  if (typeof initalState === 'function' && typeof enhancer === 'undefined') {
    enhancer = initalState
    initalState = undefined
  }

  if (
    (typeof initalState === 'function' && typeof enhancer === 'function') ||
    (typeof enhancer === 'function' && typeof arguments[3] === 'function')
  ) {
    throw new Error(
      'It looks like you are passing several store enhancers to ' +
      'createStore(). This is not supported. Instead, compose them ' +
      'together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.'
    )
  }

  if (enhancer) {
    if (typeof enhancer !== 'function') {
      throw new Error(`Expected enhancer to be a function. Instead received: '${typeof (enhancer)}'`
      )
    }

    return enhancer(createStore)(reducer, initalState)
  }

  let state = initalState || {}, listeners = []
  const getState = () => {
    return state
  }
  const dispatch = (action) => {
    state = reducer(state, action)
    listeners.forEach(fn => fn())
  }
  const subscribe = (fn) => {
    listeners.push(fn)
    return () => {
      unsubscribe(fn)
    }
  }
  const unsubscribe = (listener) => {
    let index = listeners.indexOf(listener)
    if (index !== -1) {
      listeners.splice(index, 1)
    }
  }
  return {
    getState,
    dispatch,
    subscribe,
  }
}
