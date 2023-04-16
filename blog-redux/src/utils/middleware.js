import { getFormatDateTime } from './helpers'

// logger中间件，打印action和更新前后的state
export const logger = (store) => (dispatch) => (action) => {
  console.group(`%caction %c${action.type} %c@ ${getFormatDateTime()}`,
    'color: #808080;', 'color: #303942; font-weight: 600;', 'color: #808080;');
  console.log('%cprev state', 'color: #a0a0a0; font-weight: 900;', store.getState());
  console.log('%caction', 'color: #00a8f7; font-weight: 900;', action)
  dispatch(action);
  console.log('%cnext state', 'color: #47b04b; font-weight: 900;', store.getState());
  console.groupEnd()
};