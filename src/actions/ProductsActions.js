import { loadProducts } from '../services/contentfulClient';

export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

function fetchProductsRequest() {
  return {
    type: FETCH_PRODUCTS_REQUEST,
  };
}

function fetchProductsSuccess(products) {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    products,
  };
}

function fetchProductsFailure(error) {
  return {
    type: FETCH_PRODUCTS_FAILURE,
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
