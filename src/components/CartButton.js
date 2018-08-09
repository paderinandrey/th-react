import React from 'react';
import { CartConsumer } from '../containers/CartContainer';
import { rootPath, cartPath } from '../helpers/routes';
import { withRouter } from 'react-router-dom';
import { emptyCartMsg } from '../helpers/messages';

class cartButton extends React.Component {
  handleDrop(ev, addToCart) {
    const { product } = JSON.parse(ev.dataTransfer.getData('selectedProduct'));
    addToCart(product);
  }

  handleClick(e, cart) {
    const { history } = this.props;
    cart.length > 0 ? history.push(cartPath()) :
      history.push(rootPath(), { message: emptyCartMsg() });
  }

  render() {
    return (
      <CartConsumer>
        {
          ({cart, addToCart}) => (
            <button
              onClick={(e) => this.handleClick(e, cart)}
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
