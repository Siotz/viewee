import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Modal, ModalBody } from "reactstrap";

export default class LoginFromView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      success: false,
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
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
          type="email"
          value={username}
          placeholder="이메일"
          onChange={e => this.handleUsernameChange(e)}
        />
        <input
          type="password"
          value={password}
          placeholder="비밀번호"
          onChange={e => this.handlePasswordChange(e)}
        />
        <button onClick={() => this.handleLoginButtonClick()}>로그인</button>
        <div>
          <span>계정이 없으신가요?</span>
          <button onClick={this.toggle}>회원가입</button>
          <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ModalBody>
          </Modal>
        </div>
      </div>
    );
  }
}
