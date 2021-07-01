import * as constant from '../actionType/constant';
import { createReducer } from '../lib/redux';

const initialState = 'SHOW_ALL';

export default createReducer(initialState, {
  [constant.SET_VISIBILITY_FILTER]: (state, action) => action.filter
})
