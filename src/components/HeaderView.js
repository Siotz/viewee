import React, { Component } from "react";
import LoginForm from "../containers/LoginForm";
import ModalPortal from "../portal/ModalPortal";
import { throws } from "assert";

export default class HeaderView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      LoginModal: false
    };
  }

  handleOpenLoginModal() {
    this.setState({
      LoginModal: true
    });
  }

  handleCloseLoginModal() {
    this.setState({
      LoginModal: false
    });
  }

  render() {
    const { username, logout, history } = this.props;
    return (
      <div>
        Basic Header
        {username ? (
          <>
            <div>{username}</div>
            <button
              onClick={() => {
                logout();
                history.push("/");
              }}
            >
              로그아웃
            </button>
          </>
        ) : (
          <button onClick={() => this.handleOpenLoginModal()}>로그인</button>
        )}
        {this.state.LoginModal && (
          <ModalPortal>
            <LoginForm onClose={() => this.handleCloseLoginModal()} />
          </ModalPortal>
        )}
      </div>
    );
  }
}
