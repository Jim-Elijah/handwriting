import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { Provider } from 'react-redux';
// import { Provider } from './todoDemo/lib/react-redux';
// import { createStore, applyMiddleware } from './todoDemo/lib/redux'
// import reducer from './todoDemo/reducers'

// const getStorage = () => {
//   const data = localStorage.getItem("todo");
//   return data ? JSON.parse(data) : {};
// }

// // 只打印出 Action
// const loggerAction = (store) => (dispatch) => (action) => {
//   console.log('action: ', action);
//   dispatch(action);
// };

// // 只打印出 更新后的state
// const loggerState = (store) => (dispatch) => (action) => {
//   console.log('current state: ', store.getState());
//   dispatch(action);
//   console.log('next state: ', store.getState());
// };


// let store = createStore(reducer, getStorage())
// store = applyMiddleware(store, [loggerAction, loggerState]);

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      <App />
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
