import React, { Component } from "react";
import DetailReview from "./DetailReview";

export default class ReviewList extends Component {
  // page를 판별해서 1. 리뷰를 2개만 가져오거나, 2. 모든 리뷰를 가져온다.
  render() {
    return (
      <div>
        <DetailReview />
      </div>
    );
  }
}
