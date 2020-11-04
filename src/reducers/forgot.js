import {userConstants} from '../actions/actionTypes';
// import {AsyncStorage} from 'react-native';

const initialState = {
  forgotData: {},
  loading: false,
  //isSignout: false,
  //userToken: null,
  forgotError: '',
  forgotMessage: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case userConstants.FORGOT_REQUEST:
      return {
        loading: true,
      };
    case userConstants.FORGOT_SUCCESS:
      return {
        ...state,
        forgotData: action.user.data,
        loading: false,
        //showOtp: true,
        //userToken: action.user.accessToken,
        forgotMessage: action.user.message,
      };

    /*  case userConstants.TOKEN_RESTORE:
      return {
        ...state,
        userData: state.userData,
        userToken: action.token,
      };

    case userConstants.LOGOUT_REQUEST:
      return {
        ...state,
        userData: '',
        loading: false,
        showOtp: true,
        userToken: '',
      }; */
    case userConstants.FORGOT_FAILURE:
      return {
        ...state,
        forgotError: action.error.message,
        loading: false,
      };
    case userConstants.CLEAR:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}
