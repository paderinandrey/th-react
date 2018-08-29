import React from 'react';
import PropTypes from 'prop-types';

export default class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      photos: this.props.photoUrls || []
    };
  }

  slideTo(i) {
    this.setState({ currentIndex: i });
  }

  slideNext() {
    if (this.state.currentIndex >= this.state.photos.length - 1) {
      return this.state.currentIndex;
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1
    }));
  }

  slidePrev() {
    if (this.state.currentIndex <= 0) {
      return this.state.currentIndex;
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1
    }));
  }

  renderPhoto(photoUrl, i) {
    const { height, weight } = this.props;
    const divStyle = {
      display: 'inline'
    };
    return (
      <div style={divStyle} key={"img-"+i}>
        <img src={photoUrl}
             style={{ weight, height}}
             onClick={() => this.slideTo(i)}
        />
      </div>
    );
  }

  render() {
    const divStyle = {
      weight: '640px',
      height: '480px'
    };
    const { photos } = this.state;
    return (
      <div>
        <img src={ photos[this.state.currentIndex ] } style={divStyle}/>
        <div>
          <button onClick={() => this.slidePrev()}>Prev</button>
          <button onClick={() => this.slideNext()}>Next</button>
        </div>
        <div>
          {photos.map((photoUrl, i) => this.renderPhoto(photoUrl, i))}
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
