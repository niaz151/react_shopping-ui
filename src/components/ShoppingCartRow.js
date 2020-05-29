import React from 'react';
import '../styles/ShoppingCartRow.css';

const ShoppingCartRow = (props) => {
  return(
    <div className='cart-row'>
        <div className='cart-item-title'>
          {props.title}
        </div>
        <div className='cart-item-img'>
          {props.img}
        </div>
        <div className='cart-item-price'>
          {props.price}
        </div>
      </div>
  )
}

export default ShoppingCartRow;