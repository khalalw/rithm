import React, { Component } from "react";
import "./App.css";
import Square from "./Square";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ["red", "orange", "yellow", "green", "blue", "indigo", "violet"],
    };
  }

  createSquares() {
    let squares = [];
    for (let i = 1; i <= 6; i++) {
      let randomIndex = Math.floor(Math.random() * this.state.colors.length);
      let bgcolor = {
        backgroundColor: this.state.colors[randomIndex],
      };

      squares.push(<Square key={i} style={bgcolor} />);
    }
    return squares;
  }

  render() {
    console.log(this.createSquares());
    return <div id="square-cont">{this.createSquares()}</div>;
  }
}
