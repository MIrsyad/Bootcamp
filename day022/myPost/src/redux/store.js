import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import globalReducer from './global/reducer';
import productReducer from './product/reducer'

const rootReducer = combineReducers({
  global: globalReducer,
  product: productReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
