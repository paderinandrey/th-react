import React from 'react';
import PropTypes from 'prop-types';

export default class CartItem extends React.Component {
  render() {
    const { title, quantity, price } = this.props;
    return (
      <div>
       {title} - {price} - {quantity}
      </div>
    );
  }
}

CartItem.propTypes = {
  title: PropTypes.string,
  quantity: PropTypes.number,
  price: PropTypes.string
};
