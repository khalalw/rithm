import React from "react";
import PropTypes from "prop-types";

const Todo = props => (
  <div>
    <h4>{props.item}</h4>
    <li>{props.title}</li>
    <button onClick={props.complete}>Complete</button>
    <button onClick={props.removeItem}>Delete</button>
  </div>
);

Todo.propTypes = {
  item: PropTypes.string,
  title: PropTypes.string,
};

export default Todo;
