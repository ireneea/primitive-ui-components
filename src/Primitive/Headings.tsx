import styled, { AnyStyledComponent } from "styled-components";
import { withDefaultTheme } from "./themes";
import { baseFont } from "./mixins";

function setHeader(level: number) {
  return function withHeaderStyle(Header: AnyStyledComponent) {
    const styledHeader = styled(Header)`
      ${baseFont}
      margin: ${(props) => props.theme.spacing.margins} 0;
      font-weight: ${(props) => props.theme.headings.headingFontWeight};
      font-family: ${(props) => props.theme.headings.headingFontFamily};
      line-height: ${(props) => props.theme.headings.headingLineHeight};
      font-size: ${(props) => props.theme.headings[`h${level}MobileSize`]};

      &:not(:first-child) {
        margin: 1.5rem 0;
      }

      @media ${(props) => props.theme.mobileBreakPoint} {
        font-size: ${(props) => props.theme.headings[`h${level}Size`]};
      }
    `;

    return styledHeader;
  };
}

export const H1 = withDefaultTheme(setHeader(1)(styled.h1``));

export const H2 = withDefaultTheme(setHeader(2)(styled.h2``));

export const H3 = withDefaultTheme(setHeader(3)(styled.h3``));

export const H4 = withDefaultTheme(setHeader(4)(styled.h4``));

export const H5 = withDefaultTheme(setHeader(5)(styled.h5``));
