import {combineReducers} from 'redux';
import updateCartReducer from './updateCartReducer';
import filterReducer from './filterReducer';
import viewProductReducer from './viewProductReducer';

export default combineReducers({
  products: filterReducer,
  shopping_cart: updateCartReducer,
  current_product: viewProductReducer
})
