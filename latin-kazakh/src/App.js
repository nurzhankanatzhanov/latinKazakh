import React, { Component } from "react";

import Converter from "./Converter/Converter";
import classes from "./App.css";

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Converter />
      </div>
    );
  }
}

export default App;
