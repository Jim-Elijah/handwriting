export default function combineReducers(reducerObj) {
  return function (state = {}, action) {
    const keys = Object.keys(reducerObj);
    const newState = {}
    keys.forEach(key => {
      const reducer = reducerObj[key]
      newState[key] = reducer(state[key], action)
    })
    return {
      ...state,
      ...newState
    }
  }
}