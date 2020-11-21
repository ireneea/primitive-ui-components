import styled, { css } from "styled-components";
import { withDefaultTheme } from "../themes";

export const GridRow = withDefaultTheme(
  styled.div`
    margin-left: -${(props) => props.theme.grids.padding};
    margin-right: -${(props) => props.theme.grids.padding};
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  `,
);
