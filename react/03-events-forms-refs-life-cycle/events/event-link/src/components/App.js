import React, { Component } from "react";
import "./App.css";
import CustomLink from "./CustomLink";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sites: ["Google", "Amazon", "Twilio"],
      href: ["http://google.com", "http://amazon.com", "http://twilio.com"],
    };
  }

  showMessage(index) {
    alert(`You clicked on ${this.state.sites[index]}`);
  }

  render() {
    const links = this.state.sites.map((val, index) => {
      return (
        <div>
          <CustomLink
            key={index}
            handleClick={this.showMessage.bind(this, index)}
            link={this.state.href[index]}
            text={val}
          />
        </div>
      );
    });

    return (
      <div>
        <h3>Click on a link!</h3>
        {links}
      </div>
    );
  }
}

export default App;
