import React, { Component } from "react";
import s from "../scss/Comment.module.scss";
import CommentItem from "./CommentItem";

export default class CommentList extends Component {
  render() {
    return (
      <div>
        <CommentItem />
      </div>
    );
  }
}
