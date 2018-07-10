import React, { Component } from "react";
import "./card.css";

export default class Card extends Component {
  render() {
    return (
      <div className="custom-card">
        <div className="custom-card-item">
          {this.props.cardControls}
          <img src={this.props.imageUrl} alt="blank" />
        </div>
        <div className="custom-card-item custom-card-title">
          <h1>{this.props.title}</h1>
        </div>
        <div className="custom-card-item custom-card-text">
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

Card.defaultProps = {
  imageUrl: "",
  title: "Item",
  text: "No description available.",
  cardControls: ""
};
