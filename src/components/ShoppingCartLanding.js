import React from 'react';
import '../styles/ShoppingCartLanding.css';
import {useDispatch, useSelector} from 'react-redux';
import { render } from '@testing-library/react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const ShoppingCartLanding = () => {
  
  // === HOOKS ===
  const dispatch = useDispatch();
  const shopping_cart = useSelector(state => state['shopping_cart'].items);
  console.log(shopping_cart)

  var price = 0;
  for(var i = 0; i < shopping_cart.length; i ++){
    price += shopping_cart[i].price;
  }
  price = price.toFixed(2);

  return(
    <div className='shoppingcart-landing'>
      <div className='shoppingcart-menu'>
        <div className='shoppingcart-menu-icon'>
          <ShoppingCartIcon fontSize={"large"} />
        </div>
        <div className='shoppingcart-menu-items'>
          <div className='shoppingcart-menu-item'>

          </div>
          <div className='shoppingcart-menu-item'>
            
          </div>
          <div className='shoppingcart-menu-item'>
            
          </div>
        </div>
        <div className='shoppingcart-menu-pricing'>
          <span> Order Total: </span>
          <span> ${price} </span>
        </div>
      </div>
    </div>
  )
}



export default ShoppingCartLanding;