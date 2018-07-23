import React from 'react';
import PropTypes from 'prop-types';

export default class Image extends React.Component {
  render() {
    const { alt, height, weight } = this.props;
    const params = {
      src: this.props.value.imageUrl,
      alt,
      height,
      weight,
    };
    return <img {...params} />;
  }
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  height: PropTypes.number,
  weight: PropTypes.number,
};

Image.defaultProps = {
  src: '',
  alt: 'no image available',
  height: 64,
  weight: 64,
};
