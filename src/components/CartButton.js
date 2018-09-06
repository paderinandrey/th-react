import React from 'react';
import { cartPath } from '../helpers/routes';
import { withRouter } from 'react-router-dom';

class cartButton extends React.Component {
  handleClick(ev) {
    this.props.history.push(cartPath());
  }

  handleDrop(ev) {
    const { product } = JSON.parse(ev.dataTransfer.getData('selectedProduct'));
    this.props.addProductToCart(product);
  }

  render() {
    const { totalQty, totalSum } = this.props;
    const CartButtonStyle = {
      width: '120px',
      height: '50px'
    };

    return (
      <div>
        <button style={CartButtonStyle}
          onClick={(e) => this.handleClick(e)}
          onDrop={(e) => this.handleDrop(e)}
          onDragOver={(e) => e.preventDefault()}>
          Cart ({totalQty} - {totalSum}$)
        </button>
      </div>
    );
  }
}

export default withRouter(cartButton);
