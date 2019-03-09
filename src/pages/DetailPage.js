import React, { Component } from 'react'
import Layout from '../components/Layout';
import Detail from '../containers/Detail';

export default class DetailPage extends Component {
  render() {
    return (
      <Layout>
          <Detail />
      </Layout>
    )
  }
}
