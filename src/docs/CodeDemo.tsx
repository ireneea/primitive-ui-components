import React from "react";

import { JsxCode } from "./JsxCode";

import { DocSection } from "./DocSection";
import { CodeBlock } from "Primitive";

const snippet = `
import { GlobalStyle } from 'Primitive'

const App = () => (
  <>
    <CodeBlock>
    ${`
const a = 10;
console.log(a);`}
    </ CodeBlock>
    <Heading level={2} />
    <Heading level={3} />
    <Heading level={4} />
    <Heading level={5} />
  </>
);
`;

export const CodeDemo = () => (
  <DocSection title="Code">
    <JsxCode snippet={snippet} />
  </DocSection>
);
