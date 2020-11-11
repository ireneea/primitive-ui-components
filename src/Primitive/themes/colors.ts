export interface ColorTheme {
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

export const colors: ColorTheme = {
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
