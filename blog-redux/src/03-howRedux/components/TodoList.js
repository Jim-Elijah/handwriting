import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem';


class TodoList extends React.Component {
  render() {
    const { todos = [], onDeleteTodo, onModifyTodo, onToggleTodo } = this.props
    return (
      <React.Fragment>
        {todos.map(todo => (
          <TodoItem key={todo.id} {...todo} onDeleteTodo={onDeleteTodo}
            onModifyTodo={onModifyTodo} onToggleTodo={onToggleTodo} />
        ))}
      </React.Fragment>
    )
  }
}

// const TodoList = ({ todos = [], onDeleteTodo, onModifyTodo, onToggleTodo }) => {
//   return (
//     <React.Fragment>
//       {todos.map(todo => (
//         <TodoItem key={todo.id} {...todo} onDeleteTodo={onDeleteTodo}
//           onModifyTodo={onModifyTodo} onToggleTodo={onToggleTodo} />
//       ))}
//     </React.Fragment>
//   )
// }

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
  onModifyTodo: PropTypes.func.isRequired,
  onToggleTodo: PropTypes.func.isRequired
}

export default TodoList