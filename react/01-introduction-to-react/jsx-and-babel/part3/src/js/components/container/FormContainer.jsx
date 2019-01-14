import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class Person extends React.Component {
  render() {
    let age = this.props.age;
    let hobbies = this.props.hobbies;
    let name = this.props.name;
    return (
      <div>
        <p>Learn some information about this person.</p>
        <div>
          {name} is {age} years old.
        </div>
        <div>Some of their hobbies include:</div>
        <ul>
          {hobbies.map(element => (
            <li>{element}</li>
          ))}
        </ul>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div id="people">
        <Person
          name="Khalal"
          age="24"
          hobbies={['running', 'coding', 'laughing', 'poetry', 'rapping']}
        />
        <Person
          name="Tahvia"
          age="24"
          hobbies={['shopping', 'laughing', 'rapping']}
        />
        <Person
          name="Rochelle"
          age="53"
          hobbies={['going to the gym', 'praying', 'singing']}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#create-article-form'));
