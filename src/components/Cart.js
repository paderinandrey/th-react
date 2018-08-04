import React from 'react';
import PropTypes from 'prop-types';
import { CartConsumer } from '../containers/CartContainer';
import CartItem from './CartItem';
import Total from './Total';

export default class Cart extends React.Component {
  handleDrop(ev, addToCart) {
    const { product, qty } = JSON.parse(ev.dataTransfer.getData('selProduct'));
    addToCart(product, qty);
  }

  render() {
    return (
      <div>
        <h3>Your Cart</h3>
        <CartConsumer>
          {
            ({cart, addToCart}) => (
              <div
                onDrop={(e) => this.handleDrop(e, addToCart)}
                onDragOver={(e) => e.preventDefault()}>
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
  addToCart: PropTypes.func,
};
