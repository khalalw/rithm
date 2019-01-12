import React, { Component } from "react";
import PropTypes from "prop-types";

const style = {
  card: {
    backgroundColor: "lightGrey",
    width: "150px",
    textAlign: "center",
    borderRadius: "25px",
    flexBasis: "26%",
    marginBottom: "20px",
    marginLeft: "10px",
    marginRight: "10px",
    display: "inline-block",
  },
  flex: {
    flexBasis: "26%",
    textAlign: "center",
  },
  h2: {
    color: "blue",
  },
};

export default class Pokemon extends Component {
  render() {
    return (
      <li style={style.flex}>
        <div style={style.card} className="pokemon">
          <h3 style={style.h2}>{this.props.name}</h3>
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
