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
    marginRight: "20px",
  },
  inline: {
    display: "inlineBlock",
  },
  h2: {
    color: "blue",
  },
};

export default class Pokemon extends Component {
  render() {
    return (
      <div style={style.card} className="pokemon">
        <li style={style.inline}>
          <h2 style={style.h2}>{this.props.name}</h2>
          <img src={this.props.image} />
          <p>
            <strong>Type: </strong>
            {this.props.type}
          </p>
        </li>
      </div>
    );
  }
}

Pokemon.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  type: PropTypes.string,
};
