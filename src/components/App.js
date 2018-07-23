import CashReceipt from './CashReceipt';
import ItemForm from './ItemForm';
import Image from './Image';
import TextBox from './TextBox';
import Price from './Price';
import goods from '../../constants/Products';
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
    let items = [...this.state.items, item];
    this.calculateTotals(items);
    this.setState({ items });
  }

  removeItem(itemId) {
    let items = this.state.items.filter(
      item => item.id !== itemId
    );
    this.calculateTotals(items);
    this.setState({ items });
  }

  calculateTotals(items) {
    this.state.totalSum = Adder(items, 'sum');
    this.state.totalQuantity = Adder(items, 'quantity');
  }

  render() {
    const imageSettings = {
      weight: 128,
      height: 128,
    };

    return (
      <div>
        <Image value={goods.pop()} {...imageSettings}/>
        <TextBox value={'TextBox Component'} />
        <Price value={12} />
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
    .reduce((acc, val) => acc + val, 0);
};
