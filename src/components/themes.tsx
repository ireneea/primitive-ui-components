import styled, { AnyStyledComponent } from "styled-components";

export interface PrimeTheme {
  // TODO: set all the styles correctly
  font: Record<string, string>;
  colors: ColorTheme;
  headings: Record<string, string>;
  spacing: Record<string, string>;
  borders: BorderTheme;
  code: Record<string, string>;
  sizes: Record<string, string>;
  mobileBreakPoint: string;
  tabletBreakPoint: string;
  desktopBreakPoint: string;
}

interface ColorTheme {
  background: string;
  primary: string;
  secondary: string;
  accent: string;
  alternateBackground: string;
  alternate: string;
  link: string;
  linkHover: string;
  highlight: string;
  error: string;
  success: string;
  bqBorder: string;
}

const colors = {
  background: "white",
  primary: "#0366ee",
  secondary: "#29de7d",
  accent: "#cdcdcd",
  alternateBackground: "#fafafa",
  alternate: "#404040",
  link: "#0366ee",
  linkHover: `darken(#0366ee, 15%)`,
  highlight: "#ffeea8",
  error: "#d33c40",
  success: "#29de7d",
  bqBorder: "16px solid #f0f0f0",
};

interface BorderTheme {
  width: string;
  style: string;
  color: string;
  radius: string;
  borders: string;
}

const borders = {
  width: "1px",
  style: "solid",
  color: "#dedede",
  radius: "4px",
  get borders() {
    return `${this.width} ${this.style} ${this.color}`;
  },
};

const theme: PrimeTheme = {
  font: {
    fontSize: "1rem",
    fontStyle: "normal",
    fontVariant: "normal",
    fontWeight: "normal",
    fontColor: "#404040",
    fontFamily: "-apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, sans-serif",
    lineHeight: "1.6",
    get font() {
      const f = `${this.fontStyle} ${this.fontVariant} ${this.fontWeight} ${this.fontSize}/${this.lineHeight} ${this.fontFamily}`;
      return f;
    },
  },
  colors,
  headings: {
    headingFontColor: "#404040",
    headingFontWeight: "600",
    headingFontFamily: "-apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, sans-serif",
    headingLineHeight: "1.2",

    h1MobileSize: "1.75rem",
    h2MobileSize: "1.5rem",
    h3MobileSize: "1.25rem",
    h4MobileSize: "1.1rem",
    h5MobileSize: "1rem",

    h1Size: "2.25rem",
    h2Size: "2rem",
    h3Size: "1.75rem",
    h4Size: "1.5rem",
    h5Size: "1.25rem",
  },
  spacing: {
    paddings: "1rem",
    margins: "1rem",
    contentPadding: "60px 0",
    contentPaddingMobile: "30px 0",
  },
  borders,
  code: {
    color: "#404040",
    fontSize: "14px",
    fontFamily: "Menlo, monospace",
    backgroundColor: "transparent",
    borders: borders.borders,
  },
  sizes: {
    xSmall: "600px",
    small: "800px",
    medium: "1000px",
    large: "1200px",
  },
  get mobileBreakPoint() {
    return `(min-width: ${this.sizes.xSmall})`;
  },
  get tabletBreakPoint() {
    return `(min-width: ${this.sizes.small})`;
  },
  get desktopBreakPoint() {
    return `(min-width: ${this.sizes.medium})`;
  },
};

export function withDefaultTheme(Component: AnyStyledComponent) {
  const ThemedComponent = styled(Component)``;
  // destructuring is needed to be able to use the object getters
  ThemedComponent.defaultProps = { theme: { ...theme } };

  return ThemedComponent;
}

export default theme;
