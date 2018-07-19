import React, { Component } from "react";
import "./layout.css";
import ItemGrid from "../ItemGrid";
import Footer from "../Footer";
import LinkGroup from "../LinkGroup";
import Cart from "../Cart";
import ModalInfo from "../ModalInfo";
import { Switch, Route } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../../redux/actions/actionCreators";
import { withRouter } from "react-router-dom";
import { NotFound, Empty, Broken, Loading } from "../../constants/app/index";
import beers from "../../constants/data";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      error: false
    };
  }
  render() {
    if (this.state.error) {
      return <Broken />;
    }

    if (this.state.isLoading) {
      return <Loading />;
    }

    return (
      <div className="custom-layout">
        <div className="custom-layout-item">
          <Switch>
            <Route
              exact={true}
              path="/"
              render={() => (
                <ItemGrid items={this.props.items} cardControls={true} />
              )}
            />
            <Route
              path="/home"
              render={() => (
                <ItemGrid items={this.props.items} cardControls={true} />
              )}
            />
            <Route
              path="/favorites"
              render={() => {
                let favorites = this.props.items.filter(
                  element => element.favorite === true
                );
                if (favorites.length) {
                  return <ItemGrid items={favorites} cardControls={true} />;
                } else {
                  return <Empty name={"Favorites"} />;
                }
              }}
            />
            <Route
              path="/cart"
              render={() => {
                if (this.props.cart.length) {
                  return <Cart />;
                } else {
                  return <Empty name={"Cart"} />;
                }
              }}
            />
            <Route component={NotFound} />
          </Switch>
        </div>
        <div className="custom-layout-info-panel">
          <div className="panel-nav">
            <LinkGroup links={this.props.nav} />
          </div>
          <div className="panel-footer">
            <Footer items={this.props.footer} />
          </div>
        </div>
        <ModalInfo />
      </div>
    );
  }
  componentDidMount() {
    this.setState({ isLoading: false });
    let data = beers.map(element => {
      return {
        title: element.name,
        imageUrl: element.image_url,
        id: element.id,
        text: element.description,
        favorite: false
      };
    });
    this.props.loadItems(data);
  }
}
Layout.defaultProps = {
  nav: [],
  footer: [],
  items: []
};

function mapStateToProps(state) {
  return {
    items: state.items,
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
  )(Layout)
);
