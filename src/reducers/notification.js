import {userConstants} from '../actions/actionTypes';

const initialState = {
  notificationData: [],
  active_notification: 0,
  notificationStatus: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case userConstants.NOTIFICATION_REQUEST:
      return {
        ...state,
        notificationStatus: false,
      };
    case userConstants.NOTIFICATION_SUCCESS:
      return {
        ...state,
        notificationData: action.data,
        notificationStatus: true,
      };
    case userConstants.NOTIFICATION_FAILURE:
      return {
        ...state,
        notificationStatus: false,
      };
    default:
      return state;
  }
}
