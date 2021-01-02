/**
 * @author suraj kumar
 * @email surajknkumar@gmail.com
 * @Owner Will
 */
import {userConstants} from './actionTypes';
export const commonActions = {
  multiSubWeek,
  multiSubSelectedWeek,
  pathFinder,
};
function pathFinder(data) {
  return {type: userConstants.PATH_FINDER, data};
}
function multiSubWeek(data) {
  return {type: userConstants.MULTI_SUB_WEEK, data};
}
function multiSubSelectedWeek(data) {
  return {type: userConstants.MULTI_SUB_SELECTED_WEEK, data};
}
