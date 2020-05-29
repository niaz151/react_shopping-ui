import React, {useEffect} from 'react';
import '../styles/ProductList.css';
import Product from './Product';
import { useDispatch, useSelector } from 'react-redux';


const ProductList = () => {

  const dispatch = useDispatch();
  const products = useSelector(state => state['products']);

  // PUT ALL PRODUCTS IN REDUX STORE
  useEffect( () => {
    var endpoint = 'http://localhost:8080/api/v1/products/getAllProducts';
    fetch(endpoint)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data)
        dispatch({type:'UPDATE_DATA', payload: data})
      }) 
  }, [dispatch]);

  // MAP STORE PRODUCTS TO PRODUCT OBJECTS
  var output = [];
  if(products.length !== undefined){
    for(var i = 0; i < products.length; i ++){
      var img_src = products[i].img_src;
      var name = products[i].name;
      var price = products[i].price.toFixed(2) ;
      output.push(
        <Product 
          img_src={img_src} 
          name={name}
          price={price}
          key={i}
        />
      )
    }
  }

  return(
    <div className="product-list-container">
      {output}
    </div>
  )
}



export default ProductList;