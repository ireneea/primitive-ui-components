import React from "react";

import { JsxCode } from "./JsxCode";

import { DocSection } from "./DocSection";

const snippet = `
import { GlobalStyle } from 'Primitive'

const App = () => (
  <>
    <Heading level={1} />
    <Heading level={2} />
    <Heading level={3} />
    <Heading level={4} />
    <Heading level={5} />
  </>
);
`;

export const HeadingDemo = () => (
  <DocSection title="Heading">
    <JsxCode snippet={snippet} />
  </DocSection>
);
