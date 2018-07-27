import React from 'react';
import generate from 'nanoid/generate';

const INITIAL_STATE = {
  title: '',
  price: 0,
  quantity: 0,
};

export default class ItemForm extends React.Component {
  constructor() {
    super();
    this.state = INITIAL_STATE;
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
  }

  handleClearForm(e) {
    e.preventDefault();
    this.setState(INITIAL_STATE);
  }

  handleAddItem(e) {
    e.preventDefault();
    const item = {
      id: generate('1234567890abcdef', 10),
      title: this.state.title,
      price: parseFloat(this.state.price),
      quantity: parseInt(this.state.quantity, 10),
    };
    this.props.addItem(item);
    this.handleClearForm(e);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    const { title, price, quantity } = this.state;
    return (
      <div>
        <form onSubmit={this.handleAddItem} >
          <input type="text" name="title" value={title} onChange={this.handleChange} />
          <input type="number" name="price" step="0.1" min="0" max="100" value={price} onChange={this.handleChange} />
          <input type="number" name="quantity" min="0" max="100" value={quantity} onChange={this.handleChange} />
          <button type="submit">Add Item</button>
        </form>
      </div>
    );
  }
}
