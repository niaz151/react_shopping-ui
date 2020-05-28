import React from 'react';
import './styles/App.css';
import ProductList from './components/ProductList';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='container'>
        <ProductList/>
      </div>
    </div>
  );
}

export default App;
