import * as types from '../constants/ActionTypes';
import { loadProducts } from '../services/contentfulClient';

function fetchProductsRequest() {
  return {
    type: types.FETCH_PRODUCTS_REQUEST,
  };
}

function fetchProductsSuccess(products) {
  return {
    type: types.FETCH_PRODUCTS_SUCCESS,
    products,
  };
}

function fetchProductsFailure(error) {
  return {
    type: types.FETCH_PRODUCTS_FAILURE,
    error,
  };
}

export function fetchProducts() {
  return function(dispatch) {
    dispatch(fetchProductsRequest());
    return loadProducts().then((products) => {
        dispatch(fetchProductsSuccess(products));
      },
      (error) => {
        dispatch(fetchProductsFailure(error));
      }
    );
  };
}
