import React from 'react';
import ProductItem from './ProductItem';

export default class Catalog extends React.Component {
  render() {
    const { products } = this.props;
    return (
      <div>
        {
          products.map(product => (
            <ProductItem key={product.id} product={product} />)
          )
        }
      </div>
    );
  }
}
