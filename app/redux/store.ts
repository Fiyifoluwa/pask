import {
  combineReducers,
  createStore,
  applyMiddleware,
  AnyAction,
  CombinedState,
} from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import { AppState } from './types';
import { CART_ACTION_TYPES } from './cart/types';
import { cartReducer } from './cart/reducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const appReducer = combineReducers<AppState>({
  cart: cartReducer,
});

const rootReducer = (
  state: CombinedState<AppState> | undefined,
  action: AnyAction,
) => {
  if (action.type === CART_ACTION_TYPES.CLEAR_REDUX_STORE) {
    AsyncStorage.removeItem('persist:root');

    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
let persistor = persistStore(store);

export { store, persistor };
