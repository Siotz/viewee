import React, { Component } from "react";
import SignupFormView from "../components/SignUpFormView";
import { withUser } from "../contexts/UserContext";

class SignUpForm extends Component {
  render() {
    const { register } = this.props;
    return <SignupFormView onRegister={register} {...this.props} />;
  }
}

export default withUser(SignUpForm);
