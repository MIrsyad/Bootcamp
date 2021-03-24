import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import globalReducer from './global/reducer';

const rootReducer = combineReducers({
  global: globalReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
