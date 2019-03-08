import React, { Component } from "react";
import s from "../scss/DramaDataView.module.scss";

export default class DramaDataView extends Component {
  render() {
    return (
      <section className={s.DramaDataView}>
        <div className={s.DataTitle}>
          <h4>
            <a href="#description">줄거리</a>
          </h4>
          <h4>
            <a href="#actor-staff">출연&amp;스텝</a>
          </h4>
          <h4>
            <a href="#rating-graph">평점 그래프</a>
          </h4>
          <h4>
            <a href="#comment">코멘트</a>
          </h4>
          <h4>
            <a href="#review">리뷰</a>
          </h4>
          <h4>
            <a href="#stillcut">스틸컷</a>
          </h4>
        </div>
        <div id="description">{this.props.description}</div>
        <div id="actor-staff">출연</div>
        <div id="rating-graph">그래프</div>
        <div id="comment">ㅋ</div>
        <div id="review">ㄹ</div>
        <div id="stillcut">ㅅ</div>
      </section>
    );
  }
}
