import React from 'react';
import Counter from './Counter';

export default class AddToCartForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { quantity: 1 };
    this.updateQuantity = this.updateQuantity.bind(this);
  }

  updateQuantity(quantity) {
    this.setState({ quantity });
  }

  render() {
    const { product, addToCart } = this.props;
    return (
      <div>
        <Counter updateQuantity={this.updateQuantity} />
        <button onClick={() => addToCart(product, this.state.quantity)}>
          ADD TO CART
        </button>
      </div>
    );
  }
}
