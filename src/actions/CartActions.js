import * as types from '../constants/ActionTypes';

function addToCartUnsafe(product, quantity) {
  return {
    type: types.ADD_TO_CART,
    product,
    quantity,
  };
}

export function addToCart(product, quantity = 1) {
  return function(dispatch) {
    dispatch(addToCartUnsafe(product, quantity));
  };
}
