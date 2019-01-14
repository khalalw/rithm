import React, { Component } from "react";
import "./App.css";
import Square1 from "./squares/Square1";
import Square2 from "./squares/Square2";
import Square3 from "./squares/Square3";
import Square4 from "./squares/Square4";
import Square5 from "./squares/Square5";
import Square6 from "./squares/Square6";
import Square7 from "./squares/Square7";
import Square8 from "./squares/Square8";
import Square9 from "./squares/Square9";

export default class App extends Component {
  render() {
    return (
      <div id="square-cont">
        <Square1 />
        <Square2 />
        <Square3 />
        <Square4 />
        <Square5 />
        <Square6 />
        <Square7 />
        <Square8 />
        <Square9 />
      </div>
    );
  }
}
