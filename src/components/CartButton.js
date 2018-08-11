import React from 'react';
import { CartConsumer } from '../containers/CartContainer';
import { cartPath } from '../helpers/routes';
import { withRouter } from 'react-router-dom';

class cartButton extends React.Component {
  handleDrop(ev, addToCart) {
    const { product } = JSON.parse(ev.dataTransfer.getData('selectedProduct'));
    addToCart(product);
  }

  handleClick(ev) {
    this.props.history.push(cartPath());
  }

  render() {
    return (
      <CartConsumer>
        {
          ({cart, addToCart}) => (
            <button
              onClick={(e) => this.handleClick(e)}
              onDrop={(e) => this.handleDrop(e, addToCart)}
              onDragOver={(e) => e.preventDefault()}>
              Cart ({cart.length})
            </button>
          )
        }
      </CartConsumer>
    );
  }
}

export default withRouter(cartButton);
