import React from "react";
import Backdrop from "./Backdrop";

import ReactDOM from "react-dom";

import ModalOverlay from "./ModalOverlay";

const portalElement = document.getElementById("overlays");

const Modal = props => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </React.Fragment>
  );
};

export default Modal;
