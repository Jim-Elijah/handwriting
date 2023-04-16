import React from 'react'

// 函数组件，接收 props 参数
const AddTodo = ({ onAddTodo, onClearTodo, isEmpty }) => {
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
        <button type="submit" className='btn'>
          添加
        </button>
        <button className='btn' onClick={() => {
          if (!isEmpty) { onClearTodo() }
        }}>清空缓存</button>
      </form>
    </div>
  )
}

export default AddTodo