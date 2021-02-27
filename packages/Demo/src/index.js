import React from "react";
import PropTypes from "prop-types";
// import styled, { css } from "styled-components";

export const Demo = ({ text }) => <div>{text}</div>;

Demo.propTypes = {
  text: PropTypes.string.isRequired
};