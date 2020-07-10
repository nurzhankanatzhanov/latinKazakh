import React from "react";

import classes from "./Button.css";

const button = (props) => (
  <div>
    <button type="button" onClick={props.click} className={classes.Button}>
      {props.name}
    </button>
  </div>
);

export default button;
