import React from "react";
import classes from "./Button.module.css"

const Button = ({onClick, btnName}) => {
  return <button type="submit" onClick={onClick}>{btnName}</button>;
};

export default Button;
