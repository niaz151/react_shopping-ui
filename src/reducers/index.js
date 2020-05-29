import {combineReducers} from 'redux';
import updateCartReducer from './updateCartReducer';
import filterReducer from './filterReducer';

export default combineReducers({
  products: filterReducer,
  shopping_cart: updateCartReducer
})