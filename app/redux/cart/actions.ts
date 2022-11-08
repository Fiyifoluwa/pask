import { TCartItem, TCategory, TCategoryItem } from 'app/types';
import { CART_ACTION_TYPES as actionTypes } from './types';

export const handleRequestTypeActionCreators = (type: actionTypes) => ({
  type,
});

export const setCategories = (categories: TCategory[]) => ({
  type: actionTypes.GET_MEAL_CATEGORIES_SUCCESS,
  categories,
});

export const setCategoryItems = (categoryItems: TCategoryItem[]) => ({
  type: actionTypes.GET_CATEGORY_ITEM_SUCCESS,
  categoryItems,
});

export const addItemToCart = (item: TCartItem) => ({
  type: actionTypes.ADD_TO_CART,
  item,
});

export const clearCart = () => ({
  type: actionTypes.CLEAR_CART,
});
