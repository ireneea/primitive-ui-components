import styled, { css } from "styled-components";
import theme from "./themes";
import { baseFont } from "./mixins";

// Headings
// TODO: mobile

const heading = css`
  ${baseFont}
  margin: ${(props) => props.theme.spacing.margins} 0;
  font-weight: ${(props) => props.theme.headings.headingFontWeight};
  font-family: ${(props) => props.theme.headings.headingFontFamily};
  line-height: ${(props) => props.theme.headings.headingLineHeight};
`;

export const H1 = styled.h1`
  ${heading}
  font-size: ${(props) => props.theme.headings.h1MobileSize};
  &:not(:first-child) {
    margin-top: 2rem;
  }

  @media ${(props) => props.theme.mobileBreakPoint} {
    font-size: ${(props) => props.theme.headings.h1Size};
    &:not(:first-child) {
      margin-top: 2.5rem;
    }
  }
`;

export const H2 = styled.h2`
  ${heading}
  font-size: ${(props) => props.theme.headings.h2MobileSize};
  &:not(:first-child) {
    margin-top: 2rem;
  }

  @media ${(props) => props.theme.mobileBreakPoint} {
    font-size: ${(props) => props.theme.headings.h2Size};
    &:not(:first-child) {
      margin-top: 2.5rem;
    }
  }
`;

export const H3 = styled.h3`
  ${heading}
  font-size: ${(props) => props.theme.headings.h3MobileSize};
  &:not(:first-child) {
    margin-top: 2rem;
  }

  @media ${(props) => props.theme.mobileBreakPoint} {
    font-size: ${(props) => props.theme.headings.h3Size};
    &:not(:first-child) {
      margin-top: 2.5rem;
    }
  }
`;

export const H4 = styled.h4`
  ${heading}
  font-size: ${(props) => props.theme.headings.h4MobileSize};
  &:not(:first-child) {
    margin: 1.5rem 0;
  }

  @media ${(props) => props.theme.mobileBreakPoint} {
    font-size: ${(props) => props.theme.headings.h4Size};
  }
`;

export const H5 = styled.h5`
  ${heading}
  font-size: ${(props) => props.theme.headings.h5MobileSize};
  &:not(:first-child) {
    margin: 1.5rem 0;
  }

  @media ${(props) => props.theme.mobileBreakPoint} {
    font-size: ${(props) => props.theme.headings.h5Size};
  }
`;

H1.defaultProps = { theme: { ...theme } };
H2.defaultProps = { theme: { ...theme } };
H3.defaultProps = { theme: { ...theme } };
H4.defaultProps = { theme: { ...theme } };
H5.defaultProps = { theme: { ...theme } };
