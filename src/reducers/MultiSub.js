/**
 * @author suraj kumar
 * @email surajknkumar@gmail.com
 * @Owner Will
 */
import {act} from 'react-test-renderer';
import {userConstants} from '../actions/actionTypes';

const initialState = {
  multiSubData: {},
  loading: false,
  multiSubStatus: false,
  multiSubError: '',
  multiSubMessage: '',
  multiSubWeek: 1,
  selectedWeek: 1,
  selectedMeal: [],
  LIST_ITEMS: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case userConstants.MULTI_SUB_REQUEST:
      return {
        loading: true,
      };
    case userConstants.MULTI_SUB_ADD_SELECTED_DATA:
      console.log('action.data', action.data);
      return {
        ...state,
        selectedMeal: [...state.selectedMeal, action.data],
      };
    case userConstants.MULTI_SUB_LIST_ITEMS:
      console.log('MULTI_SUB_LIST_ITEMS', action.data);
      return {
        ...state,
        LIST_ITEMS: action.data,
      };
    case userConstants.MULTI_SUB_SELECTED_WEEK:
      return {
        ...state,
        selectedWeek: action.data,
      };
    case userConstants.MULTI_SUB_WEEK:
      return {
        ...state,
        multiSubWeek: action.data,
      };
    case userConstants.MULTI_SUB_SUCCESS:
      return {
        ...state,
        multiSubData: action.user.data,
        selectedWeek: 1,
        loading: false,
        multiSubStatus: true,
        multiSubMessage: action.user.message,
      };
    case userConstants.MULTI_SUB_FAILURE:
      return {
        ...state,
        multiSubError: action.error.message,
        loading: false,
        multiSubStatus: false,
      };
    default:
      return state;
  }
}
