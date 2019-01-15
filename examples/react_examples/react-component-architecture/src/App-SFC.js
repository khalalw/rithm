// SFC - stateless functional component
import React, { Component } from "react";
import PropTypes from "prop-types";

// const App = props => (
//   <div>
//     <h1>
//       Hello {props.name}! You are a {props.job}{" "}
//     </h1>
//   </div>
// );

// Using destructuring ES6
const App = ({ name, job }) => (
  <div>
    <h1>
      Hello {name}! You are a {job}!!!{" "}
    </h1>
  </div>
);

App.defaultProps = {
  job: "Developer",
};

App.propTypes = {
  name: PropTypes.string,
  job: PropTypes.string,
};

export default App;
