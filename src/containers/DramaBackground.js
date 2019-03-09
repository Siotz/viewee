import React, { Component } from "react";
import s from "../scss/DramaDetailCommon.module.scss";

export default class DramaBackground extends Component {
  constructor(props) {
    super(props);

    this.state = {
      background:
        "https://s3.amazonaws.com/lyl-resto-heroku/5731ad5dacc38c00030db98b/5731ae4eacc38c00030ddc50/maxresdefault.jpg",
      title: "워킹데드"
    };
  }

  render() {
    const { background, title } = this.state;
    return (
      <section
        className={s.background}
        style={{ backgroundImage: `url(${background})` }}
      >
        <h2 className="readable-hidden">{title}</h2>
      </section>
    );
  }
}
