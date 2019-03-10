import React, { Component } from "react";
import LoginFormView from "../components/LoginFormView";
import { withUser } from "../contexts/UserContext";

class LoginForm extends Component {
  render() {
    const { login, onClose, LoginModal } = this.props;
    return (
      <LoginFormView
        onLogin={login}
        onClose={onClose}
        LoginModal={LoginModal}
      />
    );
  }
}

export default withUser(LoginForm);
