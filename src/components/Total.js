import React from 'react';

export default class Total extends React.Component {
  render() {
    const { products } = this.props;
    return (
      <h3>
        Total:&nbsp;
          {products.reduce((sum, i) => (
            sum += (i.quantity || 0) * i.price
          ), 0)}
      </h3>
    );
  }
}
