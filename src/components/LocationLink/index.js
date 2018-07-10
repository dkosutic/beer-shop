import React, { Component } from "react";
import "./link.css";
import { Link } from "react-router-dom";
export default class LocationLink extends Component {
  render() {
    return (
      <Link to={"/" + this.props.link}>
        <button className="custom-button-location">
          {this.props.title}
          {this.props.children}
        </button>
      </Link>
    );
  }
}
LocationLink.defaultProps = {
  link: "",
  title: "Home"
};
