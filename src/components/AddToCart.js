import React from 'react';
import { CartConsumer } from '../containers/CartContainer';

export default class AddToCart extends React.Component {
  render() {
    const { product, qty } = this.props;
    return (
      <div>
        <CartConsumer>
          {
            ({addToCart}) => {
              return(
                <button onClick={() => addToCart(product, qty)}>
                  ADD TO CART
                </button>
              );
            }
          }
        </CartConsumer>
      </div>
    );
  }
}
