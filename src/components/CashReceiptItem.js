import React from 'react';

export default class CashReceiptItem extends React.Component {
  constructor(props) {
    super(props);
    const { price } = props.value;
    const quantity = props.value.quantity || 0;
    this.state = {
      quantity: quantity,
      sum: price * quantity
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleRemoveItem(item, e) {
    e.preventDefault();
    this.props.removeItem(item);
  }

  handleChange(price, e) {
    let quantity = parseInt(e.target.value, 10) || 0;
    this.setState({
      [e.target.name]: quantity,
      sum: quantity * price
    });
  }

  render() {
    const { index } = this.props;
    const { title, price } = this.props.value;
    return (
      <li>
        <form>
          {title}
          {price}
          <input
            type="number"
            min="0"
            max="100"
            name="quantity"
            value={this.state.quantity}
            onChange={e => this.handleChange(price, e)}
          />
          {this.state.sum}
          <button onClick={e => this.handleRemoveItem(index, e)}>x</button>
        </form>
      </li>
    );
  }
}
