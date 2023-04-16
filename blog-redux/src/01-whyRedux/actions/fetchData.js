/* eslint-disable import/no-anonymous-default-export */
import * as constant from '../actionType/constant';

export default {
  fetchData: () => {
    return {
      type: constant.FETCHING_DATA,
    }
  },
  fetchSuccess: (data) => {
    return {
      type: constant.FETCHING_SUCCESS,
      data,
    }
  },
  fetchError: (err) => {
    return {
      type: constant.FETCHING_ERROR,
      err,
    }
  }
}