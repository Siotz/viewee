// 테스트 Layout 입니다.
import React, { Component } from "react";
import Header from "../containers/Header";
import Footer from "../containers/Footer";

export default class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        {this.props.children}
        <Footer />
      </React.Fragment>
    );
  }
}
