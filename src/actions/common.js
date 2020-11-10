/**
 * @author suraj kumar
 * @email surajknkumar@gmail.com
 * @Owner Will
 */
import {userConstants} from './actionTypes';
export const commonActions = {
  multiSubWeek,
  multiSubSelectedWeek,
};

function multiSubWeek(data) {
  return {type: userConstants.MULTI_SUB_WEEK, data};
}
function multiSubSelectedWeek(data) {
  return {type: userConstants.MULTI_SUB_SELECTED_WEEK, data};
}
