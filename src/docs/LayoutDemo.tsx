import { InlineCode } from "Primitive";
import React from "react";

import { DocSection } from "./DocSection";
import { JsxCode } from "./JsxCode";

const containerSnippet = `
  import { Container, Section, GridCell, GridRow } from 'Primitive'

  const App = () => (
    <Container small>
      <Section>
        Section
      </Section>

      <GridRow>
        <GridCell size="half">1/2</GridCell>
        <GridCell size="half">1/2</GridCell>

        <GridCell size="oneFourth">1/4</GridCell>
        <GridCell size="threeFourths">3/4</GridCell>

        <GridCell size="oneThird">1/3</GridCell>
        <GridCell size="twoThird">2/3</GridCell>
      </GridRow>
    </Container>
  )
`;

export const LayoutDemo = () => {
  return (
    <DocSection title="Layout">
      <p>
        Build your application layout using <InlineCode>Container</InlineCode>, <InlineCode>Section</InlineCode>,{" "}
        <InlineCode>GridRow</InlineCode> and <InlineCode>GridCell</InlineCode> components
      </p>
      <JsxCode snippet={containerSnippet} />
    </DocSection>
  );
};
