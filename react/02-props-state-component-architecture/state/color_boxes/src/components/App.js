import React, { Component } from "react";
import "./App.css";
import Square from "./squares/Square";
export default class App extends Component {
  render() {
    return (
      <div id="square-cont">
        <Square />;
      </div>
    );
  }
}
