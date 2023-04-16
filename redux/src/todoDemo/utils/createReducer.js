const createReducer = (initialState, handlers) => {
  return (state = initialState, action) => {
    if (handlers.hasOwnProperty(action.type)) {
      const fn = handlers[action.type]
      if (typeof fn !== 'function') {
        throw new Error(`Expected reducer to be a function. Instead received '${typeof(fn)}'`)
      }
      return handlers[action.type](state, action);
    }
    return state;
  };
};
export default createReducer;