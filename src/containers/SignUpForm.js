import React, { Component } from "react";
import SignupFormView from "../components/SignUpFormView";
import { withUser } from "../contexts/UserContext";

class SignUpForm extends Component {
  render() {
    const { register, onClose } = this.props;
    return <SignupFormView onRegister={register} onClose={onClose} />;
  }
}

export default withUser(SignUpForm);
