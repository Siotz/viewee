import ReactDOM from "react-dom";

const LoginPortal = ({ children }) => {
  const node = document.createElement("div");
  node.setAttribute("id", "login");
  document.body.insertBefore(node, document.body.childNodes[5]);
  return ReactDOM.createPortal(children, node);
};

export default LoginPortal;
