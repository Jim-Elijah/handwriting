/* eslint-disable import/no-anonymous-default-export */
import * as constant from '../actionType/constant';

export default {
  addTodo: text => {
    return {
      type: constant.ADD_TODO,
      id: parseInt(Math.random().toString().slice(-5)),
      text
    }
  },
  deleteTodo: id => {
    return {
      type: constant.DELETE_TODO,
      id
    }
  },
  modifyTodo: (id, text) => {
    return {
      type: constant.MODIFY_TODO,
      id,
      text
    }
  },
  toggleTodo: id => {
    return {
      type: constant.TOGGLE_TODO,
      id
    }
  },
  clearTodo: () => {
    return {
      type: constant.CLEAR_TODO,
    }
  },
};
