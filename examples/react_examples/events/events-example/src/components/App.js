import React, { Component } from "react";

class App extends Component {
  handleClick() {
    alert("click");
  }

  handleName = () => {
    alert(this.props.name);
  };

  render() {
    return (
      <div>
        <button onClick={this.handleName}>{this.props.name}</button>
      </div>
    );
  }
}

export default App;
