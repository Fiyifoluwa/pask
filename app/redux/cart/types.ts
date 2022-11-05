export enum CART_ACTION_TYPES {
  CLEAR_CART = 'cart/CLEAR_CART',
  CLEAR_REDUX_STORE = 'cart/CLEAR_STORE',
}

export type CartState = {
  cart: null | any[];
  requestStatus: RequestStatus;
};

export type ClearCart = {
  type: CART_ACTION_TYPES.CLEAR_CART;
};

export type CartActions = ClearCart;
