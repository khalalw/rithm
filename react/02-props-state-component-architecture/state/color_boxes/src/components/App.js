import React, { Component } from "react";
import "./App.css";
import Square1 from "./squares/Square1";
export default class App extends Component {
  render() {
    return (
      <div id="square-cont">
        <Square1 />;
      </div>
    );
  }
}
