import React from 'react'
import App from './components/App'
import store from './store'
import StoreContext from './context'
import { save2Storage } from '../utils/helpers'
import { storageKey, description } from './constant'

export default class WhyRedux extends React.Component {
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
    return <StoreContext.Provider value={store}>
      <h2>WhyRedux</h2>
      <p className='description'>{description}</p>
      <App />
      <hr />
    </StoreContext.Provider>
  }
}