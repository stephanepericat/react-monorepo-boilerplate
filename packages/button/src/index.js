// import React from 'react';
import styled, { css } from 'styled-components';

export const Button = styled.a`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: black;
  border: 2px solid black;
  text-align: center;

  ${props => props.primary && css`
    background: orange;
    color: white;
    border-color: orange;
  `}
`;

