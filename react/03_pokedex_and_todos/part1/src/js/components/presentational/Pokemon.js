import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Pokemon extends Component {
  render() {
    return (
      <li>
        <h2>{this.props.name}</h2>
        <img src={this.props.image} />
        <p>
          <strong>Type: </strong>
          {this.props.type}
        </p>
      </li>
    );
  }
}

Pokemon.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  type: PropTypes.string,
};
