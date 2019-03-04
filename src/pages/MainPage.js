import React, { Component } from "react";
import { Helmet } from "react-helmet";

import s from "../scss/MainPage.module.scss";
import ReviewDetailPage from "./ReviewDetailPage";

class MainPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            ReviewDetail: false
        }
    }

    clickReviewDetail() {
        this.setState({
            ReviewDetail: true
        })
    }

    render() {
        return (
            <>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>뷰이, 리뷰를 보다</title>
                </Helmet>
                <div className={s.title}>
                    나는 리뷰된다, 고로 존재한다.<br />
                    Luna는 어서 귀국해서 Router를 구현하라! 구현하라! 구현하라!
                </div>
                <span onClick={() => this.clickReviewDetail()} className={s.joy}>Joy's test</span>
                {
                    this.state.ReviewDetail ? <ReviewDetailPage /> : null
                }
            </>
        );
    }
}

export default MainPage;
