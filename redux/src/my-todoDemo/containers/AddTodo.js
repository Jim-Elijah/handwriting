import React from 'react'
// import { connect } from 'react-redux'
import { connect } from '../lib/react-redux'

import { bindActionCreators } from 'redux'
import actions from '../actions'

const { addTodo, clearTodo } = actions.todo


class AddTodo extends React.Component {
  render() {
    const { onAddTodo, onClearTodo, isEmpty } = this.props
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
}
// 函数组件，接收 props 参数
// let AddTodo = ({ onAddTodo, onClearTodo, isEmpty }) => {
//   let input
//   return (
//     <div>
//       <form
//         onSubmit={e => {
//           e.preventDefault()
//           if (!input.value.trim()) {
//             return
//           }
//           onAddTodo(input.value)
//           input.value = ''
//         }}
//       >
//         <input
//           ref={node => {
//             input = node
//           }}
//         />
//         <button type="submit" className='btn'>
//           添加
//         </button>
//         <button className='btn' onClick={() => {
//           if (!isEmpty) { onClearTodo() }
//         }}>清空缓存</button>
//       </form>
//     </div>
//   )
// }

const mapStateToProps = state => {
  console.log('my-todo: addtodo mapStateToProps', state)
  return {
    isEmpty: !(Array.isArray(state.todos) && state.todos.length),
  }
}

// 不使用bindActionCreators
// const mapDispatchToProps = dispatch => {
//   return {
//     onAddTodo: (id, text) => {
//       dispatch(addTodo(id, text))
//     },
//     onClearTodo: () => {
//       dispatch(clearTodo())
//     },
//   }
// }

// 使用bindActionCreators
const mapDispatchToProps = dispatch => {
  return {
    onAddTodo: bindActionCreators(addTodo, dispatch),
    onClearTodo: bindActionCreators(clearTodo, dispatch),
  }
}


// connect 高阶组件 ，将 state和dispatch 作为 props 注入到 AddTodo 组件中
AddTodo = connect(mapStateToProps, mapDispatchToProps)(AddTodo)

export default AddTodo