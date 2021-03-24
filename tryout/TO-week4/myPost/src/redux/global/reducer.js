import {SET_ISLOGIN, SET_LOADING, SET_DATA} from './constan';

const initialState = {
  data: [],
  isLogin: false,
  loading: false,
};

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {...state, loading: action.data};
    case SET_ISLOGIN:
      return {...state, isLogin: action.data};
    case SET_DATA:
      return {...state, data: action.data};
    default:
      return state;
  }
};

export default globalReducer;
