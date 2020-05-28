import React from 'react';
import '../styles/ProductList.css';
import Product from './Product';

class ProductList extends React.Component{

  constructor(){
    super();
    this.state = {
      products:{}
    }
  }

  // GET ALL PRODUCTS
  componentDidMount(){
    console.log('hi')
    var endpoint = 'http://localhost:8080/api/v1/products/getAllProducts';
    fetch(endpoint)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          products:data
        })
      }) 
  }

  render(){

    var output = [];
    var state_copy = this.state.products
    if(state_copy.length !== undefined){
      for(var i = 0; i < state_copy.length; i ++){
        var img_src = state_copy[i].img_src;
        var name = state_copy[i].name;
        var price = state_copy[i].price.toFixed(2) ;
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
}

export default ProductList;