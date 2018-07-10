import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import headerImg from "../assets/img/header.png";
import Header from "../components/Header";
import Layout from "../components/Layout";
import { Provider } from "react-redux";
import store from "../redux/store";
import { linkGroup, socialLinks } from "../constants/app/index";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header img={headerImg} />
          <Router>
            <Layout nav={linkGroup} footer={socialLinks} />
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
