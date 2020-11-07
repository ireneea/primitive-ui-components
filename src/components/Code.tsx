import styled from "styled-components";
import { withDefaultTheme } from "./themes";
import { baseFont } from "./mixins";

const StyledPre = styled.pre`
  ${baseFont}
  border: ${(props) => props.theme.borders.borders};
  border-radius: ${(props) => props.theme.borders.radius};
  background: ${(props) => props.theme.code.backgroundColor};
  padding: 1rem;
  tab-size: 2;
  color: ${(props) => props.theme.code.color};
  font-family: ${(props) => props.theme.code.fontFamily};
  font-size: ${(props) => props.theme.code.fontSize};
  margin: 0 0 ${(props) => props.theme.spacing.margins} 0;

  code {
    font-family: ${(props) => props.theme.code.fontFamily};
    line-height: 1.2;
  }
`;

export const CodeBlock = withDefaultTheme(StyledPre);

const StyledCode = styled.code`
  ${baseFont}
  color: ${(props) => props.theme.code.color};
  background: ${(props) => props.theme.code.backgroundColor};
  font-family: ${(props) => props.theme.code.fontFamily};
  font-size: ${(props) => props.theme.code.fontSize};
  padding: 0 0.2rem;
  border: ${(props) => props.theme.borders.borders};
  border-radius: ${(props) => props.theme.borders.radius};
`;

export const InlineCode = withDefaultTheme(StyledCode);

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
