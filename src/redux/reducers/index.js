import {combineReducers} from 'redux';
import updateCartReducer from './updateCartReducer';

export default combineReducers({
  shopping_cart: updateCartReducer
})