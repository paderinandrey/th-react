import CashReceiptItem from './CashReceiptItem';
import ItemForm from './ItemForm';
import Total from './Total';
import React from 'react';

export default class CashReceipt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items || [],
    };
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  addItem(item) {
    let items = [...this.state.items, item];
    this.setState({ items });
  }

  removeItem(itemId) {
    let items = this.state.items.filter(
      item => item.id !== itemId
    );
    this.setState({ items });
  }

  renderItems() {
    return this.state.items.map((item) =>
      <CashReceiptItem
          key={item.id}
          value={item}
          index={item.id}
          removeItem={this.removeItem}
      />
    );
  }

  render() {
    return (
      <div>
        <ul>{this.renderItems()}</ul>
        <ItemForm addItem={this.addItem} />
        <Total products={this.state.items} />
      </div>
    );
  }
}
