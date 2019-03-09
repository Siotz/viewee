import React, { Component } from "react";
import s from "../scss/DramaBackground.module.scss";

export default class DramaBackground extends Component {
  constructor(props) {
    super(props);

    this.state = {
      background: "https://i.ytimg.com/vi/w1iuWzMVRUw/maxresdefault.jpg",
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
        {/* <h1 className="readable-hidden">{title}</h1> */}
      </section>
    );
  }
}
