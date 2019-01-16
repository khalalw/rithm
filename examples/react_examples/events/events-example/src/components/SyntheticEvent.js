import React, { Component } from "react";
import { render } from "react-dom";

// Accessing the Synthetic Event

export default class EventApp extends Component {
  constructor(props) {
    super(props);
    this.state = { type: "" };
    this.handleEvent = this.handleEvent.bind(this);
  }

  handleEvent(e) {
    this.setState({
      type: e.type,
    });
  }

  render() {
    let style = {
      backgroundColor: "blue",
      width: "200px",
      height: "200px",
      fontSize: "20px",
      color: "white",
    };

    let innerText = this.state.type
      ? `I detect an event! Type: ${this.state.type}`
      : "No event detected";

    return (
      <div
        style={style}
        onMouseOver={this.handleEvent}
        onMouseOut={this.handleEvent}
        onClick={this.handleEvent}
      >
        {innerText}
      </div>
    );
  }
}
