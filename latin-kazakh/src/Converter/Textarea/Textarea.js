import React from "react";

import classes from "./Textarea.css";

const textArea = (props) => {
  return (
    <textarea
      className={classes.rules}
      rows="15"
      cols="50"
      autoFocus={props.focus}
      readOnly={props.readonly}
      placeholder={props.place}
      onChange={props.typing}
      value={props.value}
    />
  );
};

export default textArea;
