import {userConstants} from './actionTypes';
import {USER_API} from '../util/api';
import AsyncStorage from '@react-native-community/async-storage';
export const loginActions = {
  loginUserAction,
  logOutAction,
};
function logOutAction() {
  return {type: userConstants.LOGOUT_REQUEST};
}
const commonAction = (data, navigation) => {
  AsyncStorage.setItem(
    'AllowLocation',
    JSON.stringify(data.userdetails.is_location_allow),
  );
  AsyncStorage.setItem(
    'Notification',
    JSON.stringify(data.userdetails.is_receive_notification),
  );
  AsyncStorage.setItem(
    'ReceiveOffer',
    JSON.stringify(data.userdetails.is_receive_special_offer),
  );
  AsyncStorage.setItem('token', data.authorization_token);
  AsyncStorage.setItem('email', data.userdetails.email);
  AsyncStorage.setItem('verify', 'yes');
  AsyncStorage.setItem('User_id', data.userdetails.id.toString());
  navigation.navigate('Drawer');
};

function loginUserAction(data, navigation) {
  return async (dispatch) => {
    dispatch(request());
    let userType = await AsyncStorage.getItem('UserType');
    console.log(userType);
    let path = parseInt(data.device_type) === 1 ? 'login' : 'guest/login';
    if (userType === 'Guest') {
      path = 'loginwithcredential';
      data = {...data, guest_id: await AsyncStorage.getItem('User_id')};
    }
    AsyncStorage.setItem(
      'UserType',
      parseInt(data.device_type) === 1 ? 'User' : 'Guest',
    );
    console.log(data);
    USER_API(data, path).then(
      (data) => {
        if (data.success) {
          console.log(data);
          if (data.data.is_verified == 1) {
            dispatch(success(data));
            commonAction(data.data, navigation);
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
            commonAction(data.data, navigation);
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
