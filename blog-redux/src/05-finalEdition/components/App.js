import React from 'react'
import { connect } from '../lib/react-redux'
import { bindActionCreators } from '../lib/redux'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Footer from './Footer'
import FetchDemo from '../containers/FetchDemo'
import Loading from '../../common/components/Loading'

let App = ({ isFetching }) => (
  <div className='todo-list'>
    <AddTodo />
    <FetchDemo />
    <VisibleTodoList />
    <Footer />
    {!!isFetching && <Loading />}
  </div>
)

// class App extends React.Component {
//   render() {
//     const { isFetching } = this.props

//     return <div className='todo-list'>
//       <AddTodo />
//       <FetchDemo />
//       <VisibleTodoList />
//       <Footer />
//       {!!isFetching && <Loading />}
//     </div>
//   }
// }

const mapStateToProps = state => {
  return {
    isFetching: state.fetchData.isFetching,
  }
}

// 使用bindActionCreators
const mapDispatchToProps = dispatch => {
  return {}
}

// connect 高阶组件 ，将 state和dispatch 作为 props 注入到 AddTodo 组件中
App = connect(mapStateToProps, mapDispatchToProps)(App)

export default App