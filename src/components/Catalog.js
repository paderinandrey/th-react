import React from 'react';
import ProductCard from './ProductCard';

export default class Catalog extends React.Component {
  render() {
    const { products } = this.props;
    return (
      <div>
      {products.map(product =>
        <ProductCard key={product.id} product={product} />)
      }
    </div>);
  }
}
