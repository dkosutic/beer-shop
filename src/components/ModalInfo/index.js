import React, { Component } from "react";
import "./modal.css";
import Details from "../Details";
import Button from "../Button";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../../redux/actions/actionCreators";
import { detailsPanel } from "../../constants/app/index";

class ModalInfo extends Component {
  render() {
    return (
      <div className={this.props.modal.open ? " open" : " closed"}>
        <div className="custom-modal" onClick={() => this.props.closeModal()} />
        <div className="custom-modal-main">
          <Details item={this.props.modal.item} headers={detailsPanel} />
          <div className="custom-modal-controls">
            <Button type="bloody" action={() => this.props.closeModal()}>
              Close
            </Button>
            <Button
              type="green"
              action={() => this.props.addToCart(this.props.modal.item)}
            >
              Add to Cart
            </Button>
            <Button
              type={this.props.modal.item.favorite ? "primary" : "neutral"}
              action={() => {
                this.props.toggleFavorite(this.props.modal.item);
                this.props.updateModal(this.props.modal.item);
              }}
            >
              Favorite
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
ModalInfo.defaultProps = {
  modal: {
    item: {},
    open: false
  }
};

function mapStateToProps(state) {
  return { modal: state.modal };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalInfo);
