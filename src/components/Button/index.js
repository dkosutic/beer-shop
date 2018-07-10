import React, { Component } from "react";
import "./button.css";

const types = {
  neutral: "custom-button-neutral",
  primary: "custom-button-primary",
  bloody: "custom-button-bloody",
  green: "custom-button-green"
};
export default class Button extends Component {
  click = params => {
    if (this.props.action) {
      this.props.action(params);
    } else {
      console.log("no handler defined.");
    }
  };
  render() {
    return (
      <React.Fragment>
        <button
          className={"custom-button " + types[this.props.type]}
          disabled={this.props.disabled ? "disabled" : undefined}
          onClick={this.click}
        >
          {this.props.children}
        </button>
      </React.Fragment>
    );
  }
}
Button.defaultProps = {
  disabled: false,
  type: "neutral",
  action: function(params) {
    console.log("Clicked:" + params);
  }
};
