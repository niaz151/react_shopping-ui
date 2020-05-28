import React from 'react';
import '../styles/ProductList.css';
import Product from './Product';

const ProductList = () => {
  return(
    <div className="product-list-container">
      <Product/>
      <Product/>
      <Product/>
      <Product/>

      <Product/>
      <Product/>
      <Product/>
      <Product/>
    </div>
  )
}

export default ProductList;