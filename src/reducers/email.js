import {userConstants} from '../actions/actionTypes';
// import {AsyncStorage} from 'react-native';

const initialState = {
  emailData: {},
  loading: false,
  //isSignout: false,
  //userToken: null,
  emailError: '',
  emailMessage: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case userConstants.EMAIL_REQUEST:
      return {
        loading: true,
      };
    case userConstants.EMAIL_SUCCESS:
      return {
        ...state,
        emailData: action.user.data,
        loading: false,
        //showOtp: true,
        //userToken: action.user.accessToken,
        emailMessage: action.user.message,
      };
    case userConstants.EMAIL_SENT_SUCCESS:
      return {
        ...state,
        emailData: action.user.data,
        loading: false,
        //showOtp: true,
        //userToken: action.user.accessToken,
        emailMessage: 'Please try after sometime',
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
    case userConstants.EMAIL_FAILURE:
      return {
        ...state,
        emailError: action.error.message,
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
