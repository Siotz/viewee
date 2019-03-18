import ReactDOM from "react-dom";

const SignupPortal = ({ children }) => {
  const node = document.createElement("div");
  node.setAttribute("id", "signup");
  document.body.insertBefore(node, document.body.childNodes[5]);
  return ReactDOM.createPortal(children, node);
};

export default SignupPortal;
