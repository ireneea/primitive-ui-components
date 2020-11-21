import styled from "styled-components";
import { withDefaultTheme } from "../themes";
import { baseFont } from "../mixins";

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
