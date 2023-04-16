import { connect } from 'react-redux'
import actions from '../actions'
import TodoList from '../components/TodoList'

const { deleteTodo, modifyTodo, toggleTodo } = actions.todo

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    case 'SHOW_ALL':
    default:
      return todos
  }
}

const mapStateToProps = state => {
  return {
    // 根据完成状态，筛选数据
    todos: getVisibleTodos(state.todos, state.visibilityFilter),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onDeleteTodo: id => {
      dispatch(deleteTodo(id))
    },
    onModifyTodo: (id, text) => {
      dispatch(modifyTodo(id, text))
    },
    onToggleTodo: id => {
      dispatch(toggleTodo(id))
    },
  }
}

// const mapDispatchToProps = {
//   onDeleteTodo: (id) => deleteTodo(id),
//   onModifyTodo: (id, text) => modifyTodo(id, text),
//   onToggleTodo: id => toggleTodo(id),
// }

// connect 高阶组件，将 state 和 dispatch 注入到组件 props 中
const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList