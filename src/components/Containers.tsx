import styled, { css } from "styled-components";
import theme, { PrimeTheme } from "./themes";
import { baseFont } from "./mixins";

interface ContainerProps {
  theme: PrimeTheme;
  size?: "small" | "medium" | "large" | "full";
}

export const Container = styled.div<ContainerProps>`
  ${baseFont}
  max-width: ${(props) => {
    let maxWidth;

    if (props.size === "small") {
      maxWidth = props.theme.sizes.small;
    } else if (props.size === "medium") {
      maxWidth = props.theme.sizes.medium;
    } else if (props.size === "full") {
      maxWidth = "100%";
    } else {
      maxWidth = props.theme.sizes.large;
    }

    return maxWidth;
  }};

  ${(props) =>
    props.size === "full"
      ? css`
          padding: 0 1rem;
        `
      : css`
          padding: 0 ${(props) => props.theme.spacing.paddings};
          margin-left: auto;
          margin-right: auto;
        `}
`;

Container.defaultProps = { theme: { ...theme } };

export const Section = styled.section`
  ${baseFont}
  padding: ${(props) => props.theme.spacing.contentPaddingMobile};
`;

Section.defaultProps = { theme: { ...theme } };
