import React from 'react';
import Counter from './Counter';
import { CartConsumer } from '../containers/CartContainer';

export default class AddToCart extends React.Component {
  constructor() {
    super();
    this.state = { quantity: 1 };
    this.updateQuantity = this.updateQuantity.bind(this);
  }

  updateQuantity(quantity) {
    this.setState({ quantity });
  }

  render() {
    const { product } = this.props;
    return (
      <div>
        <Counter updateQuantity={this.updateQuantity} />
        <CartConsumer>
          {
            ({addToCart}) => {
              return(
                <button onClick={() => addToCart(product, this.state.quantity)}>
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
