import React from 'react';
import PropTypes from 'prop-types';

export default class Total extends React.Component {
  render() {
    const { totalQty, totalSum } = this.props;
    return (
      <h3>
        Total Quantity:&nbsp;{ totalQty }
        <br/>
        Total:&nbsp;{ totalSum }
      </h3>
    );
  }
}

Total.propTypes = {
  totalQty: PropTypes.number,
  totalSum: PropTypes.number,
};
