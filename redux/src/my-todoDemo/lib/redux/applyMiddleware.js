const applyMiddleware = (...middlewares) => (createStore) => (args) => {
  const store = createStore(args)
  let dispatch = store.dispatch;
  middlewares.forEach((middleware) => {
      dispatch = middleware(store)(dispatch);
  });

  return {
      ...store,
      dispatch,
  };
};

export default applyMiddleware;