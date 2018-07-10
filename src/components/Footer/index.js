import React, { Component } from "react";
import "./footer.css";
import Icons from "../../constants/Icons";

export default class Footer extends Component {
  render() {
    return (
      <footer className="custom-footer">
        <ul>
          {this.props.items.map((item, index) => {
            return (
              <li key={index}>
                <div className="custom-logo">
                  <a href={item.link} target="_blank">
                    <svg width="20" height="20" viewBox="0 0 1024 1024">
                      <path d={Icons[item.icon]}> </path>
                    </svg>
                    <span style={{ display: "block", fontSize: "13px" }}>
                      {item.title}
                    </span>
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </footer>
    );
  }
}
Footer.defaultProps = {
  items: []
};
