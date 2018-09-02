import React from 'react';
import { cartPath } from '../helpers/routes';
import { withRouter } from 'react-router-dom';

class cartButton extends React.Component {
  handleClick(ev) {
    this.props.history.push(cartPath());
  }

  render() {
    const { totalQty, totalSum, handleDrop } = this.props;
    const CartButtonStyle = {
      width: '120px',
      height: '50px'
    };

    return (
      <div>
        <button style={CartButtonStyle}
          onClick={(e) => this.handleClick(e)}
          onDrop={(e) => handleDrop(e)}
          onDragOver={(e) => e.preventDefault()}>
          Cart ({totalQty} - {totalSum}$)
        </button>
      </div>
    );
  }
}

export default withRouter(cartButton);
