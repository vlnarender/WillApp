/**
 * @author suraj kumar
 * @email surajknkumar@gmail.com
 * @Owner Will
 */
export const MEAL = [
  {
    day: null,
    plan_diet_package_id: null,
    meal_type: null,
    meal_id: null,
  },
];

export const DIET_COMPANY = [
  {
    restaurant_id: null,
    week: null,
    plan_id: null,
    plan_packages_id: null,
    meals: [],
  },
];

export const CART_DATA = {
  type: null,
  start_date: null,
  duration_type: null,
  duration: null,
  gender: null,
  plan_type: null,
  relative_id: null,
  diet_company: [],
};

export const MealListData = [
  {
    type: 'Breakfast',
    selected: true,
    data: null,
    meal_type: null,
    plan_diet_package_id: null,
    mealID: null,
    mealListId: null,
    plan_id: null,
    plan_packages_id: null,
  },
  {
    type: 'Lunch',
    meal_type: null,
    selected: false,
    plan_diet_package_id: null,
    data: null,
    mealID: null,
    mealListId: null,
    plan_packages_id: null,
    plan_id: null,
  },
  {
    type: 'Dinner',
    meal_type: null,
    plan_diet_package_id: null,
    selected: false,
    data: null,
    mealID: null,
    mealListId: null,
    plan_packages_id: null,
    plan_id: null,
  },
];

export const IMAGE_CDN = 'https://will-app.s3.ap-south-1.amazonaws.com/';
