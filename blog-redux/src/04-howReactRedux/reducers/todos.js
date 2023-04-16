import * as constant from '../actionType/constant';
import { createReducer } from '../../utils/helpers';

const initialState = []

export default createReducer(initialState, {
  [constant.ADD_TODO]: (state, action) => {
    return [
      ...state,
      {
        id: action.id,
        text: action.text,
        completed: false
      }
    ]
  },
  [constant.DELETE_TODO]: (state, action) => {
    return state.filter(todo =>
      todo.id !== action.id
    )
  },
  [constant.MODIFY_TODO]: (state, action) => {
    return state.map(todo =>
      (todo.id === action.id) ? { ...todo, text: action.text } : todo
    )
  },
  [constant.TOGGLE_TODO]: (state, action) => {
    return state.map(todo =>
      (todo.id === action.id)
        ? { ...todo, completed: !todo.completed }
        : todo
    )
  },
  [constant.CLEAR_TODO]: (state, action) => {
    return []
  },
});