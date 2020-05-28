import React from 'react';
import '../styles/Product.css';

const Product = (props) => {
  return(
    <div className='product-container'>
      <div className='product-image-container'>
        <img src={`${props.img_src}`} alt="" className="product-img" />
      </div>
      <div className='product-info-container'>
        <div className='product-price'>
          ${props.price}
        </div>
        <div className="product-title">
          {props.name}
        </div>
      </div>
    </div>
  )
}

export default Product;