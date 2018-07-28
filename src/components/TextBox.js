import React from 'react';
import PropTypes from 'prop-types';

export default class TextBox extends React.Component {
  render() {
    const { children } = this.props;
    return <span>{children}</span>;
  }
}

TextBox.propTypes = {
  value: PropTypes.string.isRequired,
};

TextBox.defaultProps = {
  value: '',
};
