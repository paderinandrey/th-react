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
          <button onClick={ (e) => this.handleRemoveItem(e, this.props.num) }>del</button>
        </div>
        {this.props.value}
      </li>
    )
  }
}

export default CashReceiptItem;
