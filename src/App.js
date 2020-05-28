import React from 'react';
import './styles/App.css';
import ProductList from './components/ProductList';
import Header from './components/Header';
import FilterBar from './components/FilterBar';

function App() {
  return (
    <div className="App">
      <Header/>
      <FilterBar/>
      <div className='container'>
        <ProductList/>
      </div>
    </div>
  );
}

export default App;
