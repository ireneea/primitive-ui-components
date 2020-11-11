import styled, { AnyStyledComponent } from "styled-components";
import { darken } from "polished";

import { ColorTheme, colors } from "./themes/colors";

export interface PrimeTheme {
  // TODO: set all the styles correctly
  font: FontTheme;
  colors: ColorTheme;
  headings: Record<string, string>;
  spacing: Record<string, string>;
  borders: BorderTheme;
  code: Record<string, string>;
  sizes: Record<string, string>;
  mobileBreakPoint: string;
  tabletBreakPoint: string;
  desktopBreakPoint: string;
  buttons: ButtonTheme;
  grids: GridTheme;
}

interface FontTheme {
  fontSize: string;
  fontStyle: string;
  fontVariant: string;
  fontWeight: string;
  fontColor: string;
  fontFamily: string;
  lineHeight: string;
  font: string;
}

const font = {
  fontSize: "1rem",
  fontStyle: "normal",
  fontVariant: "normal",
  fontWeight: "normal",
  fontColor: "#404040",
  fontFamily: "-apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, sans-serif",
  lineHeight: "1.6",
  get font() {
    return `${this.fontStyle} ${this.fontVariant} ${this.fontWeight} ${this.fontSize}/${this.lineHeight} ${this.fontFamily}`;
  },
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

interface ButtonTheme {}

const buttons = {
  background: colors.primary,
  color: "#ffffff",
  fontWeight: "600",
  fontFamily: "-apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, sans-serif",
  fontSize: "1rem",
  borderWidth: "1px",
  borderStyle: "solid",
  borderRadius: borders.radius,
  textTransform: "none",
  get backgroundHover() {
    return darken(0.1, this.background);
  },

  get borders() {
    return `${this.borderWidth} ${this.borderStyle} ${this.background}`;
  },

  get hoverBorders() {
    return `${this.borderWidth} ${this.borderStyle} ${darken(0.1, this.background)}`;
  },

  // accent
  accentBackground: colors.secondary,
  accentColor: "#ffffff",
  accentColorHover: "#ffffff",

  get accentBorders() {
    return `${this.borderWidth} ${this.borderStyle} ${this.accentBackground}`;
  },
  get accentHoverBackground() {
    return darken(0.1, this.accentBackground);
  },
  get accentHoverBorders() {
    return `${this.borderWidth} ${this.borderStyle} ${darken(0.1, this.accentBackground)}`;
  },

  // // Muted Buttons
  mutedBackground: "transparent",
  mutedColor: darken(0.5, colors.accent),
  mutedColorHover: darken(0.5, colors.accent),
  mutedBorderColor: colors.accent,

  get mutedBorders() {
    return `${this.borderWidth} ${this.borderStyle} ${this.mutedBorderColor}`;
  },
  get mutedHoverBackground() {
    return darken(0.1, this.mutedBackground);
  },
  get mutedHoverBorders() {
    return `${this.borderWidth} ${this.borderStyle} ${darken(0.3, this.mutedBorderColor)}`;
  },

  // Round Buttons
  roundButtonRadius: "40px",
};

interface GridTheme {
  padding: string;
  bottomMargin: string;
}

const grids = {
  padding: "1rem",
  bottomMargin: "1rem",
};

const theme: PrimeTheme = {
  font,
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
  buttons,
  grids,
};

export function withDefaultTheme(Component: AnyStyledComponent) {
  const ThemedComponent = styled(Component)``;
  // destructuring is needed to be able to use the object getters
  ThemedComponent.defaultProps = { theme: { ...theme } };

  return ThemedComponent;
}

export default theme;
