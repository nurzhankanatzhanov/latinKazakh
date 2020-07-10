import React, { Component } from "react";
import classes from "./Converter.css";

import TextArea from "./Textarea/Textarea";

class Converter extends Component {
  state = {
    text: "",
  };

  textInputter = (event) => {
    this.setState({
      text: event.target.value,
    });
  };

  render() {
    return (
      <div className={classes.Converter}>
        <div className={classes.half}>
          <label htmlFor="input_text">Input Text:</label>
          <TextArea
            place="Input text here..."
            focus={true}
            readonly={false}
            typing={(event) => this.textInputter(event)}
            value={this.state.text}
          />
        </div>
        <div className={classes.half}>
          <label htmlFor="input_text">Output Text:</label>
          <TextArea
            place="Converted text is outputted here..."
            readonly={true}
            focus={false}
            value={this.state.text}
          />
        </div>
      </div>
    );
  }
}

export default Converter;
