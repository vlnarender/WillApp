import {userConstants} from '../actions/actionTypes';
// import {AsyncStorage} from 'react-native';

const initialState = {
  forgototpData: {},
  loading: false,
  //isSignout: false,
  //userToken: null,
  forgototpError: '',
  forgototpMessage: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case userConstants.FORGOT_OTP_REQUEST:
      return {
        loading: true,
      };
    case userConstants.FORGOT_OTP_SUCCESS:
      return {
        ...state,
        forgototpData: action.user.data,
        loading: false,
        //showOtp: true,
        //userToken: action.user.accessToken,
        forgototpMessage: action.user.message,
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
    case userConstants.FORGOT_OTP_FAILURE:
      return {
        ...state,
        forgototpError: action.error.message,
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
