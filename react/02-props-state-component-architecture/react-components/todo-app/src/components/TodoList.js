import React, { Component } from "react";
import Todo from "./Todo";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ["go to the store", "go to work"],
    };
  }

  render() {
    const listItems = this.state.todos.map((item, index) => {
      return <Todo key={index} item={item} />;
    });

    return (
      <span>
        <ul>{listItems}</ul>
      </span>
    );
  }
}

export default TodoList;
