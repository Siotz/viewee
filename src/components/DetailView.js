import React, { Component } from "react";
import DramaBackground from "../containers/DramaBackground";
import DramaInformation from "../containers/DramaInformation";
import DramaData from "../containers/DramaData";

export default class DetailView extends Component {
  render() {
    return (
      <>
        <DramaBackground />
        <DramaInformation />
        <DramaData />
      </>
    );
  }
}
