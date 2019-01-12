import React, { Component } from "react";
import PropTypes from "prop-types";

const cardStyle = {
  backgroundColor: "lightGrey",
  width: "200px",
  textAlign: "center",
  borderRadius: "25px",
  paddingTop: "12px",
  paddingBottom: "15px",
};

export default class Pokemon extends Component {
  render() {
    return (
      <li>
        <div style={cardStyle} className="pokemon">
          <h2>{this.props.name}</h2>
          <img src={this.props.image} />
          <p>
            <strong>Type: </strong>
            {this.props.type}
          </p>
        </div>
      </li>
    );
  }
}

Pokemon.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  type: PropTypes.string,
};
