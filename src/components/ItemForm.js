import React from 'react';

export default class ItemForm extends React.Component {
  handleAddItem(e, item) {
    e.preventDefault();
    this.props.addItem(item);
    this.itemForm.reset();
  }

  render() {
    return (
      <div>
        <form ref={ (input) => this.itemForm = input } onSubmit={ (e) => this.handleAddItem(e, this.item.value) } >
          <input type="text" ref={ (input) => this.item = input } />
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}
