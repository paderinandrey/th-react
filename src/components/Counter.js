import React from 'react';
import PropTypes from 'prop-types';

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { quantity: 1 };
    this.add = this.add.bind(this);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment(e) {
    e.preventDefault();
    this.setState(prevState => ({
      quantity: Number(prevState.quantity) + 1
    }), () => {
      this.props.updateQuantity(this.state.quantity);
    });
  }

  decrement(e) {
    e.preventDefault();

    if (this.state.quantity <= 1) {
      return this.state.quantity;
    }

    this.setState(prevState => ({
      quantity: Number(prevState.quantity) - 1
    }), () => {
      this.props.updateQuantity(this.state.quantity);
    });
  }

  add(e) {
    this.setState({
      [e.target.name]: e.target.value
    }, () => {
      this.props.updateQuantity(this.state.quantity);
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.decrement}>-</button>
        <input
          type="number"
          name="quantity"
          min={1}
          value={this.state.quantity}
          onChange={this.add}
        />
        <button onClick={this.increment}>+</button>
      </div>
    );
  }
}

Counter.propTypes = {
  quantity: PropTypes.number
};

Counter.defaultProps = {
  quantity: 1
};
