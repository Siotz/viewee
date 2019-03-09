import React, { Component } from "react";
import s from "../scss/DramaInformation.module.scss";

export default class DramaInformation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 1,
      title: "워킹 데드",
      title_eng: "Walking Dead",
      season: 1,
      year: "2019.01.01",
      age: "19",
      country: "미국",
      tags: ["좀비", "아포칼립스", "드라마", "생존", "리더"],
      poster:
        "https://image.tmdb.org/t/p/w440_and_h660_face/48SObcY3kYvZLFzdqiSXuzNtBMu.jpg"
    };
  }

  render() {
    const {
      title,
      title_eng,
      season,
      year,
      age,
      country,
      tags,
      poster
    } = this.state;
    return (
      <section className={s.DramaInformation}>
        <div className={s.poster}>
          <img src={poster} alt={title} />
        </div>
        <h1 className={s.title}>
          {title} 시즌 {season}
        </h1>
      </section>
    );
  }
}
