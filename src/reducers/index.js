import { combineReducers } from 'redux';
import { productsReducer } from './products';
import { cart } from './cart';

export const rootReducer = combineReducers({
    products: productsReducer,
    cart,
});
