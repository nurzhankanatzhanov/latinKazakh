import React, { Component } from "react";

import Converter from "./Converter/Converter";
import classes from "./App.css";

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <h1>
          <span role="img" aria-label="kz">
            🇰🇿 Kazakh Cyrillic to Kazakh Latin Text Converter 🇰🇿
          </span>
        </h1>
        <Converter />
      </div>
    );
  }
}

export default App;
