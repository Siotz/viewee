import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import s from "../scss/LoginFormView.module.scss";

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
    const { onRegister, history } = this.props;
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
    }
    return (
      <div className={s.Modal__bg}>
        <div className={s.Modal__content}>
          <header>
            <h1 className={s.logo}>
              <span className="readable-hidden">로고</span>
            </h1>
            <button
              type="button"
              onClick={this.props.onClose}
              className={s.btn_close}
            >
              닫기
            </button>
          </header>
          <section>
            <h2 className={s.Modal__tit}>회원가입</h2>
            <input
              type="text"
              value={username}
              placeholder="ID"
              onChange={e => this.handleUsernameChange(e)}
              tabIndex="1"
            />
            <input
              type="password"
              value={password}
              placeholder="비밀번호"
              onChange={e => this.handlePasswordChange(e)}
              tabIndex="1"
            />
            <button
              className={s.btn_simple}
              onClick={e => this.handleSignupButtonSubmit(e)}
            >
              회원가입
            </button>
            <div>
              {/* <div className={s.area}>
                <span>이미 가입?</span>
                <a className={s.link}>&nbsp;로그인</a>
              </div> */}
              <hr />
              <button className={s.btn_goFacebook}>Facebook으로 로그인</button>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
