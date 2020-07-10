import React from "react";

import classes from "./Button.css";

const button = (props) => (
  <button type="button" onClick={props.click} className={classes.Button}>
    {props.name}
  </button>
);

export default button;
