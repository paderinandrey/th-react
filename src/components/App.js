import CashReceipt from './CashReceipt';
import ItemForm from './ItemForm';
import goods from './goods.json';
import React from 'react';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: goods || [],
      totalQuantity: 0,
      totalSum: 0
    };
    this.calculateTotals(this.state.items);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  addItem(item) {
    let items = this.state.items;
    items.push({
      name: item.name,
      price: item.price,
      quantity: item.quantity,
      sum: item.sum
    });
    this.setState({ items });
    this.calculateTotals(items);
  }

  removeItem(item) {
    let items = this.state.items.slice();
    items.splice(item, 1);
    this.setState({ items });
    this.calculateTotals(items);
  }

  calculateTotals(items) {
    this.state.totalSum = Adder(items, 'sum');
    this.state.totalQuantity = Adder(items, 'quantity');
  }

  render() {
    return (
      <div>
        <CashReceipt
          items={ this.state.items || [] }
          removeItem={this.removeItem}
        />
        <ItemForm addItem={this.addItem} />
        <h4>Totals:</h4>
        <p>quantity: {this.state.totalQuantity}</p>
        <p>sum: {this.state.totalSum}</p>
      </div>
    );
  }
}

const Adder = (items = [], attr) => {
  return items.map((item) => item[attr])
    .reduce((acc, val) => acc + val);
};
