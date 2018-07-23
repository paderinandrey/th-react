import React from 'react';
import PropTypes from 'prop-types';

export default class Price extends React.Component {
  render() {
    return <span>{this.props.value}</span>;
  }
}

Price.propTypes = {
  value: PropTypes.number.isRequired,
};

Price.defaultProps = {
  value: 0,
};
