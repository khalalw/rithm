import React, { Component } from "react";
import Square from "./Square";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ["red", "orange", "yellow", "blue", "indigo", "violet"],
    };
  }

  render() {
    let squares = [];
    for (let i = 0; i <= 24; i++) {
      let bgcolor = {
        backgroundColor: this.state.colors[
          Math.floor(Math.random() * this.state.colors.length)
        ],
      };

      squares.push(<Square key={i} style={bgcolor} />);
    }
    console.log(squares);

    return <div id="square-cont">{squares}</div>;
  }
}
