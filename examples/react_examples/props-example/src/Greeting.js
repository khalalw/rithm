export default class Greeting extends Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

Greeting.defaultProps = {
  name: "Phillip",
};
