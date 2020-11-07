import styled from "styled-components";
import theme from "./themes";
import { baseFont } from "./mixins";

// Link
export const A = styled.a`
  ${baseFont}
  color: ${(props) => props.theme.colors.link};
  text-decoration: none;

  &:hover,
  &:active,
  &:focus {
    color: ${(props) => props.theme.colors.linkHover};
    text-decoration: underline;
  }
`;

A.defaultProps = { theme: { ...theme } };

// Highlight
export const Mark = styled.mark`
  ${baseFont}
  background: ${(props) => props.theme.colors.highlight};
  padding: 0 0.2rem;
`;

Mark.defaultProps = { theme: { ...theme } };

// Blockquote
export const Blockquote = styled.blockquote`
  ${baseFont}
  margin: 0 0 ${(props) => props.theme.spacing.margins} 0;
  border-left: ${(props) => props.theme.colors.bqBorder};
  padding: 0 1.5rem;
  font-size: 1.5rem;

  cite {
    display: block;
    margin-top: ${(props) => props.theme.spacing.margins};
    font-size: 1rem;
    text-align: right;
  }
`;

Blockquote.defaultProps = { theme: { ...theme } };
