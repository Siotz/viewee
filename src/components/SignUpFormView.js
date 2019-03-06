import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export default class SignupFormView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      registerSuccess: false
    };
  }

  async handleSignupButtonSubmit(e) {
    const { onRegister } = this.props;
    const { username, password } = this.state;
    e.preventDefault();
    await onRegister(username, password);
    this.setState({
      registerSuccess: true
    });
  }

  handleUsernameChange(e) {
    this.setState({
      username: e.target.value
    });
  }

  handlePasswordChange(e) {
    this.setState({
      password: e.target.value
    });
  }

  render() {
    const { username, password, registerSuccess } = this.state;
    if (registerSuccess) {
      alert(`${this.state.username}님 회원가입에 성공했습니다.`);
      // return <Redirect to="/" />;
    }
    return (
      <>
        <input
          type="text"
          value={username}
          placeholder="ID"
          onChange={e => this.handleUsernameChange(e)}
        />
        <input
          type="password"
          value={password}
          placeholder="비밀번호"
          onChange={e => this.handlePasswordChange(e)}
        />
        <button onClick={e => this.handleSignupButtonSubmit(e)}>
          회원가입
        </button>
      </>
    );
  }
}
