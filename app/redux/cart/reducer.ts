import {
  AddToCart,
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
  [actionType.CLEAR_CART]: (state: CartState) => ({
    ...state,
    cart: [],
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

  [actionType.ADD_TO_CART]: (state: CartState, { item }: AddToCart) => {
    if (state.cart?.length) {
      const found = state.cart.find(items => items.idMeal === item.idMeal);

      if (found) {
        state.cart.splice(state.cart.indexOf(found), 1, {
          ...found,
          quantity: found.quantity + 1,
        });

        return {
          ...state,
          cart: [...state.cart],
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...item, quantity: 1 }],
      };
    }
    return {
      ...state,
      cart: [{ ...item, quantity: 1 }],
    };
  },
};

export const cartReducer = (state = initialState, action: CartActions) => {
  const handler = ACTIONS[action.type];
  return handler ? handler(state, action) : state;
};
