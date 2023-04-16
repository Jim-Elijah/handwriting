import React from 'react'
import { Provider } from './lib/react-redux'
import App from './components/App'
import store from './store'
import { save2Storage } from '../utils/helpers'
import { storageKey, description } from './constant'

export default class FinalEdition extends React.Component {
  unloadCallback = () => {
    save2Storage(storageKey, store.getState());
  }
  componentDidMount() {
    // 刷新、窗口关闭时保存数据
    window.addEventListener('beforeunload', this.unloadCallback)
  }
  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.unloadCallback)
  }
  render() {
    console.log(' finial store', store.getState())
    return <Provider store={store}>
      <h2>FinalEdition</h2>
      <p>{description}</p>
      <App />
    </Provider>
  }
}