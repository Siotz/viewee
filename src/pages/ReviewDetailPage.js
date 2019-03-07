import React, { Component } from 'react'
import ReviewDetail from '../containers/ReviewDetail';
import Layout from '../components/Layout';

export default class ReviewDetailPage extends Component {
    render() {
        const { match } = this.props;
        const reviewId = match.params.reviewId;
        return (
            <Layout>
                <ReviewDetail reviewId={reviewId} />
            </Layout>
        )
    }
}
