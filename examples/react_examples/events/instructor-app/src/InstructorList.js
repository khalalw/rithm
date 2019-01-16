import React, { Component } from "react";
import Instructor from "./Instructor";

export class InstructorList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      instructors: ["Elie", "Matt", "Michael"],
    };
  }

  handleRemove(index) {
    const { instructors } = this.state;
    console.log(instructors);
    const newInstructors = instructors
      .slice(0, index)
      .concat(instructors.slice(index + 1));
    this.setState({
      instructors: newInstructors,
    });
  }

  render() {
    let instructors = this.state.instructors.map((name, index) => (
      <Instructor
        removeInstructor={this.handleRemove.bind(this, index)}
        name={name}
        key={index}
      />
    ));
    return <div>{instructors}</div>;
  }
}

export default InstructorList;
