import React from 'react'
import { bindActionCreators } from 'redux'
import actions from '../actions'
import StoreContext from '../context'

const { addTodo, clearTodo } = actions.todo

class AddTodo extends React.Component {
  static contextType = StoreContext

  constructor(props, context) {
    super(props)
    const storeState = context.getState()
    this.state = {
      isEmpty: !storeState.todos.length
    }
  }

  onAddTodo = (text) => {
    const { dispatch } = this.context
    // dispatch(addTodo(text))
    // 或者 用bindActionCreators, 它返回一个函数
    bindActionCreators(addTodo, dispatch)(text)
  }

  onClearTodo = () => {
    const { dispatch } = this.context
    dispatch(clearTodo())
    // bindActionCreators(clearTodo, dispatch)()
  }

  componentDidMount() {
    const store = this.context
    this.unsubscribe = store.subscribe(() => {
      const storeState = store.getState()
      this.setState({
        isEmpty: !storeState.todos.length
      })
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    const { isEmpty } = this.state
    let input
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault()
            if (!input.value.trim()) {
              return
            }
            this.onAddTodo(input.value)
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
            if (!isEmpty) { this.onClearTodo() }
          }}>清空缓存</button>
        </form>
      </div>
    )
  }
}

export default AddTodo