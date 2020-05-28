import React from 'react';
import './styles/App.css';
import ProductList from './components/ProductList';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import { createStore } from 'redux';
import reducers from './redux/reducers';
import { Provider, useSelector } from 'react-redux';

const store = createStore(reducers);

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Header/>
      <FilterBar/>
      <div className='container'>
        <ProductList/>
      </div>
    </div>
    </Provider>
  );
}

export default App;
