import {SET_LOADING, SET_PRODUCT} from './constan';

const initialState = {
  product: [],
  loading: false,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCT:
        console.log('action product',action.data);
      return {...state, product: action.data};
    case SET_LOADING:
      return {...state, loading: action.data};
    default:
      return state;
  }
};

export default productReducer;
