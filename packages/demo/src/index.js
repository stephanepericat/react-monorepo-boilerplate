import React from 'react';
import PropTypes from 'prop-types';

export const Demo = ({ text }) => <div>{text}</div>;

Demo.propTypes = {
  text: PropTypes.string.isRequired
};
