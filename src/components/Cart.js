import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import CartItem from './CartItem';
import Total from './Total';
import { emptyCartMsg } from '../helpers/messages';
import { rootPath } from '../helpers/routes';

export default class Cart extends React.Component {
  render() {
    const { items, totalQty, totalSum } = this.props;

    if (items.length == 0) {
      return (
        <Redirect to={{
          pathname: rootPath(),
          state: { message: emptyCartMsg() }
        }}/>
      );
    }

    return (
      <div>
        <h3>Your Cart</h3>
        { items.map((item) => (<CartItem key={ item.id } { ...item } />)) }
        <Total totalQty={ totalQty } totalSum={ totalSum } />
      </div>
    );
  }
}

Cart.propTypes = {
  items: PropTypes.array,
  totalQty: PropTypes.number,
  totalSum: PropTypes.number,
};
