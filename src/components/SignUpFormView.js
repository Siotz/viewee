import React, { Component } from "react";
import api from "../api";
import { Redirect } from "react-router-dom";

export default class SignupFormView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      password: null,
      goToMain: false,
    };
  }
  async handleSubmit() {
      const { userId, password } = this.state;
  }
}
