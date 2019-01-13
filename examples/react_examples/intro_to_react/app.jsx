class App extends React.Component {
  render() {
    var name = this.props.name;
    if (name === 'Khalal') {
      name = 'favorite person on Earth';
    } else if (name === 'Tahvia' || name === 'Rochelle') {
      name = "Ehhhh, they're okay.";
    }
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>{name}</p>
        {name === 'student' ? (
          <h3>Good job on the course so far!</h3>
        ) : (
          <h3>Hello {this.props.name}</h3>
        )}
      </div>
    );
  }
}

ReactDOM.render(<App name="Khalal" />, document.getElementById('app'));
