import React from 'react';
import { cartPath } from '../helpers/routes';
import { withRouter } from 'react-router-dom';

class cartButton extends React.Component {
  handleClick(ev) {
    this.props.history.push(cartPath());
  }

  render() {
    const { quantity, handleDrop } = this.props;

    const divStyle = {
      width: '100px',
      height: '50px'
    };

    return (
      <div>
        <button style={divStyle}
          onClick={(e) => this.handleClick(e)}
          onDrop={(e) => handleDrop(e)}
          onDragOver={(e) => e.preventDefault()}>
          Cart ({quantity})
        </button>
      </div>
    );
  }
}

export default withRouter(cartButton);
