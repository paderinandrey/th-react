import React from 'react';
import PropTypes from 'prop-types';

export default class TextBox extends React.Component {
  render() {
    return <span>{this.props.value}</span>;
  }
}

TextBox.propTypes = {
  value: PropTypes.string.isRequired,
};

TextBox.defaultProps = {
  value: '',
};
