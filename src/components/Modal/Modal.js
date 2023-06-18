import React from "react";
// import Transition from "react-transition-group/Transition";
import CSSTransition from "react-transition-group/CSSTransition";

import "./Modal.css";

const animationTiming = {
  enter: 400,
  exit: 1000,
};

const modal = (props) => {
  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      // in={this.state.modalIsOpen}
      in={props.show}
      timeout={animationTiming}
      classNames={{
        enter: "",
        enterActive: "ModalOpen",
        exit: "",
        exitActive: "ModalClosed",
        // appear:,
        // appearActive:,
      }}
    >
      {/* {(state) => {
        const cssClasses = [
          "Modal",
          // props.show === "entering"
          //   ? "ModalOpen"
          //   : (props.show === "exiting") === "exiting"
          //   ? "ModalClosed"
          //   : null,
          state === "entering"
            ? "ModalOpen"
            : (state === "exiting") === "exiting"
            ? "ModalClosed"
            : null,
        ]; */}
      {/* return ( */}
      {/* <div className={cssClasses.join(" ")}> */}
      <div className={"Modal"}>
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>
          Dismiss
        </button>
      </div>
      {/* ); */}
      {/* }} */}
    </CSSTransition>
  );
};

export default modal;
