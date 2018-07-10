import React, { Component } from "react";
import "./cart.css";
import Button from "../Button";
import SimpleTable from "../SimpleTable";
import { dataTable } from "../../constants/app/index";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../../redux/actions/actionCreators";
import { withRouter } from "react-router-dom";

class Cart extends Component {
  render() {
    return (
      <div className="custom-cart">
        <SimpleTable headers={dataTable.headers} rows={this.props.cart} />
        <div className="custom-buttons">
          <Button type="primary">Checkout</Button>
          <Button type="bloody" action={() => this.props.removeAllFromCart()}>
            Remove All
          </Button>
        </div>
      </div>
    );
  }
}

SimpleTable.defaultProps = {
  rows: [],
  headers: []
};

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Cart)
);
