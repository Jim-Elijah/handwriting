import React from 'react'

class FetchDemo extends React.Component {
  render() {
    const { isFetching, data, err, onFetch } = this.props
    return (
      <div className='fetch-demo'>
        <button className='btn' disabled={isFetching} onClick={onFetch}>fetch</button>
        <span className='fetch-wrapper'>fetch结果: <span className='fetch-res'>{data ? data : err ? err : ''}</span></span>
      </div>
    )
  }
}

export default FetchDemo
