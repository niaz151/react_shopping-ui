import React from 'react';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import {useDispatch} from 'react-redux';
import '../styles/ShoppingCartItem.css';


const ShoppingCartItem = (props) => {

    const dispatch = useDispatch();

    function handleClick(){
        dispatch({type:'REMOVE_FROM_CART', payload: props.title})
    }

    return(
        <div className='shoppingcart-menu-item'>
            <div className='shoppingcart-menu-item-quantitiy'>
                <DeleteForeverIcon onClick={handleClick} />
            </div>
            <div className='shoppingcart-menu-item-name'>
                {`${props.title} :  ${props.description}`}
            </div>
            <div className='shoppingcart-menu-item-price'>
                {`$ ${parseInt(props.price)}`}
            </div>
      </div>
    )
}

export default ShoppingCartItem;