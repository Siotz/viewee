import React, { Component } from "react";
import s from "../scss/LoginFormView.module.scss";

export default class LoginFromView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  async handleOpenModal() {
    const { changeModal } = this.props;
    changeModal("signup");
    const el = document.getElementById("login");
    document.body.removeChild(el);
  }

  async handleCloseModal() {
    const { changeModal } = this.props;
    changeModal("none");
    const el = document.getElementById("login");
    document.body.removeChild(el);
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
    alert(`${this.state.username}님 로그인하셨습니다.`);
    // TODO: 로그인이 실패했을때
  }

  render() {
    const { username, password } = this.state;
    console.log(this.props);
    return (
      <div className={s.Modal__bg}>
        <div className={s.Modal__content}>
          <header>
            <h1 className={s.logo}>
              <span className="readable-hidden">로고</span>
            </h1>
            <button
              type="button"
              onClick={() => this.handleCloseModal()}
              className={s.btn_close}
            >
              닫기
            </button>
          </header>
          <section>
            <h2 className={s.Modal__tit}>로그인</h2>
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
              onClick={() => {
                this.handleLoginButtonClick();
                this.handleCloseModal();
              }}
            >
              로그인
            </button>
            <div>
              <div className={s.area}>
                <span>계정이 없으신가요?</span>
                <a onClick={() => this.handleOpenModal()} className={s.link}>
                  &nbsp;회원가입
                </a>
              </div>
              <hr />
              <button className={s.btn_goFacebook}>Facebook으로 로그인</button>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
