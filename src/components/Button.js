import React from "react";
import classes from "./Button.module.css";

const Button = ({ onClick, children, onReset }) => {
  return (
    <button type="submit" onClick={onClick} onReset={onReset}>
      {children}
    </button>
  );
};

export default Button;
