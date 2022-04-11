import React from "react";
import classes from "./View.module.css";

const View = ({ firstname, lastname, phonenumber, role, message }) => {
  return (
    <div className={classes.view}>
      <div className={classes.notepad}>
        <h2>This is your input</h2>
        <p>
          First name: <span>{firstname}</span>
        </p>

        <p>
          Last name: <span>{lastname}</span>
        </p>

        <p>
          Phone number: <span>{phonenumber}</span>
        </p>

        <p>
          Role: <span>{role}</span>
        </p>

        <p>
          Message: <span>{message}</span>
        </p>
      </div>
    </div>
  );
};

export default View;
