import React, { Component } from "react";
import { Helmet } from "react-helmet";

import s from "../scss/MainPage.module.scss";
import Layout from "../components/Layout";
import api from "../api";
import { fillDramas } from "../store/ducks/dramas";
import { connect } from "react-redux";

class MainPage extends Component {
  async componentDidMount() {
    const { dramas, fillDramas } = this.props;
    if (dramas.length === 0) {
      const { data } = await api.get("/dramas");
      fillDramas(data);
    }
  }

  render() {
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>뷰이, 리뷰를 보다</title>
        </Helmet>
        <Layout>
          <div className={s.title}>나는 리뷰된다, 고로 존재한다.</div>
        </Layout>
      </>
    );
  }
}

const mapStateToProps = state => ({
  dramas: state.dramas.dramas
});

const mapDispatchToProps = {
  fillDramas
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
