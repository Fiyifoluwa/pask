export enum CART_ACTION_TYPES {
  CLEAR_CART = 'cart/CLEAR_CART',
  CLEAR_REDUX_STORE = 'cart/CLEAR_STORE',

  GET_MEAL_CATEGORIES_REQUEST = 'cart/GET_MEAL_CATEGORIES_REQUEST',
  GET_MEAL_CATEGORIES_SUCCESS = 'cart/GET_MEAL_CATEGORIES_SUCCESS',
  GET_MEAL_CATEGORIES_ERROR = 'cart/GET_MEAL_CATEGORIES_ERROR',

  GET_CATEGORY_ITEM_REQUEST = 'cart/GET_CATEGORY_ITEM_REQUEST',
  GET_CATEGORY_ITEM_SUCCESS = 'cart/GET_CATEGORY_ITEM_SUCCESS',
  GET_CATEGORY_ITEM_ERROR = 'cart/GET_CATEGORY_ITEM_ERROR',
}

export type CartState = {
  cart: null | any[];
  categories: null | any[];
  categoryItems: null | any[];
  requestStatus: RequestStatus;
};

export type ClearCart = {
  type: CART_ACTION_TYPES.CLEAR_CART;
};

export type GetCategoriesSuccess = {
  type: CART_ACTION_TYPES.GET_MEAL_CATEGORIES_SUCCESS;
  categories: any[];
};

export type GetCategoryItemSuccess = {
  type: CART_ACTION_TYPES.GET_CATEGORY_ITEM_SUCCESS;
  categoryItems: any[];
};

export type CartActions =
  | ClearCart
  | GetCategoriesSuccess
  | GetCategoryItemSuccess;
