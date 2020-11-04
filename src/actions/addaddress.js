import {userConstants} from './actionTypes';
import {ADD_AND_UPDATE_API} from '../util/api';
import AsyncStorage from '@react-native-community/async-storage';
export const addAddressActions = {
  addAddressAction,
};

function addAddressAction(data) {
  return (dispatch) => {
    dispatch(request());
    return ADD_AND_UPDATE_API(data, 'add-address').then(
      (data) => {
        if (data.success) {
          dispatch(success(data));
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
    return {type: userConstants.ADD_ADDRESS_REQUEST};
  }
  function clear() {
    return {type: userConstants.CLEAR};
  }
  function success(user) {
    return {type: userConstants.ADD_ADDRESS_SUCCESS, user};
  }
  function failure(error) {
    return {type: userConstants.ADD_ADDRESS_FAILURE, error};
  }
}
