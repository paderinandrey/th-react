import React from 'react';
import Catalog from './Catalog';
import products from '../constants/Products';

export default class CatalogPage extends React.Component {

  render() {
    return <Catalog products={products || []} />;
  }
}
