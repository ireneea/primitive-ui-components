import { css } from "styled-components";

import theme from "./themes";

export const baseFont = css`
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font: ${(props) => (props.theme ? props.theme.font.font : theme.font.font)};
  color: ${(props) => (props.theme ? props.theme.font.fontColor : theme.font.fontColor)};
`;
