import React from 'react'
// import { connect } from 'react-redux'
import { connect } from '../lib/react-redux'
import actions from '../actions'

const { addTodo, clearTodo } = actions.todo

// 函数组件，接收 props 参数
let AddTodo = ({ onAddTodo, onClearTodo }) => {
  let input
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          onAddTodo(input.value)
          input.value = ''
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button type="submit">
          Add Todo
        </button>
        <button style={{ marginLeft: '10px' }} onClick={() => onClearTodo()}>清空缓存</button>
      </form>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    // todos: state.todos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddTodo: (id, text) => {
      dispatch(addTodo(id, text))
    },
    onClearTodo: () => {
      dispatch(clearTodo())
    },
  }
}

// connect 高阶组件 ，将 dispatch 作为 props 注入到 AddTodo 组件中
AddTodo = connect(mapStateToProps, mapDispatchToProps)(AddTodo)

export default AddTodo