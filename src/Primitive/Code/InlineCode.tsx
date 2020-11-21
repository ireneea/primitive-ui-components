import styled from "styled-components";
import { withDefaultTheme } from "../themes";
import { baseFont } from "../mixins";

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
