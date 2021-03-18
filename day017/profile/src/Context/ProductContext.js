import axios from 'axios';
import React, {createContext, useContext, useState, useEffect} from 'react';

const ProductContext = createContext();

const ProductProvider = ({children}) => {
  const [product, setProduct] = useState({});

  const getData = async (token) => {
    await axios
      .get('http://simple-wms.herokuapp.com/api/v1/product', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let value = {
    product,
    getData,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

const useProduct = useContext(ProductContext);

export {useProduct, ProductContext};
export default ProductProvider;
