import React, {useEffect} from 'react';
import '../styles/ProductList.css';
import ProductTile from './ProductTile';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header';
import FilterBar from './FilterBar';

const ProductList = () => {

  const dispatch = useDispatch();
  const products = useSelector(state => state['products']);

  // PUT ALL PRODUCTS IN REDUX STORE
  useEffect( () => {
    var endpoint = 'http://ec2-34-234-201-135.compute-1.amazonaws.com:8080/api/v1/products/getAllProducts';
    fetch(endpoint)
      .then(res => {
        return res.json();
      })
      .then(data => {
        dispatch({type:'UPDATE_DATA', payload: data})
      }) 
  }, [dispatch]);

  // MAP STORE PRODUCTS TO PRODUCT OBJECTS
  var output = [];
  if(products.length !== undefined){
    for(var i = 0; i < products.length; i ++){
      var img_src = products[i].img_src;
      var name = products[i].name;
      var description = products[i].description;
      var price = products[i].price.toFixed(2) ;
      output.push(
        <ProductTile 
          img_src={img_src} 
          name={name}
          price={price}
          key={i}
          description={description}
        />
      )
    }
  }

  return(
    <>
      <FilterBar/>
      <div className="product-list-container">
        {output}
      </div>
    </>
  )
}



export default ProductList;