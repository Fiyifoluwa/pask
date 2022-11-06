import { CART_ACTION_TYPES as actionTypes } from './types';

export const handleRequestTypeActionCreators = (type: actionTypes) => ({
  type,
});

export const setCategories = (categories: any) => ({
  type: actionTypes.GET_MEAL_CATEGORIES_SUCCESS,
  categories,
});

export const setCategoryItems = (categoryItems: any) => ({
  type: actionTypes.GET_CATEGORY_ITEM_SUCCESS,
  categoryItems,
});
