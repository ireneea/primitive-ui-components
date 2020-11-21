import React from "react";

import { JsxCode } from "./JsxCode";

import { DocSection } from "./DocSection";
import { Button } from "Primitive";

const snippet = `
import { GlobalStyle } from 'Primitive'

const App = () => (
  <>
    <Button>button</Button>
    <Button accent>accent</Button>
    <Button muted>muted</Button>
    <Button round>round</Button>
    <Button square>square</Button>
    <Button full>full</Button>
  </>
);
`;

export const ButtonDemo = () => (
  <DocSection title="Button">
    <JsxCode snippet={snippet} />

    <Button>button</Button>
    <Button accent>accent</Button>
    <Button muted>muted</Button>
    <Button round>round</Button>
    <Button square>square</Button>
    <Button full>full</Button>
  </DocSection>
);
