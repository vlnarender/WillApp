/**
 * @author suraj kumar
 * @email surajknkumar@gmail.com
 * @Owner Will
 */
import {userConstants} from '../actions/actionTypes';

const initialState = {
  multiSubWeek: 1,
  selectedWeek: 1,
};

export default function (state = initialState, action) {
  switch (action.type) {
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

    default:
      return state;
  }
}
