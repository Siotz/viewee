import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export default class LoginFromView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      success: false
    };
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

  async handleLoginButtonClick() {
    const { onLogin } = this.props;
    const { username, password } = this.state;
    await onLogin(username, password);
    // 로그인이 성공적으로 끝났을때
    this.setState({
      success: true
    });
  }

  render() {
    const { username, password, success } = this.state;
    if (success) {
      // TODO: 모달 끄기
    }
    return (
      <div>
        <input
          type="text"
          value={username}
          onChange={e => this.handleUsernameChange(e)}
        />
        <input
          type="text"
          value={password}
          onChange={e => this.handlePasswordChange(e)}
        />
        <button onClick={() => this.handleLoginButtonClick()}>로그인</button>
      </div>
    );
  }
}
