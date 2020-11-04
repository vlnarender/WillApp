import {userConstants} from './actionTypes';
import {ADD_AND_UPDATE_API} from '../util/api';
import AsyncStorage from '@react-native-community/async-storage';
export const addressSetActions = {
  addressSetAction,
};

function addressSetAction(add, data, navigation) {
  return (dispatch) => {
    dispatch(request());
    return ADD_AND_UPDATE_API(data, 'update-address').then(
      (data) => {
        if (data.success) {
          dispatch(success(data));
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
    return {type: userConstants.ADDRESS_SET_REQUEST};
  }
  function success(user) {
    return {type: userConstants.ADDRESS_SET_SUCCESS, user};
  }
  function failure(error) {
    return {type: userConstants.ADDRESS_SET_FAILURE, error};
  }
}
