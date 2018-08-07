import React from 'react';
import CatalogPage from './CatalogPage';
import { CartProvider } from '../containers/CartContainer';
import Cart from './Cart';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <CartProvider>
          <Cart />
          <CatalogPage />
        </CartProvider>
      </div>
    );
  }
}
