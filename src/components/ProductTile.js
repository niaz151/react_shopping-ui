import React from 'react';
import '../styles/ProductTile.css';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {useDispatch} from 'react-redux';
import { useHistory } from "react-router-dom";

const ProductTile = (props) => {

  const dispatch = useDispatch();
  const history = useHistory();

  const addToCart = () => {
    var item = {
      "price": props.price,
      "img": props.img,
      "title":props.name,
      "description":props.description
    }
    dispatch({type:'ADD_TO_CART', payload: item})
  }

  const viewItemDetails = () => {
    var item = {
      "price": props.price,
      "img_src": props.img_src,
      "title":props.name,
      "description":props.description
    }
    dispatch({type:"VIEW_ITEM_DETAILS", payload: item})
    history.push("/itemDetails")
  }

  return(
    <div className='product-container'>
      <div className='product-image-container'>
        <img src={`${props.img_src}`} alt="" className="product-img" onClick={viewItemDetails} />
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

export default ProductTile;