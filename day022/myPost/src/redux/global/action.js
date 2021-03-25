import axios from 'axios';
import { getProduct } from '../product/action';

import {SET_LOADING, SET_DATA, SET_ISLOGIN} from './constan';

export const setData = data => {
  return {type: SET_DATA, data};
};

export const setIsLogin = data => {
  return {type: SET_ISLOGIN, data};
};

export const setLoading = data => {
  return {type: SET_LOADING, data};
};

export const postLogIn = (username, password) => dispatch => {
  dispatch(setLoading(true));
  const data = {
    data: {
      username: username,
      password: password,
    },
  };
  JSON.stringify(data)
  axios
    .post('http://simple-wms.herokuapp.com/api/v1/auth/login', data)
    .then(res => {
      console.log(res);
      dispatch(setData(res.data));
      dispatch(setIsLogin(true));
      dispatch(getProduct(res.data.data.token))
    })
    .catch(e => {
      console.log(e);
    })
    .finally(() => {
      dispatch(setLoading(false));
    });
};
