import React, { Component } from "react";
import "./button.css";

export default class HyperLinkButton extends Component {
  render() {
    return (
      <a
        className="custom-button-hyperlink"
        href={this.props.link}
        target="_blank"
      >
        {this.props.title}
      </a>
    );
  }
}
