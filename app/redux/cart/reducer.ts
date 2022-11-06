import {
  CartActions,
  CartState,
  CART_ACTION_TYPES as actionType,
  GetCategoriesSuccess,
  GetCategoryItemSuccess,
} from './types';

export const initialState: CartState = {
  cart: null,
  categories: null,
  categoryItems: null,
  requestStatus: 'idle',
};

const ACTIONS: any = {
  [actionType.CLEAR_REDUX_STORE]: (
    state: CartState,
    // {}: ClearCart
  ) => ({
    ...state,
    // user: { ...state.user, user: { ...state?.user?.user, ...brassUser } },
  }),

  [actionType.CLEAR_CART]: (state: CartState) => ({
    ...state,
    requestStatus: 'idle',
  }),

  [actionType.GET_MEAL_CATEGORIES_REQUEST]: (state: CartState) => ({
    ...state,
    requestStatus: 'pending',
  }),
  [actionType.GET_MEAL_CATEGORIES_SUCCESS]: (
    state: CartState,
    { categories }: GetCategoriesSuccess,
  ) => {
    const sliced = categories.slice(0, 6);

    return {
      ...state,
      categories: [...sliced],
      requestStatus: 'success',
    };
  },
  [actionType.GET_MEAL_CATEGORIES_ERROR]: (state: CartState) => ({
    ...state,
    requestStatus: 'failed',
  }),

  [actionType.GET_CATEGORY_ITEM_REQUEST]: (state: CartState) => ({
    ...state,
    requestStatus: 'pending',
  }),
  [actionType.GET_CATEGORY_ITEM_SUCCESS]: (
    state: CartState,
    { categoryItems }: GetCategoryItemSuccess,
  ) => {
    const sliced = categoryItems.slice(0, 5);
    return {
      ...state,
      categoryItems: [...sliced],
      requestStatus: 'success',
    };
  },
  [actionType.GET_CATEGORY_ITEM_ERROR]: (state: CartState) => ({
    ...state,
    requestStatus: 'failed',
  }),
};

export const cartReducer = (state = initialState, action: CartActions) => {
  const handler = ACTIONS[action.type];
  return handler ? handler(state, action) : state;
};
