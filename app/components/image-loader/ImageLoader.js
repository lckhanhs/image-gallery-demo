import React, { Component } from "react";
import "./image-loader.scss";

class ImageLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isError: false
    };
  }

  render() {
    const { isError } = this.state;

    return (
      <React.Fragment>
        <img
          data-src={`${this.props.src}`}
          className={`lazyload image-loader${isError ? " d-none" : ''}`}
          alt={this.props.alt}
          onError={() => {
            this.onError();
          }}
        />
      </React.Fragment>
    );
  }

  onError() {
    this.setState({ isError: true });
    if(this.props.onError){
      this.props.onError();
    }
  }
}

export default ImageLoader;
