import React, { Component } from "react";
import "./App.css";
import Square1 from "./squares/Square1";
import Square2 from "./squares/Square2";
import Square3 from "./squares/Square3";
import Square4 from "./squares/Square4";

import Square5 from "./squares/Square5";

export default class App extends Component {
  render() {
    return (
      <div id="square-cont">
        <Square1 />
        <Square2 />
        <Square3 />
        <Square4 />
        <Square5 />
      </div>
    );
  }
}
