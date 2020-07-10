import React, { Component } from "react";
import classes from "./Converter.css";

import TextArea from "./Textarea/Textarea";
import Button from "./Button/Button";

import conversionTable from "../HOC/conversion";

class Converter extends Component {
  state = {
    originalText: "",
    convertedText: "",
  };

  textInputter = (event) => {
    const input = event.target.value;

    let converted = input;
    for (let i = 0; i < input.length; i++) {
      const char = input.charAt(i);

      if (!conversionTable.hasOwnProperty(char)) continue;

      const regex = new RegExp(char, "g");
      converted = converted.replace(regex, conversionTable[char]);
    }

    this.setState({
      originalText: input,
      convertedText: converted,
    });
  };

  clearInput = () => {
    this.setState({
      originalText: "",
      convertedText: "",
    });
  };

  copyToClipboard = () => {
    navigator.clipboard.writeText(this.state.convertedText);
  };

  copyOriginal = () => {
    navigator.clipboard.writeText(this.state.originalText);
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
            value={this.state.originalText}
          />
          <Button name="Clear" click={() => this.clearInput()} />
          <Button name="Copy to Clipboard" click={() => this.copyOriginal()} />
        </div>
        <div className={classes.half}>
          <label htmlFor="input_text">Output Text:</label>
          <TextArea
            place="Converted text is outputted here..."
            readonly={true}
            focus={false}
            value={this.state.convertedText}
          />
          <Button
            name="Copy to Clipboard"
            click={() => this.copyToClipboard()}
          />
        </div>
      </div>
    );
  }
}

export default Converter;
