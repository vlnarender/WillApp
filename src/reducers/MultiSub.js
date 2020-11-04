import {userConstants} from '../actions/actionTypes';

const initialState = {
  multiSubData: {},
  loading: false,
  multiSubStatus: false,
  multiSubError: '',
  multiSubMessage: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case userConstants.MULTI_SUB_REQUEST:
      return {
        loading: true,
      };
    case userConstants.MULTI_SUB_SUCCESS:
      return {
        ...state,
        multiSubData: action.user.data,
        loading: false,
        multiSubStatus: true,
        multiSubMessage: action.user.message,
      };
    case userConstants.MULTI_SUB_FAILURE:
      return {
        ...state,
        multiSubError: action.error.message,
        loading: false,
        multiSubStatus: false,
      };
    default:
      return state;
  }
}
