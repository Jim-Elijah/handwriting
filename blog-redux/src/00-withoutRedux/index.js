import React from 'react'
import App from './containers/App'
import Loading from '../common/components/Loading'
import { mockFetch, getFromStorage, save2Storage } from '../utils/helpers'
import { initialState, storageKey, description } from './constant'

export default class WhyRedux extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ...initialState,
    }
  }

  unloadCallback = () => {
    save2Storage(storageKey, this.state);
  }

  componentDidMount() {
    const storage = getFromStorage(storageKey)
    if (storage) {
      this.setState({
        ...storage
      })
    }
    // 刷新、窗口关闭时保存数据
    window.addEventListener('beforeunload', this.unloadCallback)
  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.unloadCallback)
  }

  addTodoHandler = (text) => {
    this.setState({
      todos: this.state.todos.concat({
        id: parseInt(Math.random().toString().slice(-5)),
        text,
        completed: false
      })
    })
  }

  deleteTodoHandler = (id) => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
  }

  modifyTodoHandler = (id, text) => {
    this.setState({
      todos: this.state.todos.map(todo => todo.id === id ? { ...todo, text } : todo)
    })
  }

  toggleTodoHandler = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
    })
  }

  clearTodoHandler = () => {
    this.setState({
      todos: []
    })
  }

  // 修改过滤条件
  setFilterHandler = (visibilityFilter) => {
    this.setState({
      visibilityFilter,
    })
  }

  // 根据过滤条件返回todos
  getVisibleTodos = (todos, filter) => {
    switch (filter) {
      case 'Completed':
        return todos.filter(t => t.completed)
      case 'Active':
        return todos.filter(t => !t.completed)
      case 'All':
      default:
        return todos
    }
  }

  onFetchHandler = () => {
    const { fetchData } = this.state
    this.setState({
      fetchData: {
        ...fetchData,
        isFetching: true,
        data: null,
        err: null,
      }
    })
    mockFetch(500)
      .then(data => {
        this.setState({
          fetchData: { ...fetchData, isFetching: false, data, err: null }
        })
      })
      .catch(err => {
        this.setState({
          fetchData: { ...fetchData, isFetching: false, data: null, err }
        })
      })
  }

  render() {
    const { todos, visibilityFilter, fetchData } = this.state
    const filteredTodos = this.getVisibleTodos(todos, visibilityFilter)
    const { isFetching } = fetchData
    return <>
      <h2>withoutRedux</h2>
      <p className='description'>{description}</p>
      <App
        todos={filteredTodos}
        visibilityFilter={visibilityFilter}
        fetchData={fetchData}
        onFetch={this.onFetchHandler}
        onAddTodo={this.addTodoHandler}
        onDeleteTodo={this.deleteTodoHandler}
        onModifyTodo={this.modifyTodoHandler}
        onToggleTodo={this.toggleTodoHandler}
        onClearTodo={this.clearTodoHandler}
        onFilterClick={this.setFilterHandler} />
      {!!isFetching && <Loading />}
      <hr />
    </>
  }
}