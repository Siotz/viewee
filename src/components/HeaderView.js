import React, { Component } from "react";
import LoginForm from "../containers/LoginForm";
import ModalPortal from "../portal/ModalPortal";

export default class HeaderView extends Component {
  async handleOpenModal() {
    const { changeModal } = this.props;
    changeModal("login");
  }

  render() {
    const { username, logout, history } = this.props;
    console.log("로그인모달 상태: ", this.props.modal);
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
          <button onClick={() => this.handleOpenModal()}>로그인</button>
        )}
        {this.props.modal === "login" ? (
          <ModalPortal>
            <LoginForm {...this.props} />
          </ModalPortal>
        ) : (
          <></>
        )}
      </div>
    );
  }
}
