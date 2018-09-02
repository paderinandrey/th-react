import * as types from '../constants/ActionTypes';

function addToCartUnsafe(product, quantity) {
  console.log("addToCartUnsafe");
  return {
    type: types.ADD_TO_CART,
    product,
    quantity,
  };
}

// export const addToCart = productId => (dispatch, getState) => {
//   if (getState().products.byId[productId].inventory > 0) {
//     dispatch(addToCartUnsafe(productId))
//   }
// }

export function addToCart(product, quantity = 1) {
  console.log("addToCart");
  return function(dispatch) {
    dispatch(addToCartUnsafe(product, quantity));
  };
  // return {
  //   type: types.ADD_TO_CART,
  //   product,
  //   quantity,
  // };
}
