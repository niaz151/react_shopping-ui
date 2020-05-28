import React from 'react';
import '../styles/Product.css';

const Product = () => {
  return(
    <div className='product-container'>
      <div className='product-image'>
        Image
      </div>
      <div className='product-info'>
        <div className='product-price'>
          $10.50
        </div>
        <div className="product-title">
          Orange Juice
        </div>
      </div>
    </div>
  )
}

export default Product;