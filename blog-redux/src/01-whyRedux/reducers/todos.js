import * as constant from '../actionType/constant';

const initialState = []

const todos = (state = initialState, action) => {
  switch (action.type) {
    case constant.ADD_TODO:
      // 返回newState，不要修改原有state
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case constant.DELETE_TODO:
      return state.filter(todo => todo.id !== action.id)
    case constant.MODIFY_TODO:
      return state.map(todo => (todo.id === action.id) ? { ...todo, text: action.text } : todo)
    // 切换完成状态
    case constant.TOGGLE_TODO:
      return state.map(todo => (todo.id === action.id) ? { ...todo, completed: !todo.completed } : todo)
    case constant.CLEAR_TODO:
      return []
    default:
      return state
  }
}

export default todos