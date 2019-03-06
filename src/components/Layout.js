// 테스트 Layout 입니다.
import React, { Component } from "react";
import Header from "../containers/Header";
import Footer from "../containers/Footer";
import { connect } from "react-redux";
import { changePage } from "../store/ducks/page";
import MainHeader from "./MainHeader";
import LogoHeader from "./LogoHeader";

class Layout extends Component {
  componentDidMount() {
    console.log(this.props.page);
  }
  render() {
    const { page } = this.props;
    return (
      <React.Fragment>
        {// 메인페이지일 때
        page === "main" ? (
          <MainHeader />
        ) : // 리뷰 작성 페이지 혹은 유저 페이지일 때
        page === "reviewPosting" || page === "user" ? (
          <LogoHeader />
        ) : (
          // 이외 페이지일 때
          <Header />
        )}
        <Header />
        {this.props.children}
        <Footer />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  page: state.page.page
});

const mapDispatchToProps = {
  changePage
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
