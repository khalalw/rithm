import React, { Component } from "react";
import PropTypes from "prop-types";

export class CustomLink extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <a
        href={this.props.link}
        onClick={this.props.handleClick}
        target="_blank"
        rel="noopener noreferrer"
      >
        {this.props.text}
      </a>
    );
  }
}

CustomLink.propTypes = {
  link: PropTypes.string,
  handleClick: PropTypes.func,
  text: PropTypes.sting,
};

export default CustomLink;
