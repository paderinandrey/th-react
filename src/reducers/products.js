import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
}
from '~/src/actions/ProductsActions';

const INITIAL_STATE = {
  products: [],
  isFetching: false,
  error: '',
};

export function productsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return { ...state, isFetching: true, error: '' };
    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, products: action.products, isFetching: false, error: '' };
    case FETCH_PRODUCTS_FAILURE:
      return { ...state, isFetching: false, error: action.error };
    default:
      return state;
  }
}
