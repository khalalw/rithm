import React, { Component } from "react";
import Square from "./Square";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ["red", "orange", "yellow", "blue", "indigo", "violet"],
    };
  }

  createSquares() {
    let squares = [];
    for (let i = 1; i <= 24; i++) {
      let color = {
        backgroundColor: this.state.colors[Math.floor(Math.random() * 7)],
      };
      squares.push(<Square style={color} />);
    }
    return squares;
  }

  render() {
    return <div>{this.createSquares()}</div>;
  }
}
