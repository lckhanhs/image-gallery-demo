import HeaderComponent from "./header";
import FooterComponent from "./footer";
import React, { Component } from "react";
import SideBarComponent from "./side-bar";
import Cookies from "js-cookie";
import Navigator from "./navigator";
import Utils from "../Utils/utils";

class PrivateLayout extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    const token = Cookies.get("token");
    if (!token) {
      window.location.href = "/login";
    }
  }
  render() {

    return (
      <div className={`wrapper${Utils.osDetect().isMobile()?' mobile':''}${Utils.osDetect().get()}`}>
        {/* <HeaderComponent /> */}
        <SideBarComponent />
        {this.props.children}
        {/* <FooterComponent /> */}
      </div>
    );
  }
}
export default PrivateLayout;
