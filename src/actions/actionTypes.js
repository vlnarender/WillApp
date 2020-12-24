export const LOGIN = 'LOGIN';
export const LOGIN_IS_LOADING = 'LOGIN_IS_LOADING';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const SAVE_USER_INFO = 'SAVE_USER_INFO';
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const ADD_TO_CART = 'ADD_TO_CART';
export const EMPTY_CART = 'EMPTY_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const ADD_ORDER = 'ADD_ORDER';
export const UPDATE_CARD_ITEM_COUNT = 'UPDATE_CARD_ITEM_COUNT';
export const FETCH_FROM_CART = 'FETCH_FROM_CART';

export const LOGIN_REQUEST = 'USERS_LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'USERS_LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'USERS_LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

export const userConstants = {
  CLEAR: 'CLEAR',
  LOGOUT: 'LOGOUT',
  REGISTERATION_CLICKED: 'REGISTERATION_CLICKED',

  MEAL_LIST_REQUEST: 'MEAL_LIST_REQUEST',
  MEAL_LIST_SUCCESS: 'MEAL_LIST_SUCCESS',
  MEAL_LIST_FAILURE: 'MEAL_LIST_FAILURE',

  MULTI_SUB_WEEK: 'MULTI_SUB_WEEK',
  MULTI_SUB_LIST_ITEMS: 'MULTI_SUB_LIST_ITEMS',
  MULTI_SUB_SELECTED_WEEK: 'MULTI_SUB_SELECTED_WEEK',
  MULTI_SUB_ADD_SELECTED_DATA: 'MULTI_SUB_ADD_SELECTED_DATA',

  MULTI_SUB_REQUEST: 'MULTI_SUB_REQUEST',
  MULTI_SUB_SUCCESS: 'MULTI_SUB_SUCCESS',
  MULTI_SUB_FAILURE: 'MULTI_SUB_FAILURE',

  CART_ADD: 'CART_ADD',
  CART_DELETE: 'CART_DELETE',
  CART_TO_DB: 'CART_TO_DB',

  CART_SELECTED_IMAGE_URL: 'CART_SELECTED_IMAGE_URL',
  CART_SELECTED_PROGRAM_NAME: 'CART_SELECTED_PROGRAM_NAME',
  CART_LIST_OF_ITEM: 'CART_LIST_OF_ITEM',
  CART_SELECTED_PLAN: 'CART_SELECTED_PLAN',
  CART_SELECTED_DATE: 'CART_SELECTED_DATE',
  CART_RESTAURANT_ID: 'CART_RESTAURANT_ID',
  CART_PROGRAM_ID: 'CART_PROGRAM_ID',
  CART_FEATURES_ID: 'CART_FEATURES_ID',

  CALENDER_REQUEST: 'CALENDER_REQUEST',
  CALENDER_SUCCESS: 'CALENDER_SUCCESS',
  CALENDER_FAILURE: 'CALENDER_FAILURE',

  REGISTER_REQUEST: 'USERS_REGISTER_REQUEST',
  REGISTER_SUCCESS: 'USERS_REGISTER_SUCCESS',
  REGISTER_FAILURE: 'USERS_REGISTER_FAILURE',

  VERIFY_OTP_REQUEST: 'VERIFY_OTP_REQUEST',
  VERIFY_OTP_SUCCESS: 'VERIFY_OTP_SUCCESS',
  VERIFY_OTP_FAILURE: 'VERIFY_OTP_FAILURE',

  FORGOT_OTP_REQUEST: 'FORGOT_OTP_REQUEST',
  FORGOT_OTP_SUCCESS: 'FORGOT_OTP_SUCCESS',
  FORGOT_OTP_FAILURE: 'FORGOT_OTP_FAILURE',

  UPDATE_USER_REQUEST: 'UPDATE_USER_REQUEST',
  UPDATE_USER_SUCCESS: 'UPDATE_USER_SUCCESS',
  UPDATE_USER_FAILURE: 'UPDATE_USER_FAILURE',

  COMPANY_PLAN_REQUEST: 'COMPANY_PLAN_REQUEST',
  COMPANY_PLAN_SUCCESS: 'COMPANY_PLAN_SUCCESS',
  COMPANY_PLAN_FAILURE: 'COMPANY_PLAN_FAILURE',

  PROGRAMS_PLAN_REQUEST: 'PROGRAMS_PLAN_REQUEST',
  PROGRAMS_PLAN_SUCCESS: 'PROGRAMS_PLAN_SUCCESS',
  PROGRAMS_PLAN_FAILURE: 'PROGRAMS_PLAN_FAILURE',

  PROGRAMS_REQUEST: 'PROGRAMS_REQUEST',
  PROGRAMS_SUCCESS: 'PROGRAMS_SUCCESS',
  PROGRAMS_FAILURE: 'PROGRAMS_FAILURE',

  EMAIL_REQUEST: 'EMAIL_REQUEST',
  EMAIL_SUCCESS: 'EMAIL_SUCCESS',
  EMAIL_FAILURE: 'EMAIL_FAILURE',
  EMAIL_SENT_SUCCESS: 'EMAIL_SENT_SUCCESS',

  FORGOT_REQUEST: 'FORGOT_REQUEST',
  FORGOT_SUCCESS: 'FORGOT_SUCCESS',
  FORGOT_FAILURE: 'FORGOT_FAILURE',

  PROFILE_REQUEST: 'PROFILE_REQUEST',
  PROFILE_SUCCESS: 'PROFILE_SUCCESS',
  PROFILE_FAILURE: 'PROFILE_FAILURE',

  CARD_REQUEST: 'CARD_REQUEST',
  CARD_SUCCESS: 'CARD_SUCCESS',
  CARD_FAILURE: 'CARD_FAILURE',

  NOTIFICATION_REQUEST: 'NOTIFICATION_REQUEST',
  NOTIFICATION_SUCCESS: 'NOTIFICATION_SUCCESS',
  NOTIFICATION_FAILURE: 'NOTIFICATION_FAILURE',

  DEVICE_TOKEN: 'DEVICE_TOKEN',
  DEVICE_TYPE: 'DEVICE_TYPE',
  LANGUAGE: 'LANGUAGE',
  TOKEN: 'TOKEN',

  LABEL_REQUEST: 'LABEL_REQUEST',
  LABEL_SUCCESS: 'LABEL_SUCCESS',
  LABEL_FAILURE: 'LABEL_FAILURE',

  HOME_REQUEST: 'HOME_REQUEST',
  HOME_SUCCESS: 'HOME_SUCCESS',
  HOME_FAILURE: 'HOME_FAILURE',

  ADDRESS_LIST_REQUEST: 'ADDRESS_LIST_REQUEST',
  ADDRESS_LIST_SUCCESS: 'ADDRESS_LIST_SUCCESS',
  ADDRESS_LIST_FAILURE: 'ADDRESS_LIST_FAILURE',

  ADDRESS_SET_REQUEST: 'ADDRESS_SET_REQUEST',
  ADDRESS_SET_SUCCESS: 'ADDRESS_SET_SUCCESS',
  ADDRESS_SET_FAILURE: 'ADDRESS_SET_FAILURE',

  ADD_ADDRESS_REQUEST: 'ADD_ADDRESS_REQUEST',
  ADD_ADDRESS_SUCCESS: 'ADD_ADDRESS_SUCCESS',
  ADD_ADDRESS_FAILURE: 'ADD_ADDRESS_FAILURE',

  EDIT_ADDRESS_REQUEST: 'EDIT_ADDRESS_REQUEST',
  EDIT_ADDRESS_SUCCESS: 'EDIT_ADDRESS_SUCCESS',
  EDIT_ADDRESS_FAILURE: 'EDIT_ADDRESS_FAILURE',

  ONE_DAY_PLAN_REQUEST: 'ONE_DAY_PLAN_REQUEST',
  ONE_DAY_PLAN_SUCCESS: 'ONE_DAY_PLAN_SUCCESS',
  ONE_DAY_PLAN_FAILURE: 'ONE_DAY_PLAN_FAILURE',

  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_SUCCESS_VERIFY: 'LOGIN_SUCCESS_VERIFY',
  TOKEN_RESTORE: 'TOKEN_RESTORE',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  LOGOUT_REQUEST: 'LOGOUT_REQUEST',
  ADDRESS_REQUEST: 'ADDRESS_REQUEST',
  ADDRESS_SUCCESS: 'ADDRESS_SUCCESS',
  ADDRESS_FAILURE: 'ADDRESS_FAILURE',
  ADDRESS_FETCH: 'ADDRESS_FETCH',
  ORDER_SUCCESS: 'ORDER_SUCCESS',
  ORDER_REQUEST: 'ORDER_REQUEST',
  ORDER_FAILURE: 'ORDER_FAILURE',
  ORdER_FETCH: 'ORdER_FETCH',
  CHECKOUT_SUCCESS: 'CHECKOUT_SUCCESS',
  CHECKOUT_REQUEST: 'CHECKOUT_REQUEST',
  CHECKOUT_FAILURE: 'CHECKOUT_FAILURE',
  CHECKOUT_FETCH: 'CHECKOUT_FETCH',

  PACKAGE_REQUEST: 'PACKAGE_REQUEST',
  PACKAGE_SUCCESS: 'PACKAGE_SUCCESS',
  PACKAGE_FAILURE: 'PACKAGE_FAILURE',

  PACKAGE_SELECTED_REQUEST: 'PACKAGE_SELECTED_REQUEST',

  PACKAGE_SELECTED_SUCCESS: 'PACKAGE_SELECTED_SUCCESS',
  PACKAGE_SELECTED_FAILURE: 'PACKAGE_SELECTED_FAILURE',

  PAYMENT_INITIATION_REQUEST: 'PAYMENT_INITIATION_REQUEST',
  PAYMENT_INITIATION_SUCCESS: 'PAYMENT_INITIATION_SUCCESS',
  PAYMENT_INITIATION_FAILURE: 'PAYMENT_INITIATION_FAILURE',

  MYORDERS_REQUEST: 'MYORDERS_REQUEST',
  MYORDERS_SUCCESS: 'MYORDERS_SUCCESS',
  MYORDERS_FAILURE: 'MYORDERS_FAILURE',

  EMAIL_REQUEST: 'EMAIL_REQUEST',
  EMAIL_SUCCESS: 'EMAIL_SUCCESS',
  EMAIL_FAILURE: 'EMAIL_FAILURE',

  EMAILEXPORT_REQUEST: 'EMAILEXPORT_REQUEST',
  EMAILEXPORT_SUCCESS: 'EMAILEXPORT_SUCCESS',
  EMAILEXPORT_FAILURE: 'EMAILEXPORT_FAILURE',

  PACKAGE_PAYMENT_REQUEST: 'PACKAGE_PAYMENT_REQUEST',
  PACKAGE_PAYMENT_SUCCESS: 'PACKAGE_PAYMENT_SUCCESS',
  PACKAGE_PAYMENT_FAILURE: 'PACKAGE_PAYMENT_FAILURE',

  PAYMENT_INITIATION_CLEAR: 'PAYMENT_INITIATION_CLEAR',
  PACKAGE_PAYMENT_CLEAR: 'PACKAGE_PAYMENT_CLEAR',

  PACKAGE_CLEAR: 'PACKAGE_CLEAR',
  PAYMENT_CANCELLED: 'PAYMENT_CANCELLED',
  USER_HOME_REQUEST: 'USER_HOME_REQUEST',
  USER_HOME_SUCCESS: 'USER_HOME_SUCCESS',
  USER_HOME_FAILURE: 'USER_HOME_FAILURE',

  USER_DETAILS_REQUEST: 'USER_DETAILS_REQUEST',
  USER_DETAILS_SUCCESS: 'USER_DETAILS_SUCCESS',
  USER_DETAILS_FAILURE: 'USER_DETAILS_FAILURE',
};
export const alertConstants = {
  SUCCESS: 'ALERT_SUCCESS',
  ERROR: 'ALERT_ERROR',
  CLEAR: 'ALERT_CLEAR',
};
