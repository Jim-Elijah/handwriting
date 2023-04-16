import compose from './compose'

const applyMiddleware = (...middlewares) => (createStore) => (...args) => {
  const store = createStore(...args)
  let dispatch = store.dispatch;
  // middlewares.forEach((middleware) => {
  //     dispatch = middleware(store)(dispatch);
  // });
  // const obj = {
  //   getState: store.getState,
  //   dispatch: store.dispatch,
  // }

  // const arr = middlewares.map(middleware => middleware(obj))

  // console.log('arr', arr)
  // dispatch = compose(...arr)(dispatch)
  // console.log('dispatch', dispatch)

  const middlewareAPI = {
    getState: store.getState,
    dispatch: (...args) => dispatch(...args),
  }
  const chain = middlewares.map((middleware) => middleware(middlewareAPI))
  dispatch = compose(...chain)(store.dispatch)

  return {
    ...store,
    dispatch,
  };
};

export default applyMiddleware;