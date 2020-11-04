import {userConstants} from '../actions/actionTypes';
// import {AsyncStorage} from 'react-native';

const initialState = {
  otpData: {},
  loading: false,
  //isSignout: false,
  //userToken: null,
  otpError: '',
  otpMessage: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case userConstants.VERIFY_OTP_REQUEST:
      return {
        loading: true,
      };
    case userConstants.VERIFY_OTP_SUCCESS:
      return {
        ...state,
        otpData: action.user.data,
        loading: false,
        //showOtp: true,
        //userToken: action.user.accessToken,
        otpMessage: action.user.message,
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
    case userConstants.VERIFY_OTP_FAILURE:
      return {
        ...state,
        otpError: action.error.message,
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
