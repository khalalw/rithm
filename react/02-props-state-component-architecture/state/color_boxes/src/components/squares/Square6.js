import React, { Component } from "react";

export default class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ["indigo", "orange", "red", "green", "violet", "blue", "yellow"],
    };
  }

  changeColor = () => {
    let newColors = this.state.colors.slice();
    let lastColor = newColors.pop();
    newColors.unshift(lastColor);

    this.setState({ colors: newColors });
  };

  randomColor = () => {
    let random = Math.ceil(Math.random() * 6);
    let newColors = this.state.colors.slice();

    this.setState({
      colors: newColors.slice(random).concat(newColors.slice(0, random)),
    });
  };

  render() {
    return (
      <div
        className="square"
        style={{ backgroundColor: this.state.colors[0] }}
        onClick={this.randomColor}
      />
    );
  }
}
