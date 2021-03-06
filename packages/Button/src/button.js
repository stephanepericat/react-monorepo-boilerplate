import React from "react";
import PropTypes from "prop-types";

import {
  ButtonBase
} from "./primitives";

export const Button = ({ primary, text, onButtonClick }) => (
  <ButtonBase
    onClick={onButtonClick}
    primary={primary}
  >{text}</ButtonBase>
);

Button.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
  primary: PropTypes.bool,
  text: PropTypes.string.isRequired
};

Button.defaulProps = {
  primary: false
};
