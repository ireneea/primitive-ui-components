import { createGlobalStyle } from "styled-components";

import { colors, ColorTheme } from "../themes/colors";
import normaliseCss from "./NormaliseCss";
import resetCss from "./ResetCss";

export const GlobalStyle = createGlobalStyle`
  ${normaliseCss}
  ${resetCss}
  body {
    background: ${(props: { theme: { colors: ColorTheme } }) =>
      props.theme ? props.theme.colors.background : colors.background};
  }
`;
