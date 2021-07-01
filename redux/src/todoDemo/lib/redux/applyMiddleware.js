const applyMiddleware = (store, middlewares) => {
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