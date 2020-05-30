import React from 'react';
import '../styles/Product.css';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {useDispatch} from 'react-redux';

const Product = (props) => {

  const dispatch = useDispatch();

  const addToCart = () => {
    var item = {
      "price": props.price,
      "img": props.img,
      "title":props.name,
      "description":props.description
    }
    dispatch({type:'ADD_TO_CART', payload: item})
  }

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
            <AddCircleOutlineIcon fontSize={"default"} onClick={addToCart} />
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