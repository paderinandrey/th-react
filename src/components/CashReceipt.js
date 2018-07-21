import CashReceiptItem from './CashReceiptItem';
import React from 'react';

class CashReceipt extends React.Component {
  renderItems() {
    return this.props.items.map((item) =>
      <CashReceiptItem
          key={item.id}
          value={item}
          index={item.id}
          removeItem={this.props.removeItem}
        />
    );
  }

  render() {
    return (
      <div>
        <ul> {this.renderItems()} </ul>
      </div>
    );
  }
}

export default CashReceipt;
