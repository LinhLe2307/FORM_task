import React from "react";
import classes from "./Overlay.module.css";
import Button from "./Button";

const Overlay = ({
  firstname,
  lastname,
  phonenumber,
  message,
  role,
  submit,
  close,
}) => {
  return (
    // <div className={`${classes.popUp}`}>
    //   <div className={classes.popUpText}>
    //     <p>First name:
    //       <input value={firstname}/>
    //     </p>
    //     <p>Last name:
    //       <input value={lastname}/>
    //     </p>
    //     <p>Phone number:
    //       <input value={phonenumber}/>
    //     </p>
    //     <p>Role:
    //       <input value={role}/>
    //     </p>
    //     <p>Message:
    //       <input value={message}/>
    //     </p>
    //     <Button onClick={submit}>I want to submit</Button>
    //     <Button onClick={close}>Nope, I want to cancel</Button>
    //   </div>
    // </div>
    <div className={`${classes.popUp}`}>
      <div className={classes.popUpText}>
        <p>First name: {firstname}</p>
        <p>Last name: {lastname}</p>
        <p>Phone number: {phonenumber}</p>
        <p>Role: {role}</p>
        <p>Message: {message}</p>
        <Button onClick={submit}>I want to submit</Button>
        <Button onClick={close}>Nope, I want to cancel</Button>
      </div>
    </div>
  );
};

export default Overlay;
