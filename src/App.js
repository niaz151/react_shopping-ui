import React from 'react';
import './styles/App.css';
import ProductList from './components/ProductList';
import { createStore } from 'redux';
import reducers from './reducers';
import { Provider } from 'react-redux';
import ShoppingCartLanding from './components/ShoppingCartLanding';
import ProductPage from './components/ProductPage';
import { composeWithDevTools } from 'redux-devtools-extension';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const store = createStore(reducers, composeWithDevTools());

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <ProductList/>
            </Route>
            <Route path="/cart">
              <ShoppingCartLanding/>
            </Route>
            <Route path="/itemDetails">
              <ProductPage/>
            </Route>
        </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
