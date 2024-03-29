import React from 'react'
import PropTypes from 'prop-types'

class TodoItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isEditable: false
    }
  }
  render() {
    const { id, completed, text, onDeleteTodo, onToggleTodo } = this.props
    let spanEle = <span style={{ textDecoration: completed ? 'line-through' : 'none', cursor: 'pointer' }}
      onClick={this.modifyHandler}>
      {text}
    </span>
    let inputEle = <input ref={input => this.inputRef = input} defaultValue={text} onBlur={this.blurHandler}
      onKeyDown={this.enterHandler} />

    return <div className='todoItem'>
      <input type="checkbox" style={{ margin: '5px' }} checked={completed}
        onChange={() => onToggleTodo(id)} />
      {this.state.isEditable ? inputEle : spanEle}
      <button style={{ marginLeft: '5px' }} onClick={() => onDeleteTodo(id)}>删除</button>
    </div>
  }
  
  enterHandler = (e) => {
    const { id, onModifyTodo } = this.props
    if (e.keyCode === 13) {
      this.setState({
        isEditable: false
      })
      onModifyTodo(id, e.target.value);
    }
  }
  modifyHandler = () => {
    this.setState({
      isEditable: true
    }, () => {
      // 选中所有文本，注意要放在回调中，setState异步更新
      this.inputRef.select()
    })
  }
  blurHandler = (e) => {
    const { id, onModifyTodo } = this.props
    this.setState({
      isEditable: false
    })
    onModifyTodo(id, e.target.value);
  }
}
TodoItem.propTypes = {
  onDeleteTodo: PropTypes.func.isRequired,
  onModifyTodo: PropTypes.func.isRequired,
  onToggleTodo: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}
export default TodoItem
