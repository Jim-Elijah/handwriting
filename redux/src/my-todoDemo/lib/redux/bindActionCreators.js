const bindActionCreator = (actionCreator, dispatch) => {
  return (args) => dispatch(actionCreator(args));
}

const bindActionCreators = (actionCreators, dispatch) => {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch)
  }
  if (typeof actionCreators !== 'object' || actionCreators == null) {
    throw new Error()
  }
  const res = {}
  for (const key in actionCreators) {
    const actionCreator = actionCreators(key)
    if (typeof actionCreator === 'function') {
      res[key] = bindActionCreator(actionCreator, dispatch)
    }
  }
  return res
};
export default bindActionCreators
