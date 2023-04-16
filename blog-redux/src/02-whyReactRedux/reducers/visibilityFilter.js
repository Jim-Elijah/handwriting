import * as constant from '../actionType/constant';
import { createReducer } from '../../utils/helpers';

const initialState = 'All';

export default createReducer(initialState, {
  [constant.SET_VISIBILITY_FILTER]: (state, action) => action.filter || initialState
})
