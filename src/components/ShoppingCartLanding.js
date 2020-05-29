import React from 'react';
import '../styles/ShoppingCartLanding.css';
import {useDispatch, useSelector} from 'react-redux';
import Button from '@material-ui/core/Button';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const ShoppingCartLanding = () => {
  
  // === HOOKS ===
  const dispatch = useDispatch();
  const shopping_cart = useSelector(state => state['shopping_cart'].items);

  function getCartPrice(){
    var price = 0;
    for(var i = 0; i < shopping_cart.length; i ++){
      price += shopping_cart[i].price;
    }
    price = price.toFixed(2);
    console.log(price);
    return price;
  }

  function renderCartRow(props){
    return(
      <div className='shoppingcart-menu-item'>
          <div className='shoppingcart-menu-item-quantitiy'>
            <DeleteForeverIcon/>
          </div>
          <div className='shoppingcart-menu-item-name'>
            Shirt: Casual Shirt for Everyday Wear
          </div>
          <div className='shoppingcart-menu-item-price'>
            $12.50
          </div>
      </div>
    )
  }

  function renderOrderTotalRow(){
    return(
      <div className='shoppingcart-menu-total'>
          <div className='shoppingcart-menu-item-quantitiy'>
            
          </div>
          <div className='shoppingcart-menu-item-name'>
         
          </div>
          <div className='shoppingcart-menu-item-total-price'>
            $12.50
          </div>
      </div>
    )
  }


  return(
    <div className='shoppingcart-landing'>
      <div className='shoppingcart-menu'>
        <div className='shoppingcart-menu-icon'>
          Your Personalized Cart
        </div>
        <div className='shoppingcart-menu-items'>
          {renderCartRow()}
          {renderCartRow()}
          {renderCartRow()}
          {renderOrderTotalRow()}
        </div>
        <div className='shoppingcart-submit-order-wrap'>
          <Button variant="contained" color="primary"> Place Order </Button>
        </div>
      </div>
    </div>
  )
}



export default ShoppingCartLanding;