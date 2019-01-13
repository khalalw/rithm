import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
    };

    setInterval(() => {
      this.setState(
        (prevState, props) => {
          // Updating based on previous value
          return { counter: prevState.counter + 1 };
        },
        () => {
          // Printing the update to the console
          console.log("====================================");
          console.log(this.state.counter);
          console.log("====================================");
        }
      );
    }, 500);
  }

  render() {
    return <div>Counter: {this.state.counter}</div>;
  }
}
