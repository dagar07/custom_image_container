import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CustomImageContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imgContainer: null
    };
    this.onImageLoader = this.onImageLoader.bind(this);
    this.onImageError = this.onImageError.bind(this);
    this.getImgDim = this.getImgDim.bind(this);
    this.createPlaceholderContainer = this.createPlaceholderContainer.bind(this);
    this.getPlaceholderStyle = this.getPlaceholderStyle.bind(this);
  }

  componentDidMount() {
    const { src, imgStyle } = this.props;

    let imgElement;
    this.setState((prevState, props) => {
      return {
        imgContainer: React.createElement('img', {
          src,
          onLoad: this.onImageLoader,
          onError: this.onImageError,
          style: {
            ...imgStyle,
            opacity: 0,
          },
          ref: ref => {
            imgElement = ref;
          }
        })
      };
    }, () => {
      this.getImgDim(imgElement);
    });
  }

  onImageError() {
    // on error show the alt tag
    // if you want to show other thing just added here
    this.onImageLoader();
  }

  onImageLoader() {
    // call on image load
    const {
      src, animation, animationDuration, easing, alt, imgStyle
    } = this.props;
    const imgBox = React.createElement('img', {
      src,
      alt,
      style: {
        ...imgStyle,
        animation: `${animation} ${animationDuration} ${easing}`,
        maxWidth: '100%',
        maxHeight: '100%',
      }
    });

    this.setState((prevState, props) => {
      return {
        imgContainer:  React.createElement(
          'div',
          {
            style: this.getPlaceholderStyle(imgStyle.width, imgStyle.height)
          },
          React.cloneElement(imgBox)
        )
      };
    });
  }

  createPlaceholderContainer(width, height) {
    const { imgContainer } = this.state;

    const placeholder = React.createElement(
      'div',
      {
        style: this.getPlaceholderStyle(width, height),
      },
      React.cloneElement(imgContainer)
    );

    this.setState((prevState) => {
      return {
        imgContainer: placeholder
      };
    });
  }

  getImgDim(imgElement) {
    const that = this;
    const dimInterval = setInterval(() => {
      const { width, height } = imgElement ? imgElement : {width : 0, height: 0};
      if (width && height) {
        clearInterval(dimInterval);
        that.createPlaceholderContainer(width, height);
      }
    }, 5);
  }

  getPlaceholderStyle(imgWidth, imgHeight) {
    // this function is used to set styling for placeholder
    const {
      placeholderStyle,
      placeholderImg,
      color,
    } = this.props;
    let placeholderStyling = {...placeholderStyle};

    if (color) {
      // if color attribute is defined then set it's initial one
      placeholderStyling = {
        ...placeholderStyling,
        backgroundColor: color
      }
    }

    if(typeof (placeholderImg) === 'string') {
      placeholderStyling = {
        ...placeholderStyling,
        backgroundImage: `url(${placeholderImg})`
      };
    }

    return {
      ...placeholderStyling,
      height: `${imgHeight}px`,
      width: `${imgWidth}px`
    };
  }

  render() {
    return this.state.imgContainer;
  }
}

CustomImageContainer.propTypes = {
  src: PropTypes.string.isRequired, // image soure value
  alt: PropTypes.string.isRequired, // this is alternative naame for umage
  imgStyle: PropTypes.object, // used to provide styling to img style tag
  placeholderImg: PropTypes.string, // used to provide placholder bg image
  placeholderStyle: PropTypes.object, // uset to set styling for placeholder
  color: PropTypes.string, // if only color property set then used for placeholder bg color
  animation: PropTypes.string, // used to show animation in image
  animationDuration: PropTypes.string, // animation duration
  easing: PropTypes.string, // animation function
};

CustomImageContainer.defaultProps = {
  placeholderImg: null,
  placeholderStyle: {
    position: 'relative',
    display: 'inline-block',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  },
  imgStyle: {},
  color: '#fefefe',
  animation: 'blurIn',
  animationDuration: '1s',
  easing: 'ease-in',
};

export default CustomImageContainer;