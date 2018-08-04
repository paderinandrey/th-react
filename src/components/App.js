import React from 'react';
import CatalogPage from './CatalogPage';
import { CartProvider } from '../containers/CartContainer';
import Cart from './Cart';
import products from '../../constants/Products';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <CartProvider>
          <CatalogPage products={products || []} />
          <Cart />
        </CartProvider>
      </div>
    );
  }
}
