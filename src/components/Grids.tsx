import styled, { css } from "styled-components";
import { withDefaultTheme } from "./themes";

export const GridRow = withDefaultTheme(
  styled.div`
    margin-left: -${(props) => props.theme.grids.padding};
    margin-right: -${(props) => props.theme.grids.padding};
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  `,
);

interface GridCellProps {
  breakpoint?: "small" | "large";
  size?: "half" | "oneFourth" | "threeFourths" | "oneThird" | "twoThird";
}

const breakpoint = css<GridCellProps>`
  margin-bottom: 0;
  flex: ${(props) => {
    let flex = "";
    if (props.size === "half") {
      flex = "0 0 calc(1 / 2 * 100%)";
    } else if (props.size === "oneFourth") {
      flex = "0 0 calc(1 / 4 * 100%)";
    } else if (props.size === "threeFourths") {
      flex = "0 0 calc(3 / 4 * 100%)";
    } else if (props.size === "oneThird") {
      flex = "0 0 calc(1 / 3 * 100%)";
    } else if (props.size === "twoThird") {
      flex = "0 0 calc(2 / 3 * 100%)";
    } else {
      flex = "1";
    }

    return flex;
  }};
`;

const cell = css<GridCellProps>`
  padding-left: ${(props) => props.theme.grids.padding};
  padding-right: ${(props) => props.theme.grids.padding};
  margin-bottom: ${(props) => props.theme.grids.marginBottom};
  flex-basis: 100%;

  @media ${(props) => props.theme.mobileBreakPoint} {
    ${(props) => (props.breakpoint === "small" ? breakpoint : "")}
  }

  @media ${(props) => props.theme.desktopBreakPoint} {
    ${(props) => (props.breakpoint !== "small" ? breakpoint : "")}
  }
`;

export const GridCell = withDefaultTheme(
  styled.div`
    ${cell}
  `,
);
