import { ADD_TO_CART } from '../constants/ActionTypes';

const INITIAL_STATE = {
  items: [],
  totalQty: 0,
  totalSum: 0,
};

function getTotalSum(products) {
  return products.reduce((sum, i) => (
    sum += (i.quantity || 0) * i.price
  ), 0);
}

function getTotalQty(products) {
  return products.reduce((qty, i) => (qty += (i.quantity || 0)), 0);
}

function addToCart(state, product, qty = 1) {
  let cartItems = state.items;
  let productID = product.id;
  let isFound = cartItems.some(item => item.id === productID);

  if (isFound) {
    let index = cartItems.findIndex(x => x.id === productID);
    cartItems[index].quantity += Number(qty);
  }
  else {
    product.quantity = Number(qty);
    cartItems.push(product);
  }
  return { ...state,
    items: cartItems,
    totalQty: getTotalQty(cartItems),
    totalSum: getTotalSum(cartItems),
  };
}

export function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return addToCart(state, action.product, action.quantity);
    default:
      return state;
  }
}
