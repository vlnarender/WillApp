import {userConstants} from './actionTypes';
export const cartActions = {
  cartDeleteAction,
  selectedImageUrl,
  cartToDataBase,
  cartAddAction,
  restaurantId,
  selectedDate,
  selectedPlan,
  programId,
  featuresId,
  programName,
};

function programName(data) {
  return {type: userConstants.CART_SELECTED_PROGRAM_NAME, data};
}
function selectedPlan(data) {
  return {type: userConstants.CART_SELECTED_PLAN, data};
}
function selectedDate(data) {
  return {type: userConstants.CART_SELECTED_DATE, data};
}
function selectedImageUrl(data) {
  return {
    type: userConstants.CART_SELECTED_IMAGE_URL,
    data,
  };
}
function restaurantId(data) {
  return {type: userConstants.CART_RESTAURANT_ID, data};
}

function programId(data) {
  return {type: userConstants.CART_PROGRAM_ID, data};
}

function featuresId(data) {
  return {type: userConstants.CART_FEATURES_ID, data};
}

function cartDeleteAction(data) {
  return {type: userConstants.CART_DELETE, data};
}

function cartAddAction(data) {
  return {type: userConstants.CART_ADD, data};
}

function cartToDataBase() {
  return {type: userConstants.CART_TO_DB};
}
