import React from 'react';
import '../styles/ShoppingCartLanding.css';
import {useDispatch, useSelector} from 'react-redux';
import { render } from '@testing-library/react';
import ShoppingCartRow from './ShoppingCartRow';

const ShoppingCartLanding = () => {
  
  // === HOOKS ===
  const dispatch = useDispatch();
  const shopping_cart = useSelector(state => state['shopping_cart'].items);
  console.log(shopping_cart)

  var output = [];
  for(var i = 0; i < shopping_cart.length; i++){
    output.push(
      <ShoppingCartRow title={shopping_cart[i].title} img={shopping_cart[i].img}  price={shopping_cart[i].price} />
    )
  }

  return(
    <div className='shoppingcart-landing'>
      <div class='shoppingcart-row-wrap'>
        {output}
      </div>
      <div className='shoppingcart-menu'>
        
      </div>
    </div>
  )
}



export default ShoppingCartLanding;