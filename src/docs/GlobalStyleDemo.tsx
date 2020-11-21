import React from "react";

import { JsxCode } from "./JsxCode";

import { Link } from "Primitive";
import { DocSection } from "./DocSection";

const snippet = `
import { GlobalStyle } from 'Primitive'

const App = () => (
  <>
    <GlobalStyle />
    <div>{/*  the rest of my app*/}</div>
  </>
);
`;

export const GlobalStyleDemo = () => (
  <DocSection title="Global Styles">
    <p>
      It is recommanded to use the GlobalStyle component to apply CSS Normalisation and CSS Resets. To learn more
      checkout{" "}
      <Link href="https://medium.com/@elad/normalize-css-or-css-reset-9d75175c5d1e" target="_blank">
        Normalize CSS or CSS Reset?!
      </Link>
    </p>

    <JsxCode snippet={snippet} />
  </DocSection>
);
