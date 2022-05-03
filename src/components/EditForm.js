import React from "react";
import Form from "./Form";
import classes from "./Overlay.module.css";

const EditForm = (props) => {
  return (
    <div className={`${classes.popUp}`}>
      <Form {...props} />
    </div>
  );
};

export default EditForm;
