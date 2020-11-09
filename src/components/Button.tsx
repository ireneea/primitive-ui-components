import styled, { css } from "styled-components";
import { withDefaultTheme, PrimeTheme } from "./themes";
import { baseFont } from "./mixins";

interface ButtonProps {
  theme: PrimeTheme;
  primary?: boolean;
  muted?: boolean;
  round?: boolean;
  square?: boolean;
  full?: boolean;
}

const accent = css`
  color: ${(props) => props.theme.buttons.accentColor};
  border: ${(props) => props.theme.buttons.accentBorders};
  background: ${(props) => props.theme.buttons.accentBackground};

  &:focus,
  &:active,
  &:hover {
    border: ${(props) => props.theme.buttons.accentHoverBorders};
    background: ${(props) => props.theme.buttons.accentHoverBackground};
    text-decoration: none;
  }
`;

const muted = css`
  color: ${(props) => props.theme.buttons.mutedColor};
  border: ${(props) => props.theme.buttons.mutedBorders};
  background: ${(props) => props.theme.buttons.mutedBackground};

  &:focus,
  &:active,
  &:hover {
    color: ${(props) => props.theme.buttons.mutedColor};
    border: ${(props) => props.theme.buttons.mutedHoverBorders};
    background: ${(props) => props.theme.buttons.mutedHoverBackground};
  }
`;

const round = css`
  border-radius: ${(props) => props.theme.buttons.roundButtonRadius};
`;

const square = css`
  border-radius: 0;
`;

const full = css`
  display: block;
  width: 100%;
`;

const btnStyle = css<ButtonProps>`
  ${baseFont}

  -webkit-appearance: none;
  display: inline-block;
  border-radius: ${(props) => props.theme.buttons.borderRadius};
  border: ${(props) => props.theme.buttons.borders};
  font-weight: ${(props) => props.theme.buttons.fontWeight};
  font-family: ${(props) => props.theme.buttons.fontFamily};
  font-size: ${(props) => props.theme.buttons.fontSize};
  text-transform: ${(props) => props.theme.buttons.textTransform};
  padding: 0.75rem 1.25rem;
  margin: 0 0 0.5rem 0;
  vertical-align: middle;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  line-height: 1;

  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  color: ${(props) => props.theme.buttons.color};
  border: ${(props) => props.theme.buttons.borders};
  background: ${(props) => props.theme.buttons.background};

  &:focus,
  &:active,
  &:hover {
    border: ${(props) => props.theme.buttons.hoverBorders};
    background: ${(props) => props.theme.buttons.backgroundHover};
    text-decoration: none;
  }

  /* Variants */
  ${(props) => (props.primary ? accent : "")}
  ${(props) => (props.muted ? muted : "")}
  ${(props) => (props.round ? round : "")}
  ${(props) => (props.square ? square : "")}
  ${(props) => (props.full ? full : "")}
`;

export const Button = withDefaultTheme(
  styled.button`
    ${btnStyle}
  `,
);

export const ButtonInput = withDefaultTheme(
  styled.input`
    ${btnStyle}
  `,
);
