import React, { Component } from "react";
import Todo from "./Todo";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ["go to the store", "get nails done"],
      description: [
        "need to grab groceries for the children",
        "2PM appt at Gaia Nails",
      ],
    };
  }

  handleRemove(index) {
    const { todos, description } = this.state;
    const newTodos = todos.slice(0, index).concat(todos.slice(index + 1));
    const newDescription = description
      .slice(0, index)
      .concat(description.slice(index + 1));
    this.setState({ todos: newTodos, description: newDescription });
  }

  render() {
    const listItems = this.state.todos.map((item, index) => {
      return (
        <Todo
          key={index}
          item={item}
          removeItem={this.handleRemove.bind(this, index)}
          title={this.state.description[index]}
        />
      );
    });

    return (
      <span>
        <ul>{listItems}</ul>
      </span>
    );
  }
}

export default TodoList;
