import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Modal, ModalBody } from "reactstrap";
import SignUpForm from "../containers/SignUpForm";

export default class LoginFromView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      loginSuccess: false,
      SignUpModal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      SignUpModal: !prevState.SignUpModal
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

  async handleLoginButtonClick(e) {
    const { onLogin } = this.props;
    const { username, password } = this.state;
    // e.preventDefault();
    await onLogin(username, password);
    // 로그인이 성공적으로 끝났을때
    this.setState({
      loginSuccess: true
    });
  }

  render() {
    const { username, password, loginSuccess } = this.state;
    if (loginSuccess) {
      // TODO: 모달 끄기
    }
    return (
      <div>
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
        <button onClick={() => this.handleLoginButtonClick()}>로그인</button>
        <div>
          <span>계정이 없으신가요?</span>
          <button onClick={this.toggle}>회원가입</button>
          <Modal isOpen={this.state.SignUpModal} toggle={this.toggle}>
            <ModalBody>
              <SignUpForm />
            </ModalBody>
          </Modal>
        </div>
      </div>
    );
  }
}
