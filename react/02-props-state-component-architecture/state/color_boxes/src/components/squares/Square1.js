import React, { Component } from "react";

export default class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ["red", "orange", "yellow", "green", "blue", "indigo", "violet"],
    };
  }

  changeColor = () => {
    let newColors = this.state.colors.slice();
    let lastColor = newColors.pop();
    newColors.unshift(lastColor);

    this.setState(
      (prev, props) => {
        return { colors: newColors };
      },
      () => {
        console.log(this.state.colors);
      }
    );
  };

  randomColor = () => {
    let random = Math.ceil(Math.random() * 6);
    let newColors = this.state.colors.slice();

    this.setState(
      (prev, props) => {
        return {
          colors: newColors.slice(random).concat(newColors.slice(0, random)),
        };
      },
      () => {
        console.log(this.state.colors);
      }
    );
  };

  render() {
    return (
      <div
        className="square"
        style={{
          backgroundColor: this.state.colors[0],
        }}
        onClick={this.randomColor}
      />
    );
  }
}
