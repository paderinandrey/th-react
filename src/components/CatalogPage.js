import React from 'react';
import Catalog from './Catalog';

export default class CatalogPage extends React.Component {
  render() {
    const { products } = this.props;
    return (
      <div>
        <Catalog products={ products } />
      </div>
    );
  }
}
