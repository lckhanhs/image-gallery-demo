import React, { Component } from "react";
import PropTypes from "prop-types";
import Icon from 'react-fontawesome';
class SideBarComponent extends Component {
  render() {
    return (
      <div className="sidebar-component">
        <div className="sidebar-list">
          <div className="sidebar-item">
            <Icon name="home"/>
            <span className="title">Home</span>
          </div>
          <div className="sidebar-item">
            <Icon name="bell"/>
            <span className="title">Notifications</span>
          </div>
          <div className="sidebar-item">
            <Icon name="cog"/>
            <span className="title">Settings</span>
          </div>
          <div className="sidebar-item">
            <Icon name="power-off"/>
            <span className="title">Logout</span>
          </div>
        </div>
      </div>
    );
  }
}

SideBarComponent.propTypes = {};

export default SideBarComponent;
