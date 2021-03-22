import axios from 'axios';

const config = {
  base: 'http://simple-wms.herokuapp.com/',
};
const instance = axios.create({
  baseURL: config.base,
});

instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    console.log('request', {config});
    return config;
  },
  function (error) {
    // Do something with request error
    console.log('request', {error});
    return Promise.reject(error);
  },
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log('response', {response});
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log('response', {error});
    return Promise.reject(error);
  },
);

export default instance;