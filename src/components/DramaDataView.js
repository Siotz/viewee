import React, { Component } from "react";
import s from "../scss/DramaDetailCommon.module.scss";
import DramaRatingGraph from "../containers/DramaRatingGraph";
import CommentList from "../containers/CommentList";
import DramaStillcuts from "../containers/DramaStillcuts";
import DramaSeries from "../containers/DramaSeries";

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
          <h4>
            <a href="#series">시리즈</a>
          </h4>
        </div>
        <div id="description">{this.props.description}</div>
        <div id="actor-staff">
          <h4>출연&amp;스텝</h4>출연
        </div>
        <div id="rating-graph">
          <h4>평점 그래프</h4>

          <DramaRatingGraph />
        </div>
        <div id="comment">
          <h4>코멘트</h4>
          <CommentList />
        </div>
        <div id="review">
          <h4>리뷰</h4>ㄹ
        </div>
        <div id="stillcut">
          <h4>스틸컷</h4>
          <DramaStillcuts />
        </div>
        <div id="series">
          <h4>시리즈</h4>
          <DramaSeries />
        </div>
      </section>
    );
  }
}
