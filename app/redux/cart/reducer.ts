import {
  CartActions,
  CartState,
  CART_ACTION_TYPES as actionType,
} from './types';

export const initialState: CartState = {
  cart: null,
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
};

export const cartReducer = (state = initialState, action: CartActions) => {
  const handler = ACTIONS[action.type];
  return handler ? handler(state, action) : state;
};
