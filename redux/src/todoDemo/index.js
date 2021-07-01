import React from 'react'
import { Provider } from 'react-redux'
// import { Provider } from './lib/react-redux'
// import { createStore } from 'redux'
import { createStore, applyMiddleware } from './lib/redux'
import reducer from './reducers'
import App from './components/App'

// 只打印出 Action
const loggerAction = (store) => (dispatch) => (action) => {
  console.log('action: ', action);
  dispatch(action);
};

// 只打印出 更新后的state
const loggerState = (store) => (dispatch) => (action) => {
  console.log('current state: ', store.getState());
  dispatch(action);
  console.log('next state: ', store.getState());
};

let store

export default class APP extends React.Component {
  constructor(props) {
    super(props)
    store = createStore(reducer, this.getState())
    store = applyMiddleware(store, [loggerAction, loggerState]);
    console.log('entry state', store.getState())
  }
  // 读取本地存储的数据 
  getState = () => {
    const data = localStorage.getItem("todo");
    return data ? JSON.parse(data) : {};
  }
  // 保存本地存储数据
  saveState = (data) => {
    localStorage.setItem("todo", JSON.stringify(data));
  }
  componentDidMount() {
    // 窗口关闭时保存数据
    window.onbeforeunload = () => {
      this.saveState(store.getState());
    };
  }
  render() {
    return <Provider store={store}>
      <App />
    </Provider>
  }
}