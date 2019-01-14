import React, { Component } from "react";

class Square extends Component {
  render() {
    return <div class="square" />;
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ["red", "orange", "yellow", "blue", "indigo", "violet"],
    };
  }
}
