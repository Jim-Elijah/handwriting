import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers'
import App from './components/App'
import { logger } from './utils'

let store
let initialState = {
  todos: [],
  visibilityFilter: 'SHOW_ALL',
}

export default class APP extends React.Component {
  constructor(props) {
    super(props)
    // store = createStore(reducer, this.getFromStorage() || initialState)
    store = createStore(reducer, this.getFromStorage() || initialState, applyMiddleware(logger))
    // store = applyMiddleware(logger)(createStore)(reducer, this.getFromStorage() || initialState)
  }
  // 读取本地存储的数据 
  getFromStorage = () => {
    const data = localStorage.getItem("todos");
    return data ? JSON.parse(data) : null;
  }
  // 保存数据到本地存储
  save2Storage = (data) => {
    localStorage.setItem("todos", JSON.stringify(data));
  }

  unloadCallback = () => {
    console.log('beforeunload cb', store.getState())
    this.save2Storage(store.getState());
  }
  componentDidMount() {
    // 刷新、窗口关闭时保存数据
    window.addEventListener('beforeunload', this.unloadCallback)
  }
  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.unloadCallback)
  }
  render() {
    return <Provider store={store}>
      <App />
    </Provider>
  }
}