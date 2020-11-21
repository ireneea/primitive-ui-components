import React from "react";

import { JsxCode } from "./JsxCode";

import { DocSection } from "./DocSection";
import { H1, H2, H3, H4, H5 } from "Primitive";

const snippet = `
import { GlobalStyle } from 'Primitive'

const App = () => (
  <>
    <H1>Heading 1</H1>
    <H2>Heading 2</H2>
    <H3>Heading 3</H3>
    <H4>Heading 4</H4>
    <H5>Heading 5</H5>
  </>
);
`;

export const HeadingDemo = () => (
  <DocSection title="Heading">
    <JsxCode snippet={snippet} />
    <H1>Heading 1</H1>
    <H2>Heading 2</H2>
    <H3>Heading 3</H3>
    <H4>Heading 4</H4>
    <H5>Heading 5</H5>
  </DocSection>
);
