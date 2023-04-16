import * as constant from '../actionType/constant';
import { createReducer } from '../../utils/helpers';

const initialState = {
  isFetching: false,
  data: null,
  err: null,
}

export default createReducer(initialState, {
  [constant.FETCHING_DATA]: (state, action) => {
    return {
      ...state,
      isFetching: true,
      data: null,
      err: null,
    }
  },
  [constant.FETCHING_SUCCESS]: (state, action) => {
    return {
      ...state,
      isFetching: false,
      data: action.data,
      err: null
    }
  },
  [constant.FETCHING_ERROR]: (state, action) => {
    return {
      ...state,
      isFetching: false,
      data: null,
      err: action.err
    }
  },
});