import React from 'react';
import PropTypes from 'prop-types';
import { CartConsumer } from '../containers/CartContainer';
import CartItem from './CartItem';
import Total from './Total';

export default class Cart extends React.Component {
  render() {
    return (
      <div>
        <h3>Your Cart</h3>
        <CartConsumer>
          {
            ({cart}) => (
              <div>
                {cart.map((item) => (<CartItem key={item.id} {...item} />))}
                <Total products={cart} />
              </div>
            )
          }
        </CartConsumer>
      </div>
    );
  }
}

Cart.propTypes = {
  cart: PropTypes.array,
};
