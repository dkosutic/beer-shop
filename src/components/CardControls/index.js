import React, { Component } from "react";
import "./cardControls.css";
import IconButton from "../IconButton";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../../redux/actions/actionCreators";
import { withRouter } from "react-router-dom";

class CardControls extends Component {
  render() {
    return (
      <div className="custom-card-controls">
        <div className="custom-cc-left">
          <IconButton
            iconName={this.props.item.favorite ? "star_full" : "star_empty"}
            type="orange"
            action={() => {
              this.props.toggleFavorite(this.props.item);
            }}
          />
        </div>
        <div className="custom-cc-right custom-cc-right-second">
          <IconButton
            iconName="info"
            type="primary"
            action={() => {
              this.props.openModal(this.props.item);
            }}
          />
        </div>
        <div className="custom-cc-right">
          <IconButton
            iconName="cart"
            type="green"
            action={() => {
              this.props.addToCart(this.props.item);
            }}
          />
        </div>
      </div>
    );
  }
}
CardControls.defaultProps = {
  item: { favorite: false }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(CardControls)
);
