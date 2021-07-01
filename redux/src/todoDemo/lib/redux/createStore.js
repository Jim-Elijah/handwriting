export default function createStore(reducer, initalState={}, enhance = {}) {
  let state = initalState,
    listeners = []
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
    if (index === -1) {
      listeners.splice(index)
    }
  }
  return {
    getState,
    dispatch,
    subscribe,
  }
}

