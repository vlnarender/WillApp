import {userConstants} from './actionTypes';
import RNRestart from 'react-native-restart';
import {USER_API} from '../util/api';
import AsyncStorage from '@react-native-community/async-storage';
import {useContext} from 'react';
export const loginActions = {
  loginUserAction,
  logOutAction,
  storeToken,
};
function logOutAction() {
  return {type: userConstants.LOGOUT_REQUEST};
}
function storeToken(user) {
  return (dispatch) => {
    dispatch({type: userConstants.TOKEN_RESTORE, user});
  };
}
function loginUserAction(data, navigation) {
  return (dispatch) => {
    dispatch(request());
    AsyncStorage.setItem(
      'UserType',
      parseInt(data.device_type) === 1 ? 'User' : 'Guest',
    );
    let path = parseInt(data.device_type) === 1 ? 'login' : 'guest/login';
    USER_API(data, path).then(
      (data) => {
        if (data.success) {
          //getValue()
          if (data.data.is_verified == 1) {
            dispatch(success(data));
            AsyncStorage.setItem('token', data.data.authorization_token);
            AsyncStorage.setItem('email', data.data.userdetails.email);
            AsyncStorage.setItem('verify', 'yes');
            dispatch(
              tokenStore({
                isSignOut: false,
                token: data.data.authorization_token,
              }),
            );
            // navigation.navigate('Drawer');
            // RNRestart.Restart();
          }
          if (data.data.is_verified == 0) {
            dispatch(success_verify(data));
            const id = data.data.userdetails.id;
            const length = data.data.userdetails.email.indexOf('@');
            const email = data.data.userdetails.email.slice(
              length - 2,
              length + 3,
            );
            AsyncStorage.setItem('userid', id.toString());
            AsyncStorage.setItem('email', email);
            navigation.navigate('Otp');
          } else {
            dispatch(success(data));
            AsyncStorage.setItem('token', data.data.authorization_token);
            AsyncStorage.setItem('email', data.data.userdetails.email);
            AsyncStorage.setItem('verify', 'yes');
            dispatch(
              tokenStore({
                isSignOut: false,
                token: data.data.authorization_token,
              }),
            );
            // navigation.navigate('Drawer');
            // RNRestart.Restart();
          }
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
    return {type: userConstants.LOGIN_REQUEST};
  }
  function clear() {
    return {type: userConstants.CLEAR};
  }
  function tokenStore(user) {
    return {type: userConstants.TOKEN_RESTORE, user};
  }
  function success(user) {
    return {type: userConstants.LOGIN_SUCCESS, user};
  }
  function success_verify(user) {
    return {type: userConstants.LOGIN_SUCCESS_VERIFY, user};
  }
  function failure(error) {
    return {type: userConstants.LOGIN_FAILURE, error};
  }
}
