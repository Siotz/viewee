import React, { Component } from "react";
import LoginForm from "../containers/LoginForm";
import { Modal, ModalBody } from "reactstrap";

export default class HeaderView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      LoginModal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      LoginModal: !prevState.LoginModal
    }));
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
          <button onClick={this.toggle}>로그인</button>
        )}
        {/* {this.state.modal && <ModalComponent />} */}
        {this.state.LoginModal && (
          <Modal
            isOpen={this.state.LoginModal}
            toggle={this.toggle}
            className={this.props.className}
            // backdrop="static"
          >
            <ModalBody>
              <LoginForm />
            </ModalBody>
          </Modal>
        )}
      </div>
    );
  }
}
