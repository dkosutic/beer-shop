import React, { Component } from "react";
import "./grid.css";
import Card from "../Card";
import CardControls from "../CardControls";
export default class ItemGrid extends Component {
  render() {
    return (
      <div className="custom-grid">
        <div className="custom-grid-item">
          {this.props.items
            .filter((item, index) => index % 4 === 0)
            .map((item, index) => (
              <Card
                key={index}
                {...item}
                cardControls={
                  this.props.cardControls ? <CardControls item={item} /> : ""
                }
              />
            ))}
        </div>
        <div className="custom-grid-item">
          {this.props.items
            .filter((item, index) => index % 4 === 1)
            .map((item, index) => (
              <Card
                key={index}
                {...item}
                cardControls={
                  this.props.cardControls ? <CardControls item={item} /> : ""
                }
              />
            ))}
        </div>
        <div className="custom-grid-item">
          {this.props.items
            .filter((item, index) => index % 4 === 2)
            .map((item, index) => (
              <Card
                key={index}
                {...item}
                cardControls={
                  this.props.cardControls ? <CardControls item={item} /> : ""
                }
              />
            ))}
        </div>
        <div className="custom-grid-item">
          {this.props.items
            .filter((item, index) => index % 4 === 3)
            .map((item, index) => (
              <Card
                key={index}
                {...item}
                cardControls={
                  this.props.cardControls ? <CardControls item={item} /> : ""
                }
              />
            ))}
        </div>
      </div>
    );
  }
}
ItemGrid.defaultProps = {
  items: [],
  cardControls: false
};
