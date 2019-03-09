import React, { Component } from "react";
import DramaBackground from "../containers/DramaBackground";
import DramaInformation from "../containers/DramaInformation";

export default class DetailView extends Component {
  render() {
    return (
      <>
        <DramaBackground />
        <DramaInformation />
      </>
    );
  }
}
