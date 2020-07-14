import React from "react";

import classes from "./Textarea.css";

const textArea = (props) => (
  <textarea
    className={classes.rules}
    autoFocus={props.focus}
    readOnly={props.readonly}
    placeholder={props.place}
    onChange={props.typing}
    value={props.value}
  />
);

export default textArea;
