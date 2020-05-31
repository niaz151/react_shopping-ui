import React from 'react';
import Header from './Header';
import {useSelector, useDispatch} from 'react-redux';
import '../styles/ProductPage.css';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const ProductPage = (props) => {

    const item = useSelector(state => state['current_product']); 
    const dispatch = useDispatch();

    const product_title = item.title;
    const product_price = item.price;
    const img_src = item.img_src;
    const description = item.description;


    const addToCart = () => {
        var item = {
            title: product_title, 
            price: product_price,
            img_src: img_src,
            description: description,
        }
        dispatch({type:"ADD_TO_CART", payload: item})
    }

    return(
        <> 
            <div className='product-page-container'>
                <div className='product-page-img-wrap'>
                    <img src={img_src} alt="" className="product-page-img" />
                </div>
                <div className='product-page-details-wrap'>
                    <div className='product-page-details'>
                        <div className='product-page-item-title'>
                            {product_title}
                        </div>
                        <div className='product-page-item-text'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                        <div className='product-page-item-price-wrap'>
                            <div className='product-page-price'>
                                {`$ ${product_price}`}
                            </div>
                            <div className='product-page-addtocart'>
                                <AddCircleOutlineIcon fontSize={"default"} onClick={addToCart} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default ProductPage;
