import React from 'react';
import '../styles/Product.css';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const Product = (props) => {
  return(
    <div className='product-container'>
      <div className='product-image-container'>
        <img src={`${props.img_src}`} alt="" className="product-img" />
      </div>
      <div className='product-info-container'>
        <div className='product-options-container'>
          <div className='product-price'>
            ${props.price}
          </div>
          <div>
            <AddCircleOutlineIcon fontSize={"medium"} onClick={()=>alert('Added To Cart')} />
          </div>
        </div>
        <div className="product-title">
          {props.name}
        </div>
      </div>
    </div>
  )
}

export default Product;