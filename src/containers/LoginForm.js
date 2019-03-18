import React, { Component } from "react";
import LoginFormView from "../components/LoginFormView";
import { withUser } from "../contexts/UserContext";
import { throws } from "assert";

class LoginForm extends Component {
  render() {
    const { login } = this.props;
    return <LoginFormView onLogin={login} {...this.props} />;
  }
}

export default withUser(LoginForm);
