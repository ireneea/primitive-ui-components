export interface PrimeTheme {
  // TODO: set all the styles correctly
  font: Record<string, string>;
  colors: {
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
  };
  headings: Record<string, string>;
  spacing: Record<string, string>;
  borders: Record<string, string>;
  code: Record<string, string>;
}

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
  colors: {
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
  },
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
  borders: {
    width: "1px",
    style: "solid",
    color: "#dedede",
    radius: "4px",
    get borders() {
      return `${this.width} ${this.style} ${this.color}`;
    },
  },
  code: {
    color: "#404040",
    fontSize: "14px",
    fontFamily: "Menlo, monospace",
    backgroundColor: "transparent",
  },
};

export default theme;
