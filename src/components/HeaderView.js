import React, { Component } from "react";
import LoginForm from "../containers/LoginForm";
import ModalPortal from "../portal/ModalPortal";
import { connect } from "react-redux";
import { changeLoginModal } from "../store/ducks/loginModalState";

class HeaderView extends Component {
  // constructor(props) {
  //   super(props);
  //   // this.state = {
  //   //   loginModal: false
  //   // };
  // }

  componentDidMount() {
    console.log(this.props.loginModal);
  }

  handleOpenLoginModal() {
    // this.setState({
    //   loginModal: true
    // });
    const { changeLoginModal } = this.props;
    changeLoginModal(true);
  }

  handleCloseLoginModal() {
    // this.setState({
    //   loginModal: false
    // });
    const { changeLoginModal } = this.props;
    changeLoginModal(false);
  }

  render() {
    const { username, logout, history } = this.props;
    console.log("로그인모달 상태: ", this.props.loginModal);
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
        {this.props.loginModal && (
          <ModalPortal>
            <LoginForm onClose={() => this.handleCloseLoginModal()} />
          </ModalPortal>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loginModal: state.loginModal.loginModal
});

const mapDispatchToProps = {
  changeLoginModal
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderView);
