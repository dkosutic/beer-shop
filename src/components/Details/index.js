import React, { Component } from "react";
import "./details.css";

export default class Details extends Component {
  render() {
    return (
      <div className="custom-details">
        <div className="custom-detail-name">
          <h1>{this.props.item.title}</h1>
        </div>
        <table>
          <tbody>
            {this.props.headers.map((header, index) => {
              return (
                <tr key={index}>
                  <td className="custom-details-header">{header.title}</td>
                  <td className="custom-details-text">
                    {header.type === "img" ? (
                      <img
                        className="custom-details-img"
                        src={this.props.item[header.name]}
                        alt="blank"
                      />
                    ) : (
                      this.props.item[header.name]
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
Details.defaultProps = {
  item: {},
  headers: []
};
