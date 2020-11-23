import {userConstants} from './actionTypes';
import {USER_API} from '../util/api';
import AsyncStorage from '@react-native-community/async-storage';
export const loginActions = {
  loginUserAction,
};
/* const getValue = async () => {
  try {
    const token=await AsyncStorage.getItem('token')
    const userid=await AsyncStorage.getItem('userid')
  } catch(e) {
    //  error
    console.error(e)
  }
} */
function loginUserAction(data, navigation) {
  return (dispatch) => {
    dispatch(request());
    AsyncStorage.setItem(
      'UserType',
      parseInt(data.device_type) === 1 ? 'User' : 'Guest',
    );

    let path = parseInt(data.device_type) === 1 ? 'login' : 'guest/login';
    console.log(data, path);

    USER_API(data, path).then(
      (data) => {
        console.log(JSON.stringify(data));
        if (data.success) {
          //getValue()
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
            navigation.navigate('Drawer');
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
