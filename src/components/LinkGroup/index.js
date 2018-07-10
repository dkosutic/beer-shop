import React, { Component } from "react";
import "./linkgroup.css";
import LocationLink from "../../components/LocationLink";

export default class LinkGroup extends Component {
  render() {
    return (
      <React.Fragment>
        <nav>
          <ul>
            {this.props.links.map((item, key) => (
              <li className="custom-li" key={key}>
                <LocationLink link={item.link} title={item.title} />
              </li>
            ))}
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}
