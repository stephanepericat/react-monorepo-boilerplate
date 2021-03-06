import styled, { css } from "styled-components";
import { colors } from "@stephanepericat/react-mono-theme";

export const ButtonBase = styled.a`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: ${colors.black};
  border: 2px solid ${colors.black};
  text-align: center;
  &:hover {
    cursor: pointer;
  }

  ${props => props.primary && css`
    background: ${colors.orange};
    color: ${colors.white};
    border-color: ${colors.orange};
  `}
`;