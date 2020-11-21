import styled from "styled-components";
import { withDefaultTheme } from "../themes";
import { baseFont } from "../mixins";

export const Section = withDefaultTheme(styled.section`
  ${baseFont}
  padding: ${(props) => props.theme.spacing.contentPaddingMobile};
`);
