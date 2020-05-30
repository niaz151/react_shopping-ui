import React from 'react';
import '../styles/ShoppingCartLanding.css';
import {useSelector} from 'react-redux';
import Button from '@material-ui/core/Button';
import Header from './Header';
import ShoppingCartItem from './ShoppingCartItem';

const ShoppingCartLanding = () => {
  
  // === HOOKS ===
  const shopping_cart = useSelector(state => state['shopping_cart'].items);

  function renderCartItems(){
    var output = [];
    for(var i = 0 ; i < shopping_cart.length; i++){
      output.push(
        <ShoppingCartItem
          title={shopping_cart[i].title}
          price={shopping_cart[i].price}
          description={shopping_cart[i].description}
        />
      )
    }
    return output;
  }

  function renderOrderTotal(){
    var price = 0;
    for(var i = 0; i < shopping_cart.length; i ++){
      price += parseInt(shopping_cart[i].price);
    }
    return(
      <div className='shoppingcart-menu-total'>
          <div className='shoppingcart-menu-item-quantitiy'>
          </div>
          <div className='shoppingcart-menu-item-name'>
         
          </div>
          <div className='shoppingcart-menu-item-total-price'>
            {`$ ${price}`}
          </div>
      </div>
    )
  }

  return(
    <>
      <Header/>
      <div className='shoppingcart-landing'>
        <div className='shoppingcart-menu'>
          <div className='shoppingcart-menu-icon'>
            Your Personalized Cart
          </div>
          <div className='shoppingcart-menu-items'>
            {renderCartItems()}
            {renderOrderTotal()}
          </div>
          <div className='shoppingcart-submit-order-wrap'>
            <Button variant="contained" color="primary"> Place Order </Button>
          </div>
        </div>
      </div>
    </>
  )
}



export default ShoppingCartLanding;