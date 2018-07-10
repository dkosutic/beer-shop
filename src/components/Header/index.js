import React, { Component } from "react";
import "./header.css";

export default class Header extends Component {
  render() {
    return (
      <header className="custom-header">
        <div className="custom-title">
          <h1>{this.props.title}</h1>
        </div>
      </header>
    );
  }
}
Header.defaultProps = {
  title: "Beer Shop"
};
