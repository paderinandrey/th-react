import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import { CartConsumer } from '../containers/CartContainer';
import CartItem from './CartItem';
import Total from './Total';
import { emptyCartMsg } from '../helpers/messages';
import { rootPath } from '../helpers/routes';

export default class Cart extends React.Component {
  handleDrop(ev, addToCart) {
    const { product } = JSON.parse(ev.dataTransfer.getData('selectedProduct'));
    addToCart(product);
  }

  render() {
    return (
      <div>
        <h3>Your Cart</h3>
        <CartConsumer>
          {
            ({cart, addToCart, isCartEmpty}) => (
              <div>
                {isCartEmpty() ?
                  <Redirect to={{
                    pathname: rootPath(),
                    state: { message: emptyCartMsg() }
                  }}/>
                  :
                  <div
                    onDrop={(e) => this.handleDrop(e, addToCart)}
                    onDragOver={(e) => e.preventDefault()}>
                    {cart.map((item) => (<CartItem key={ item.id } { ...item } />))}
                    <Total products={cart} />
                  </div>
                }
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
