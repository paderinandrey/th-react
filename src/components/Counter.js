import React from 'react';
import PropTypes from 'prop-types';

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
    this.put = this.put.bind(this);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment(e) {
    e.preventDefault();
    this.setState(prevState => ({
      value: Number(prevState.value) + 1
    }));
  }

  decrement(e) {
    e.preventDefault();
    this.setState(prevState => ({
      value: Number(prevState.value) - 1
    }));
  }

  put(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  reset() {
    this.setState({ value: 1 });
  }

  render() {
    return (
      <div>
        <button onClick={this.decrement}>-</button>
        <input
          type="number"
          name="value"
          value={this.state.value}
          onChange={this.put}
        />
        <button onClick={this.increment}>+</button>
      </div>
    );
  }
}

Counter.propTypes = {
  value: PropTypes.number
};
