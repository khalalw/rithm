import React, { Component } from "react";
import logo from "./logo.svg";
import InstructorList from "./InstructorList";
// import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Here are all the instructors</h1>
        <InstructorList />
      </div>
    );
  }
}

export default App;
