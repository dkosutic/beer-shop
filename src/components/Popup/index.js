import React, { Component } from "react";
import "./popup.css";

export default class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  render() {
    return (
      <React.Fragment>
        {this.props.type === "hover" ? (
          <div className="popup-hover">
            <span style={this.props.style} className="popup popup-h">
              {this.props.text}
            </span>
            {this.props.children}
          </div>
        ) : (
          <div
            className="popup-click"
            onClick={() => this.setState({ open: !this.state.open })}
          >
            <span
              style={this.props.style}
              className={"popup" + (this.state.open ? " popup-v" : " popup-h")}
            >
              {this.props.text}
            </span>
            {this.props.children}
          </div>
        )}
      </React.Fragment>
    );
  }
}
Popup.defaultProps = {
  type: "hover",
  text: "Popup text",
  style: { backgroundColor: "#000", color: "#fff" }
};
