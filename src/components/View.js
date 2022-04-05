import React from "react";
import classes from "./View.module.css";

const View = ({ input }) => {
  return (
    <div className={classes.view}>
      {/* <h3>This is your input:</h3> */}
      <p>
        <span></span>First name {input.firstName}
      </p>
      {/* <div></div> */}
      <p>
        <span></span>Last name {input.lastname}
      </p>
      {/* <div></div> */}
      <p>
        <span></span>Phone number {input.phoneNumber}
      </p>
      {/* <div></div> */}
      <p>
        <span></span>Role {input.role}
      </p>
      {/* <div></div> */}
      <p>
        <span></span>Message {input.message}
      </p>
    </div>
  );
};

export default View;
