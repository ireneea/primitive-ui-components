import React from "react";

import { H1, H2, Container, Section, Link, GlobalStyle } from "Primitive";

import { GlobalStyleDemo } from "./GlobalStyleDemo";
import { LayoutDemo } from "./LayoutDemo";
import { HeadingDemo } from "./HeadingDemo";

export default function Docs() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <H1>Primitive UI Components</H1>
        <p>
          React components based on{" "}
          <Link href="https://taniarascia.github.io/primitive/" target="_blank">
            Primitive UI
          </Link>{" "}
          by
          <Link href="https://www.taniarascia.com">Tania Rascia</Link>.
        </p>

        <p>
          For now this is only available in demo only version but the source code can found on{" "}
          <Link href="https://github.com/ireneea/primitive-ui-components" target="_blank">
            GitHub
          </Link>
        </p>

        <GlobalStyleDemo />
        <LayoutDemo />
        <HeadingDemo />

        <Section>
          <H2>Buttons</H2>
          <p>Documentation coming soon</p>
        </Section>

        <Section>
          <H2>Code</H2>
          <p>Documentation coming soon</p>
        </Section>

        <Section>
          <H2>Theme</H2>
          <p>Documentation coming soon</p>
        </Section>
      </Container>
    </>
  );
}
