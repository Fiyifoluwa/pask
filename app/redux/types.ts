import { CartState } from './cart/types';

export const DEFAULT_DATA_STATE = {
  data: null,
};

export interface AppState {
  cart: CartState;
}
