import React from "react";
import styled, { css } from "styled-components";

import { DocSection } from "./DocSection";
import { JsxCode } from "./JsxCode";
import { Container, Section, GridRow, GridCell, InlineCode } from "Primitive";

const containerSnippet = `
  import { Container, Section, GridCell, GridRow } from 'Primitive'

  const App = () => (
    <>
      {/* Container size be set to "small", "medium", "large" or "full"*/}
      <Container small>
        <Section>
          Section
        </Section>
      </Container>

      <Container medium>
        <GridRow>
          <GridCell size="half">1/2</GridCell>
          <GridCell size="half">1/2</GridCell>
        </GridRow>
        
        <GridRow>
          <GridCell size="oneFourth">1/4</GridCell>
          <GridCell size="threeFourths">3/4</GridCell>
        </GridRow>
        
        <GridRow>
          <GridCell size="oneThird">1/3</GridCell>
          <GridCell size="twoThird">2/3</GridCell>
        </GridRow>
      </Container>
    </>
  )
`;

const border = css`
  border: 1px solid #0366ee;
  margin-bottom: 0.25rem;
`;

const BorderedCell = styled(GridCell)`
  ${border}
`;

const BorderedSection = styled(Section)`
  ${border}
`;

export const LayoutDemo = () => {
  return (
    <DocSection title="Layout">
      <p>
        Build your application layout using <InlineCode>Container</InlineCode>, <InlineCode>Section</InlineCode>,{" "}
        <InlineCode>GridRow</InlineCode> and <InlineCode>GridCell</InlineCode> components
      </p>
      <JsxCode snippet={containerSnippet} />

      <Container size="small">
        <BorderedSection>Section</BorderedSection>
      </Container>

      <Container size="medium">
        <GridRow>
          <BorderedCell size="half">1/2</BorderedCell>
          <BorderedCell size="half">1/2</BorderedCell>
        </GridRow>

        <GridRow>
          <BorderedCell size="oneFourth">1/4</BorderedCell>
          <BorderedCell size="threeFourths">3/4</BorderedCell>
        </GridRow>

        <GridRow>
          <BorderedCell size="oneThird">1/3</BorderedCell>
          <BorderedCell size="twoThird">2/3</BorderedCell>
        </GridRow>
      </Container>
    </DocSection>
  );
};
