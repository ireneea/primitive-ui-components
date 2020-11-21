import styled from "styled-components";
import { withDefaultTheme } from "../themes";
import { baseFont } from "../mixins";

// Code block styling
const StyledKbd = styled.kbd`
  ${baseFont}
  background-color: #f7f7f7;
  border: 1px solid #ccc;
  border-radius: 3px;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.2), 0 0 0 2px #fff inset;
  color: #333;
  display: inline-block;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 13px;
  line-height: 1.4;
  margin: 0 0.1em;
  padding: 0.1em 0.6em;
  text-shadow: 0 1px 0 #fff;
`;

export const KeyboardCmd = withDefaultTheme(StyledKbd);
