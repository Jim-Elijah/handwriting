import React from 'react'
import { bindActionCreators } from 'redux'
import { mockFetch } from '../../utils/helpers'
import actions from '../actions'
import StoreContext from '../context'

const { fetchData, fetchSuccess, fetchError } = actions.fetchData

class FetchDemo extends React.Component {
  static contextType = StoreContext

  constructor(props, context) {
    super(props)
    const storeState = context.getState()
    this.state = {
      ...storeState.fetchData
    }
  }

  asyncFetch = () => (dispacth, getState, rest) => {
    // dispacth(fetchData())
    bindActionCreators(fetchData, dispacth)()
    return mockFetch(1000)
      .then(data => dispacth(fetchSuccess(data)))
      .catch(err => dispacth(fetchError(err)))
  }

  onFetchHandler = () => {
    const { dispatch } = this.context
    dispatch(this.asyncFetch())
  }

  componentDidMount() {
    const store = this.context
    this.unsubscribe = store.subscribe(() => {
      const storeState = store.getState()
      this.setState({
        ...storeState.fetchData
      })
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    const { isFetching, data, err } = this.state
    return (
      <div className='fetch-demo'>
        <button className='btn' disabled={isFetching} onClick={this.onFetchHandler}>fetch</button>
        <span className='fetch-wrapper'>fetch结果: <span className='fetch-res'>{data ? data : err ? err : ''}</span></span>
      </div>
    )
  }
}

export default FetchDemo
