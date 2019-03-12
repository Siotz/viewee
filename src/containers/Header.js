import HeaderView from "../components/HeaderView";
import { withUser } from "../contexts/UserContext";
import { withRouter } from "react-router-dom";

export default withRouter(withUser(HeaderView));

// import HeaderView from "../components/HeaderView";
// import { withUser } from "../contexts/UserContext";
// import { withRouter } from "react-router-dom";
// import { connect } from "react-redux";
// import { changeLoginModal } from "../store/ducks/loginModalState";

// const mapStateToProps = state => ({
//     loginModal: state.loginModal.loginModal
// });

// const mapDispatchToProps = {
//     changeLoginModal
// };

// console.log("test");
// export default withRouter(
//     withUser(
//         connect(
//             mapStateToProps,
//             mapDispatchToProps
//         )(HeaderView)
//     )
// );
