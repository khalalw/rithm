import React, { Component } from "react";
import "./App.css";

export class Person extends React.Component {
  render() {
    var style = { color: "red" };
    return <p style={style}>{this.props.name}</p>;
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [
        { name: "Michael" },
        { name: "Elie" },
        { name: "Matt" },
        { name: "Angelina" },
      ],
    };

    setTimeout(this.addName.bind(this), 5000);
  }

  addName() {
    const newPeople = this.state.people.slice();
    newPeople.push({ name: "Whiskey" });
    this.setState({ people: newPeople }, () => {
      console.log(this.state.people);
    });
    console.log(this.state.people);
  }

  render() {
    const peeps = this.state.people.map(p => {
      return <Person key={p.name} name={p.name} />;
    });
    return <div>{peeps}</div>;
  }
}

export default App;
