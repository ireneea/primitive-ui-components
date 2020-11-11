import { css } from "styled-components";

export default css`
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  // Remove figure margin
  figure {
    margin: 0;
  }
`;
