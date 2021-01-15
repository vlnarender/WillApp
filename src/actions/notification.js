import {userConstants} from './actionTypes';
import {GET_API} from '../util/api';
export const notificationActions = {
  notificationAction,
};

function notificationAction() {
  return (dispatch) => {
    dispatch(request());
    return GET_API('my/notification-list').then(
      (data) => {
        console.log('pn', data);
        if (data.success) {
          console.log('pn', data.data);
          dispatch(success(data.data));
        } else {
          dispatch(failure(data));
        }
      },
      (error) => {
        dispatch(failure(error));
      },
    );
  };

  function request() {
    return {type: userConstants.NOTIFICATION_REQUEST};
  }
  function success(data) {
    return {type: userConstants.NOTIFICATION_SUCCESS, data};
  }
  function failure(error) {
    return {type: userConstants.NOTIFICATION_FAILURE, error};
  }
}
