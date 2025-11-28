import { theme } from "@/styles";
import styled from "styled-components";

import { Link } from "..";

const ButtonLink = styled(Link).attrs({
  removeSharedStyles: true,
  underlineOnHover: false,
})`
  font-weight: 500;
  background-color: ${theme.colors.primary.blue}
  color: white;
  border-radius: 88px;
  padding: 15px 35px;
  transition: 250ms;
  z-index: 1;
  &:hover {
    transition: opacity 200ms;
    &:not(:disabled) {
      opacity: 0.85;
    }
  }
  &:focus {
    opacity: 0.8;
  }
  outline: none;
  display: flex;
  align-items: center;
`;

export default ButtonLink;

