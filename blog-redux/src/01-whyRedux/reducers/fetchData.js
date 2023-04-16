import * as constant from '../actionType/constant';

const initialState = {
  isFetching: false,
  data: null,
  err: null,
}

const fetchData = (state = initialState, action) => {
  switch (action.type) {
    case constant.FETCHING_DATA:
      return {
        ...state,
        isFetching: true,
        data: null,
        err: null,
      }
    case constant.FETCHING_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data,
        err: null,
      }
    case constant.FETCHING_ERROR:
      return {
        ...state,
        isFetching: false,
        data: null,
        err: action.err
      }
    default:
      return state
  }
}

export default fetchData