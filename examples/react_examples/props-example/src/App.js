import React, { Component } from "react";
// import { render } from "react-dom";
import "./App.css";
import PropTypes from "prop-types";
import InstructorItem from "./InstructorItem";

class App extends Component {
  render() {
    var instList = this.props.instructors.map(instructor => {
      return (
        <InstructorItem
          key={instructor.id}
          name={instructor.name}
          avatar={instructor.avatar}
          hobby={instructor.hobby}
        />
      );
    });
    return (
      <div>
        {/* <Parent>
          <h2>These are the children!</h2>
        </Parent>
        <Greeting /> */}

        <h1>Instructors</h1>
        <ul>{instList}</ul>
      </div>
    );
  }
}

App.defaultProps = {
  instructors: [
    {
      id: 0,
      name: "Michael",
      avatar:
        "https://www.rithmschool.com/content/react_fundamentals/michael.jpg",
      hobby: "hiking",
    },
    {
      id: 1,
      name: "Matt",
      avatar: "https://www.rithmschool.com/content/react_fundamentals/matt.jpg",
      hobby: "math",
    },
    {
      id: 2,
      name: "Elie",
      avatar: "https://www.rithmschool.com/content/react_fundamentals/elie.jpg",
      hobby: "cello",
    },
    {
      id: 3,
      name: "Whiskey",
      avatar:
        "https://www.rithmschool.com/content/react_fundamentals/whiskey.jpg",
      hobby: "napping",
    },
  ],
};

export default App;
