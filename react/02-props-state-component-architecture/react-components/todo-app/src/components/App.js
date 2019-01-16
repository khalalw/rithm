import React, { Component } from "react";
// import logo from './logo.svg';
import TodoList from "./TodoList";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <TodoList />
      </div>
    );
  }
}

export default App;
