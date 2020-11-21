import React from "react";

import { JsxCode } from "./JsxCode";

import { DocSection } from "./DocSection";

const snippet = `
import { GlobalStyle } from 'Primitive'

const App = () => (
  <>
    <Button />
    <Button accent />
    <Button muted />
    <Button round />
    <Button square />
    <Button full />
  </>
);
`;

export const ButtonDemo = () => (
  <DocSection title="Button">
    <JsxCode snippet={snippet} />
  </DocSection>
);
