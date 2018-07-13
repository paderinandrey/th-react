import CashReceipt from './CashReceipt';
import ItemForm from './ItemForm';
import React from 'react';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
    };
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  addItem(item) {
    let items = this.state.items;
    items.push({
      value: item,
    });
    this.setState({ items });
  }

  removeItem(item) {
    let items = this.state.items.slice();
    items.splice(item, 1);
    this.setState({ items });
  }

  render() {
    return (
      <div>
        <CashReceipt
          items={ this.state.items || [] }
          removeItem={this.removeItem}
        />
        <ItemForm addItem={this.addItem} />
      </div>
    );
  }
}
