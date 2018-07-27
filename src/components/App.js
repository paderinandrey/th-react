import React from 'react';
import CashReceipt from './CashReceipt';
import CatalogPage from './CatalogPage';
import products from '../../constants/Products';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <CatalogPage products={products || []} />
        <CashReceipt items={products} />
      </div>
    );
  }
}
