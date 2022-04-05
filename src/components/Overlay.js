import React from "react";
import classes from "./Overlay.module.css";
import Button from "./Button";

const Overlay = ({ state, showPopup, onClick }) => {
  let classStyle;
  if (showPopup) {
    classStyle = "overlay-block";
  } else {
    classStyle = "overlay";
  }

    return (
      <div className={`${classes[classStyle]}`}>
        <div className={classes.popUpText}>
          <p>First name: {state.firstName}</p>
          <p>Last name: {state.lastName}</p>
          <p>Phone number: {state.phoneNumber}</p>
          <p>Role: {state.role}</p>
          <p>Message: {state.message}</p>
          <Button onClick={onClick} btnName="close" />
        </div>
      </div>
    );
};

export default Overlay;
