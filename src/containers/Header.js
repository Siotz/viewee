import React, { Component } from "react";
import HeaderView from "../components/HeaderView";
import { withUser } from "../contexts/UserContext";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { changeModal } from "../store/ducks/modalState";

class Header extends Component {
  componentDidMount() {
    console.log(this.props.modal);
  }

  render() {
    return <HeaderView {...this.props} />;
  }
}

const mapStateToProps = state => ({
  modal: state.modal.modal
});

const mapDispatchToProps = {
  changeModal
};

export default withRouter(
  withUser(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(Header)
  )
);
