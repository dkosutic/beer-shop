import React, { Component } from "react";
import "./button.css";
import Icons from "../../constants/Icons";

const iconSize = {
  small: 12,
  medium: 16,
  big: 20
};

const iconTypes = {
  neutral: "custom-icon-neutral",
  primary: "custom-icon-primary",
  bloody: "custom-icon-bloody",
  orange: "custom-icon-orange",
  green: "custom-icon-green"
};
export default class IconButton extends Component {
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
          className={
            "custom-button-icon custom-icon-" +
            this.props.size +
            " " +
            iconTypes[this.props.type]
          }
          disabled={this.props.disabled ? "disabled" : undefined}
          onClick={this.click}
        >
          <svg
            width={iconSize[this.props.size]}
            height={iconSize[this.props.size]}
            viewBox="0 0 1024 1024"
          >
            <path d={Icons[this.props.iconName]}> </path>
          </svg>
          {this.props.children}
        </button>
      </React.Fragment>
    );
  }
}

IconButton.defaultProps = {
  iconName: "home",
  size: "medium",
  type: "neutral",
  action: function(params) {
    console.log("Clicked:" + params);
  }
};
