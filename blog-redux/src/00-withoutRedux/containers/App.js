import React from 'react'
import AddTodo from './AddTodo'
import TodoList from '../components/TodoList'
import Footer from '../components/Footer'
import FetchDemo from './FetchDemo'

const App = ({ todos, visibilityFilter, fetchData, onFetch, onAddTodo, onDeleteTodo, onModifyTodo,
  onToggleTodo, onClearTodo, onFilterClick }) => (
  <div className='todo-list'>
    <AddTodo onAddTodo={onAddTodo} onClearTodo={onClearTodo} isEmpty={!todos.length} />
    <FetchDemo {...fetchData} onFetch={onFetch} />
    <TodoList todos={todos} onDeleteTodo={onDeleteTodo} onModifyTodo={onModifyTodo}
      onToggleTodo={onToggleTodo} />
    <Footer visibilityFilter={visibilityFilter} onFilterClick={onFilterClick} />
  </div>
)

export default App