/* eslint-disable import/no-anonymous-default-export */
import * as constant from '../actionType/constant';
export default {
  setVisibilityFilter: filter => {
    return {
      type: constant.SET_VISIBILITY_FILTER,
      filter
    }
  }
}