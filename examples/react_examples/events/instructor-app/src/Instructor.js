import React, { Component } from "react";

export class Instructor extends Component {
  render() {
    return (
      <div>
        <h2>
          This instructor's name is {this.props.name}.
          <button onClick={this.props.removeInstructor}>X</button>
        </h2>
      </div>
    );
  }
}

export default Instructor;
