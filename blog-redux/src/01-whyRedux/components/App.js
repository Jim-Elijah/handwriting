import React from 'react'
import AddTodo from '../containers/AddTodo'
import TodoList from '../components/TodoList'
import Footer from './Footer'
import FetchDemo from '../containers/FetchDemo'
import Loading from '../../common/components/Loading'
import StoreContext from '../context'

class App extends React.Component {
  static contextType = StoreContext

  constructor(props, context) {
    super(props)
    const storeState = context.getState()
    this.state = {
      isFetching: storeState.fetchData.isFetching
    }
  }

  componentDidMount() {
    const store = this.context
    this.unsubscribe = store.subscribe(() => {
      const storeState = store.getState()
      this.setState({
        isFetching: storeState.fetchData.isFetching
      })
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    const { isFetching } = this.state
    return <div className='todo-list'>
      <AddTodo />
      <FetchDemo />
      <TodoList />
      <Footer />
      {!!isFetching && <Loading />}
    </div>
  }
}

export default App