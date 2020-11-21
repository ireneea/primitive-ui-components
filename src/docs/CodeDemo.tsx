import React from "react";

import { JsxCode } from "./JsxCode";

import { DocSection } from "./DocSection";

const snippet = `
import { GlobalStyle } from 'Primitive'

const App = () => (
  <>
    <CodeBlock>
    ${`$\{\`const a = 10;
console.log(a);\`}`}
    </ CodeBlock>

    <InlineCode>a</InlineCode> is a variable

    <KeyboardCmd>Ctrl + v</KeyboardCmd>
  </>
);
`;

export const CodeDemo = () => (
  <DocSection title="Code">
    <JsxCode snippet={snippet} />
  </DocSection>
);
