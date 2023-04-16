import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from '../lib/react-redux'
import { mockFetch } from '../../utils/helpers'
import actions from '../actions'

const { fetchData, fetchSuccess, fetchError } = actions.fetchData

const onFetch = () => (dispatch, getState, rest) => {
  dispatch(fetchData())
  return mockFetch(1000)
    // .then(data => dispatch(fetchSuccess(data)))
    .then(bindActionCreators(fetchSuccess, dispatch))
    .catch(err => dispatch(fetchError(err)))
}

class FetchDemo extends React.Component {
  render() {
    const { isFetching, data, err, onFetch } = this.props
    console.log('fetch demo props', this.props)
    return (
      <div className='fetch-demo'>
        <button className='btn' disabled={isFetching} onClick={onFetch}>fetch</button>
        <span className='fetch-wrapper'>fetch结果: <span className='fetch-res'>{data ? data : err ? err : ''}</span></span>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    ...state.fetchData,
  }
}

// 不使用bindActionCreators
// const mapDispatchToProps = dispatch => {
//   return {
//     onFetch: () => {
//       dispatch(onFetch())
//     },
//   }
// }

// 使用bindActionCreators
const mapDispatchToProps = dispatch => {
  return {
    onFetch: bindActionCreators(onFetch, dispatch)
  }
}


// connect 高阶组件 ，将 state和dispatch 作为 props 注入到 AddTodo 组件中
FetchDemo = connect(mapStateToProps, mapDispatchToProps)(FetchDemo)

export default FetchDemo