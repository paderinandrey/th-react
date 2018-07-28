import React from 'react';
import PropTypes from 'prop-types';

export default class Price extends React.Component {
  render() {
    const { children } = this.props;
    return <span>{children}</span>;
  }
}

Price.propTypes = {
  value: PropTypes.number.isRequired,
};

Price.defaultProps = {
  value: 0,
};
