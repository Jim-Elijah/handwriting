import React from 'react'
// import { Provider } from 'react-redux'
import { Provider } from './lib/react-redux'
import { createStore, applyMiddleware } from './lib/redux'
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
    const storage = this.getFromStorage()
    const preState = JSON.stringify(storage) !== '{}' ? storage : initialState
    console.log('preState', storage, preState)
    // store = createStore(reducer, preState, applyMiddleware(logger))
    store = applyMiddleware(logger)(createStore)(reducer, preState)
    console.log('store', store, JSON.stringify(store.getState()));
  }
  // 读取本地存储的数据 
  getFromStorage = () => {
    const data = localStorage.getItem("my-todos");
    return data ? JSON.parse(data) : {};
  }
  // 保存数据到本地存储
  save2Storage = (data) => {
    localStorage.setItem("my-todos", JSON.stringify(data));
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