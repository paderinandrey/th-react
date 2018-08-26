import React from 'react';
import PropTypes from 'prop-types';

export default class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      items: this.props.photoUrls || []
    };
  }

  slideTo(i) {
    this.setState({ currentIndex: i });
  }

  renderPhoto(photoUrl, i) {
    const { height, weight } = this.props;
    const divStyle = {
      display: 'inline'
    };

    return (
      <div style={divStyle}>
        <img src={photoUrl} style={{ weight, height}} onClick={() => this.slideTo(i)}/>
      </div>
    );
  }

  render() {

    const divStyle = {
      weight: '640px',
      height: '480px'
    };
    return (
      <div>
        <img src={ this.state.items[this.state.currentIndex ] } style={divStyle}/>
        <div>
          {this.state.items.map((photoUrl, i) => this.renderPhoto(photoUrl, i))}
        </div>
      </div>
    );
  }
}

Gallery.propTypes = {
  photoUrls: PropTypes.arrayOf(PropTypes.string).isRequired
};

Gallery.defaultProps = {
  height: '128px',
  weight: '128px',
};
