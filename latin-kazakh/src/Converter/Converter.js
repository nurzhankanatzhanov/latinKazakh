import React, { Component } from "react";
import classes from "./Converter.css";

import TextArea from "./Textarea/Textarea";
import Button from "./Button/Button";
import Aux from "../HOC/Aux";

import img from "../assets/exchange.png";
import conversionTable from "../HOC/conversion";

class Converter extends Component {
  state = {
    originalText: "",
    convertedText: "",
    forward: true,
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

  toggleConversion = () => {
    this.setState({
      forward: !this.state.forward,
    });
  };

  render() {
    const conversion = this.state.forward ? (
      <span>
        Kazakh <u>Cyrillic</u> to Kazakh <u>Latin</u>
      </span>
    ) : (
      <span>
        Kazakh <u>Latin</u> to Kazakh <u>Cyrillic</u>
      </span>
    );

    return (
      <Aux>
        <Button
          name="Toggle Conversion"
          click={() => this.toggleConversion()}
        />
        <h1>
          <span role="img" aria-label="kz">
            🇰🇿 {conversion}
          </span>
        </h1>
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
            <Button
              name="Copy to Clipboard"
              click={() => this.copyOriginal()}
            />
          </div>
          <img
            className={classes.img}
            src={img}
            alt="conversion"
            onClick={() => this.toggleConversion()}
          />
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
      </Aux>
    );
  }
}

export default Converter;
