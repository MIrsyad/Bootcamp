import React, {createContext, useContext, useState, useEffect} from 'react';

import axios from 'axios';

const UserContext = createContext();

const UserProvider = ({children}) => {
  const [user, setUser] = useState({});
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const login = async (u, p) => {
    setIsLoading(true);
    console.log('login clicked');
    const data = {
      data: {
        username: u,
        password: p,
      },
    };

    console.log('data dikirim', data);
    JSON.stringify(data);
    await axios
      .post('http://simple-wms.herokuapp.com/api/v1/auth/login', data)
      .then((res) => {
        if (res.status == '200') {
          console.log('status success');
          setIsLogin(true);
          setUser(res.data.data);
        } else {
          setIsLogin(false);
          console.log(res.status);
          console.log('Status tidak "Success"');
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  };

  const getProduct = async (token) => {
    await axios
      .get('http://simple-wms.herokuapp.com/api/v1/product', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setProduct(res.data.data.data)
        console.log(product);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const clearData = () => {
    setUser({}), setIsLogin(false);
  };

  let value = {
    user,
    product,
    isLoading,
    isLogin,
    login,
    getProduct,
    clearData: () => clearData(),
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

const useUser = () => useContext(UserContext);

export {useUser, UserContext};
export default UserProvider;
