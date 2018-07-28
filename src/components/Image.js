import React from 'react';
import PropTypes from 'prop-types';

export default class Image extends React.Component {
  render() {
    const { src, alt, height, weight } = this.props;
    const attrs = {
      src,
      alt,
    };
    return <img {...attrs} style={{ weight, height}} />;
  }
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  height: PropTypes.string,
  weight: PropTypes.string,
};

Image.defaultProps = {
  src: '',
  alt: 'no image available',
  height: '64px',
  weight: '64px',
};
