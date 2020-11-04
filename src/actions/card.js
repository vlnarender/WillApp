import {userConstants} from './actionTypes';
import {GET_API} from '../util/api';
import AsyncStorage from '@react-native-community/async-storage';
export const cardActions = {
  cardAction,
};

function cardAction(data, navigation) {
  return (dispatch) => {
    dispatch(request());
    GET_API('creditcard/list').then(
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
    return {type: userConstants.CARD_REQUEST};
  }
  function success(user) {
    return {type: userConstants.CARD_SUCCESS, user};
  }
  function failure(error) {
    return {type: userConstants.CARD_FAILURE, error};
  }
}
