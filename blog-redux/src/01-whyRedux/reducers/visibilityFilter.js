import * as constant from '../actionType/constant';

const initialState = 'All';

const visibilityFilter = (state = initialState, action) => {
  switch (action.type) {
    case constant.SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter