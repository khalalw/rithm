import React, { Component } from "react";
import PropTypes from "prop-types";

const style = {
  card: {
    backgroundColor: "lightGrey",
    width: "200px",
    textAlign: "center",
    borderRadius: "25px",
    paddingTop: "12px",
    paddingBottom: "15px",
  },
  flex: {
    flexBasis: "26%",
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
          <h2 style={style.h2}>{this.props.name}</h2>
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
