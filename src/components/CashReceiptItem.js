import React from 'react';

class CashReceiptItem extends React.Component {
  handleRemoveItem(e, item) {
    e.preventDefault();
    this.props.removeItem(item);
  }

  render() {
    return (
      <li>
        <div>
          <span>{this.props.value.title} | {this.props.value.price} | {this.props.value.quantity} | {this.props.value.sum}
          <button onClick={ (e) => this.handleRemoveItem(e, this.props.index) }>x</button></span>
        </div>
      </li>
    );
  }
}

export default CashReceiptItem;
