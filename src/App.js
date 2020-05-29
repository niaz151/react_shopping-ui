import React from 'react';
import './styles/App.css';
import ProductList from './components/ProductList';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import { createStore } from 'redux';
import reducers from './reducers';
import { Provider } from 'react-redux';
import ShoppingCartLanding from './components/ShoppingCartLanding';

const store = createStore(reducers);

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Header/>
      <div className='container'>
        <ShoppingCartLanding/>
      </div>
    </div>
    </Provider>
  );
}

export default App;
