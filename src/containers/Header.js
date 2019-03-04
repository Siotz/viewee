import HeaderView from "../components/HeaderView";
import { withUser } from "../contexts/UserContext";
import { withRouter } from "react-router-dom";

export default withRouter(withUser(HeaderView));
