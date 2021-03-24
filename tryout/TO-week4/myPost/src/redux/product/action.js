import axios from 'axios'

import {SET_LOADING,SET_PRODUCT} from './constan'

export const setLoading = (data) => {
    return {type: SET_LOADING, data}
}

export const setProduct = (data) => {
    return {type: SET_PRODUCT, data}
}

export const getProduct = (token) => dispatch => {
    dispatch(setLoading(true));
    axios
      .get('http://simple-wms.herokuapp.com/api/v1/product', {
        headers: {Authorization: `Bearer ${token}`},
      })
      .then(res => {
        console.log(res.data.data.data);
        dispatch(setProduct(res.data.data.data));
      })
      .catch(e => {
        console.log(e);
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };