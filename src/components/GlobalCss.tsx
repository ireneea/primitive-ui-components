import { createGlobalStyle } from "styled-components";

import theme, { PrimeTheme } from "./themes";

export default createGlobalStyle`
body {
  background: ${(props: { theme: PrimeTheme }) =>
    props.theme ? props.theme.colors.background : theme.colors.background};
}
`;
