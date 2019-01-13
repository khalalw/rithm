export default class Parent extends Component {
  render() {
    return (
      <div>
        <h1>Hi Kids!</h1>
        {this.props.children}
        {console.log(this.props.children)}
      </div>
    );
  }
}
