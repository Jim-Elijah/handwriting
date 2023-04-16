import * as constant from '../actionType/constant';
import createReducer from '../utils/createReducer';

const initialState = 'SHOW_ALL';

export default createReducer(initialState, {
  [constant.SET_VISIBILITY_FILTER]: (state, action) => action.filter || initialState
})
