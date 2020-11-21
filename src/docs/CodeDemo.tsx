import React from "react";

import { JsxCode } from "./JsxCode";

import { DocSection } from "./DocSection";
import { CodeBlock, InlineCode, KeyboardCmd } from "Primitive";
const snippet = `
import { GlobalStyle } from 'Primitive'

const App = () => (
  <>
    <CodeBlock>{JSON.stringify({ name: "John", age: 24 }, null, 2)}</CodeBlock>

    <p>
      Inline code: <InlineCode>const a = 20</InlineCode>
    </p>

    <p>
      Keyboard command: <KeyboardCmd>Ctrl + v</KeyboardCmd>
    </p>
  </>
);
`;

export const CodeDemo = () => (
  <DocSection title="Code">
    <JsxCode snippet={snippet} />
    <CodeBlock>{JSON.stringify({ name: "John", age: 24 }, null, 2)}</CodeBlock>

    <p>
      Inline code: <InlineCode>const a = 20</InlineCode>
    </p>

    <p>
      Keyboard command: <KeyboardCmd>Ctrl + v</KeyboardCmd>
    </p>
  </DocSection>
);
