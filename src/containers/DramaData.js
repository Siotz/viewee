import React, { Component } from "react";
import DramaDataView from "../components/DramaDataView";

export default class DramaData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      description:
        "다시 거리로 돌아온 릭 일행은 버려진 차로 길이 막힌 고속도로를 만난다.더 이상 전진할 수 없어진 그들은 일단 버려진 차들을 이용해 연료를 얻고 먹을 것을 찾아보기로 한다.하지만 얼마 후, 거대한 규모의 죽은자 무리가 몰려온다.이런 상황을 처음 맞닥뜨린 그들은 당황하며 겨우 몸을 숨기지만 캐롤의 어린 딸 소피아가 겁을 먹고 숲으로 도망쳐버린다.그들은 이 길 위에서 갈 곳을 찾고, 생존해내며, 소피아를 다시 찾아와야만 한다.",

      actors: [
        "앤드류 링컨",
        "존 번탈",
        "사라 웨인 콜리스",
        "스티븐 연",
        "로리 홀든",
        "멜리사 맥브라이드",
        "노만 리더스",
        "제프리 드먼",
        "챌린더 릭",
        "로렌 코핸"
      ],
      actors_img: [
        "https://image.tmdb.org/t/p/w138_and_h175_face/b4KqT3vy3MFurEp7q2ni1PRyDxL.jpg",
        "https://image.tmdb.org/t/p/w132_and_h132_face/w3epqN0BlV4TiUV9255d5tSCIRV.jpg",
        "https://image.tmdb.org/t/p/w132_and_h132_face/u1IfYCkMMH4Xpu0bstxktuT0mGi.jpg",
        "https://image.tmdb.org/t/p/w132_and_h132_face/cnzyTmVMeyt9rIkR4bYFarAFEbD.jpg",
        "https://image.tmdb.org/t/p/w132_and_h132_face/wGXQYDu0xkWDYUDM9d9UmfUGNOm.jpg",
        "https://image.tmdb.org/t/p/w132_and_h132_face/oGLkhHbfmsxjaUpTy3ZbUwCp2DJ.jpg",
        "https://image.tmdb.org/t/p/w132_and_h132_face/ozHPdO5jAt7ozzdZUgyRAMNPSDW.jpg",
        "https://image.tmdb.org/t/p/w132_and_h132_face/n47DHl1RFfSEKUvL0MKGKwrL71S.jpg",
        "https://image.tmdb.org/t/p/w132_and_h132_face/ghwQw1ysPtM8UpUsj1HzJMldhV3.jpg",
        "https://image.tmdb.org/t/p/w132_and_h132_face/5W4AV3ZXn38NlEMqPy9QPjwRRz8.jpg"
      ],
      directors: [],
      directors_img: [],
      stillcuts: [
        "https://image.tmdb.org/t/p/w1000_and_h563_face/s95WVKZDyPkngRJLGOBTJrVgUW0.jpg",
        "https://image.tmdb.org/t/p/w1000_and_h563_face/lxDsV6SaZpeuJ9lnkXrFpRXfJzl.jpg",
        "https://image.tmdb.org/t/p/w1000_and_h563_face/pT09tJky9PypueBdGaUqtZe4vCc.jpg",
        "https://image.tmdb.org/t/p/original/bQCAHcef9TZrOSk7NYfN4R1BZcA.jpg",
        "https://image.tmdb.org/t/p/w1000_and_h563_face/h1ClpM9FI4ONsgMijmGbFZ9zB3v.jpg",
        "https://image.tmdb.org/t/p/w1000_and_h563_face/9ErnWMyV2JErHseatB9MvV7NVw1.jpg"
      ]
    };
  }

  render() {
    //   const { description, actors, actors_img, directors, directors_img,stillcuts} = this.state;
    return <DramaDataView {...this.state} />;
  }
}
