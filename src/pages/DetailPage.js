import React, { Component } from "react";
import Layout from "../components/Layout";
import Detail from "../containers/Detail";

export default class DetailPage extends Component {
  render() {
    const { match } = this.props;
    const dramaId = match.params.dramaId;
    console.log(dramaId);
    return (
      <Layout>
        <Detail dramaId={dramaId} />
      </Layout>
    );
  }
}
