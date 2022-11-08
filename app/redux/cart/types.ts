import { TCartItem, TCategory, TCategoryItem } from 'app/types';

export enum CART_ACTION_TYPES {
  CLEAR_CART = 'cart/CLEAR_CART',

  CLEAR_REDUX_STORE = 'cart/CLEAR_STORE',

  ADD_TO_CART = 'cart/ADD_TO_CART',

  GET_MEAL_CATEGORIES_REQUEST = 'restaurant/GET_MEAL_CATEGORIES_REQUEST',
  GET_MEAL_CATEGORIES_SUCCESS = 'restaurant/GET_MEAL_CATEGORIES_SUCCESS',
  GET_MEAL_CATEGORIES_ERROR = 'restaurant/GET_MEAL_CATEGORIES_ERROR',

  GET_CATEGORY_ITEM_REQUEST = 'restaurant/GET_CATEGORY_ITEM_REQUEST',
  GET_CATEGORY_ITEM_SUCCESS = 'restaurant/GET_CATEGORY_ITEM_SUCCESS',
  GET_CATEGORY_ITEM_ERROR = 'restaurant/GET_CATEGORY_ITEM_ERROR',
}

export type CartState = {
  cart: null | TCartItem[];
  categories: null | TCategory[];
  categoryItems: null | TCategoryItem[];
  requestStatus: RequestStatus;
};

export type ClearCart = {
  type: CART_ACTION_TYPES.CLEAR_CART;
};

export type GetCategoriesSuccess = {
  type: CART_ACTION_TYPES.GET_MEAL_CATEGORIES_SUCCESS;
  categories: TCategory[];
};

export type GetCategoryItemSuccess = {
  type: CART_ACTION_TYPES.GET_CATEGORY_ITEM_SUCCESS;
  categoryItems: TCategoryItem[];
};

export type AddToCart = {
  type: CART_ACTION_TYPES.ADD_TO_CART;
  item: TCartItem;
};

export type CartActions =
  | ClearCart
  | GetCategoriesSuccess
  | GetCategoryItemSuccess
  | AddToCart
  | ClearCart;
