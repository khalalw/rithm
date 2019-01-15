import React, { Component } from "react";
import PropTypes from "prop-types";

class App extends Component {
  constructor(props) {
    // if we want props passed down to this component from a parent component
    super(props);
    // set initial stae
    this.state = {
      name: "Khalal",
    };
  }

  // render component
  render() {
    return (
      <div>
        <h1>
          Hello {this.state.name}! You are a {this.props.job}{" "}
        </h1>
      </div>
    );
  }
}

// set defaultProps and propTypes outside of the class
App.defaultProps = {
  job: "Developer",
};

App.propTypes = {
  name: PropTypes.string,
  job: PropTypes.string,
};

export default App;
