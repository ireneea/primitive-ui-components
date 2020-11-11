import styled from "styled-components";
import { withDefaultTheme } from "./themes";
import { baseFont } from "./mixins";

const StyledA = styled.a`
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

export const Link = withDefaultTheme(StyledA);

const StyledMark = styled.mark`
  ${baseFont}
  background: ${(props) => props.theme.colors.highlight};
  padding: 0 0.2rem;
`;

export const Highlight = withDefaultTheme(StyledMark);

const StyledBlockquote = styled.blockquote`
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

export const Blockquote = withDefaultTheme(StyledBlockquote);

const StyledHr = styled.hr`
  height: 0;
  border: 0;
  border-top: ${(props) => props.theme.borders.borders};
`;

export const Divider = withDefaultTheme(StyledHr);
