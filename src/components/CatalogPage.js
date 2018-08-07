import React from 'react';
import Catalog from './Catalog';
import { CartProvider } from '../containers/CartContainer';
import products from '../constants/Products';

export default class CatalogPage extends React.Component {
  render() {
    return (
      <CartProvider>
        <Catalog products={products || []} />
      </CartProvider>
    );
  }
}
