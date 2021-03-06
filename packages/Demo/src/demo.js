import React from "react";
import PropTypes from "prop-types";
// import styled, { css } from "styled-components";

// import {} from "./primitives";

export const Demo = ({ text }) => <div>{text}</div>;

Demo.propTypes = {
  text: PropTypes.string
};

Demo.defaultProps = {
  text: "demo"
};
