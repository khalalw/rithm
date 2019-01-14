import React, { Component } from "react";

export default class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ["yellow", "green", "blue", "indigo", "violet", "red", "orange"],
    };
  }

  changeColor = () => {
    let newColors = this.state.colors.slice();
    let lastColor = newColors.pop();
    newColors.unshift(lastColor);

    this.setState({
      colors: newColors,
    });
  };

  render() {
    return (
      <div
        className="square"
        style={{
          backgroundColor: this.state.colors[0],
        }}
        onClick={this.changeColor}
      />
    );
  }
}