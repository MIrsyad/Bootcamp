import Api from './init';

export const getUser = async (id = '') =>
  await Api.get(`users`)
    .then(res => res.data)
    .catch(e => {
      console.log({e});
      return e;
    });

export const saveUser = async payload =>
  await Api.post('users', {payload}, config)
    .then(res => res.data)
    .catch(e => {
      return e;
    });

export const updateUSer = async (payload, id) =>
  await Api.put(`users/${id}`, {payload}, config)
    .then(res => res.data)
    .catch(e => {
      return e;
    });