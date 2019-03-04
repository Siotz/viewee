// 테스트 Layout 입니다.
import React, { Component } from "react";
import Header from "../containers/Header";

export default class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}
