import React, {createContext, useContext, useState} from 'react';
import axios from 'axios';

const ProductContext = createContext();

const ProductProvider = ({children}) => {
  const [product, setProduct] = useState([]);
  const [productLoading, setProductLoading] = useState(false);

  const getProduct = async (token) => {
    setProductLoading(true);
    await axios
      .get('http://simple-wms.herokuapp.com/api/v1/product', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setProduct(res.data.data.data);
        // console.log(product);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setProductLoading(false));
  };

  let value = {
    product,
    productLoading,
    getProduct,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

const useProduct = () => useContext(ProductContext);

export {useProduct, ProductContext};
export default ProductProvider;
