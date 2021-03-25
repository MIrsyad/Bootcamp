import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';

import globalReducer from './global/reducer';
import productReducer from './product/reducer';
// import store from './store';

const persistConfig = {
  key: 'myPost',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  global: globalReducer,
  product: productReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(
  persistedReducer,
  applyMiddleware(thunkMiddleware),
);
export const persistor = persistStore(store);

export default {};
