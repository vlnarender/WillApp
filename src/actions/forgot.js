import {userConstants} from './actionTypes';
import {USER_API} from '../util/api';
import AsyncStorage from '@react-native-community/async-storage';
export const forgotActions = {
  forgotUserAction,
};

function forgotUserAction(data, navigation) {
  return (dispatch) => {
    dispatch(request());
    USER_API(data, 'user/set-new-password').then(
      (data) => {
        if (data.success) {
          //AsyncStorage.setItem('token',data.data.authorization_token)
          dispatch(success(data));
          navigation.navigate('Login');
        } else {
          dispatch(failure(data));
        }
        dispatch(clear());
      },
      (error) => {
        dispatch(failure(error));
        dispatch(clear());
      },
    );
  };

  function request() {
    return {type: userConstants.FORGOT_REQUEST};
  }
  function clear() {
    return {type: userConstants.CLEAR};
  }
  function success(user) {
    return {type: userConstants.FORGOT_SUCCESS, user};
  }
  function failure(error) {
    return {type: userConstants.FORGOT_FAILURE, error};
  }
}
