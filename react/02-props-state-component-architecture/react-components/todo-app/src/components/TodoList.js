import React, { Component } from "react";
import Todo from "./Todo";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ["go to the store", "go to the park", "pick up children"],
    };
  }

  render() {
    const listItems = this.state.todos.map(item => {
      return <Todo item={item} />;
    });

    return <ul>{listItems}</ul>;
  }
}

export default TodoList;
