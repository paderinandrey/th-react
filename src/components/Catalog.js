import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from './ProductItem';
import { loadingProductsErr, loadingMsg } from '~/src/helpers/messages';

export default class Catalog extends React.Component {
  render() {
    const { products, isFetching, error, addToCart } = this.props;

    if (error) {
      return <p>{ loadingProductsErr() }</p>;
    }

    if (isFetching) {
      return <p>{ loadingMsg() }</p>;
    }
    else {
      return (
        <div>
          {products.map(product => (
            <ProductItem
              key={product.id}
              product={ product }
              addToCart={ addToCart }
            />)
          )}
        </div>
      );
    }
  }
}

Catalog.propTypes = {
  products: PropTypes.array.isRequired,
  error: PropTypes.string,
  isFetching: PropTypes.bool.isRequired,
};
