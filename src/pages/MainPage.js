import React, { Component } from "react";
import { Helmet } from "react-helmet";

import s from "../scss/MainPage.module.scss";
import Layout from "../components/Layout";
import ReviewDetailPage from "./ReviewDetailPage";
import ReviewEditorPage from "./ReviewEditorPage";

class MainPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            joy: false,
            joy2: false,
            joy3: false
        };
    }

    clickJoy() {
        this.setState({
            joy: true
        });
    }

    clickJoy2() {
        this.setState({
            joy2: true
        });
    }

    clickJoy3() {
        this.setState({
            joy3: true
        });
    }

    render() {
        return (
            <>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>뷰이, 리뷰를 보다</title>
                </Helmet>
                <Layout>
                    <div className={s.title}>
                        나는 리뷰된다, 고로 존재한다. <br />
                        Luna는 어서 귀국해서 Router를 구현하라! 구현하라! 구현하라!
                    </div>
                    <span onClick={() => this.clickJoy()} className={s.joy}>
                        리뷰 디테일
                    </span>
                    <span onClick={() => this.clickJoy2()} className={s.joy2}>
                        새 Review 쓰기
                    </span>
                    <span onClick={() => this.clickJoy3()} className={s.joy3}>
                        내 Review 수정
                    </span>
                    {this.state.joy ? <ReviewDetailPage /> : null}
                    {this.state.joy2 ? <ReviewEditorPage modify={false} /> : null}
                    {this.state.joy3 ? <ReviewEditorPage modify={true} /> : null}
                </Layout>
            </>
        );
    }
}

export default MainPage;
