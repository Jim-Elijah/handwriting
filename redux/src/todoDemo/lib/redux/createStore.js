export default function createStore(reducer, initalState, enhance = {}) {
  console.log('createStore');
  let state = initalState || {},
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
      listeners.splice(index, 1)
    }
  }
  return {
    getState,
    dispatch,
    subscribe,
  }
}

// export default function createStore(reducer) {
//   let state = {};
//   const listeners = [];
//   const getState = () => state;
//   const dispatch = (action) => {
//       state = reducer(state, action);
//       listeners.forEach((listener) => listener());
//   };
//   const subscribe = (listener) => listeners.push(listener);

//   return {
//       getState,
//       dispatch,
//       subscribe,
//   };
// };