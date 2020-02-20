import React, { Component } from "react";
import Cookies from "js-cookie";
import { connect } from "react-redux";
class PublicLayout extends Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
    const token = Cookies.get('token');
    if(token){
      window.location.href = '/';
    }
  }

  render() {
    return <div className="wrapper">{this.props.children}</div>;
  }
}
export default PublicLayout;
