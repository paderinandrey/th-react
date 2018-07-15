import React from 'react';

export default class ItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      price: 0,
      quantity: 0,
      sum: 0
    };
  }

  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      name: '',
      price: 0,
      quantity: 0,
      sum: 0
    });
  }

  handleAddItem(e) {
    e.preventDefault();
    const item = {
      name: this.state.name,
      price: parseInt(this.state.price),
      quantity: parseInt(this.state.quantity),
      sum: parseInt(this.state.sum)
    };
    this.props.addItem(item);
    this.handleClearForm(e);
  }

  render() {
    return (
      <div>
        <form onSubmit={ (e) => this.handleAddItem(e) } >
          <input type="text" value={this.state.name} onChange={e => this.setState({ name: e.target.value })} />
          <input type="text" value={this.state.price} onChange={e => this.setState({ price: e.target.value })}/>
          <input type="text" value={this.state.quantity} onChange={e => this.setState({ quantity: e.target.value })}/>
          <input type="text" value={this.state.sum} onChange={e => this.setState({ sum: e.target.value })}/>
          <button type="submit">Add Item</button>
        </form>
      </div>
    );
  }
}
