import ReactDOM from "react-dom";

const ModalPortal = ({ children }) => {
  const el = document.getElementById("modal");
  el.textContent = "";
  return ReactDOM.createPortal(children, el);
};

export default ModalPortal;
