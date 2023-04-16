import React from 'react'
import { bindActionCreators } from 'redux'
import TodoItem from './TodoItem';
import StoreContext from '../context'
import actions from '../actions'

const { deleteTodo, modifyTodo, toggleTodo } = actions.todo


class TodoList extends React.Component {
  static contextType = StoreContext

  constructor(props, context) {
    super(props)
    const storeState = context.getState()
    this.state = {
      ...storeState
    }
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

  onDeleteTodo = (id) => {
    const { dispatch } = this.context
    // dispatch(deleteTodo(id))
    // 或者 用bindActionCreators, 它返回一个函数
    bindActionCreators(deleteTodo, dispatch)(id)
  }

  onModifyTodo = (id, text) => {
    const { dispatch } = this.context
    dispatch(modifyTodo(id, text))
    // bindActionCreators(modifyTodo, dispatch)(id, text)
  }

  onToggleTodo = (id) => {
    const { dispatch } = this.context
    dispatch(toggleTodo(id))
    // bindActionCreators(toggleTodo, dispatch)(id)
  }

  componentDidMount() {
    const store = this.context
    this.unsubscribe = store.subscribe(() => {
      this.setState({
        ...store.getState(),
      })
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    const { todos = [], visibilityFilter } = this.state
    const filteredTodos = this.getVisibleTodos(todos, visibilityFilter)

    return (
      <React.Fragment>
        {filteredTodos.map(todo => (
          <TodoItem key={todo.id} {...todo} onDeleteTodo={this.onDeleteTodo}
            onModifyTodo={this.onModifyTodo} onToggleTodo={this.onToggleTodo} />
        ))}
      </React.Fragment>
    )
  }
}

export default TodoList