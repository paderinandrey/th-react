import CashReceiptItem from './CashReceiptItem';
import React from 'react';

class CashReceipt extends React.Component {
  renderItems() {
    return this.props.items.map((item, index) =>
      <CashReceiptItem
          key={index.toString()}
          value={item}
          num={index}
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
