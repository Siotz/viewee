import React, { Component } from "react";
import LoginFormView from "../components/LoginFormView";
import { withUser } from "../contexts/UserContext";

class LoginForm extends Component {
  render() {
    const { login, onClose } = this.props;
    return <LoginFormView onLogin={login} onClose={onClose} />;
  }
}

export default withUser(LoginForm);
