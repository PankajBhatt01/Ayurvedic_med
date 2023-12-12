import React, { createContext, useEffect, useState } from "react";

import { API } from "../constant";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  // products state
  const [products, setProducts] = useState([]);
  // fetch products
  useEffect(() => {
    fetch(`${API}/plants?populate=*`)
      .then((response) => response.json())
      .then((plants) => setProducts(plants.data));
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
