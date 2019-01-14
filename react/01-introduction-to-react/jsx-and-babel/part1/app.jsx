class FirstComponent extends React.Component {
  render() {
    return <h1>My very first component</h1>;
  }
}

class SecondComponent extends React.Component {
  render() {
    return <h2>My second component</h2>;
  }
}

class NamedComponent extends React.Component {
  render() {
    var name = this.props.name;
    return <p>{name}</p>;
  }
}

class App extends React.Component {
  render() {
    const compName = 'Khalal';
    return (
      <div id="parent-div">
        <FirstComponent />
        <SecondComponent />
        <NamedComponent name={compName} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));
