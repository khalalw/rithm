import React from "react";
import PropTypes from "prop-types";

const Todo = props => <li>{props.item}</li>;

Todo.propTypes = {
  item: PropTypes.string,
};

export default Todo;
