import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";

import { Link } from "../Scaffolding";

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
  <>
    <p>
      It is recommanded to use the GlobalStyle component to apply CSS Normalisation and CSS Resets. To learn more
      checkout{" "}
      <Link href="https://medium.com/@elad/normalize-css-or-css-reset-9d75175c5d1e" target="_blank">
        Normalize CSS or CSS Reset?!
      </Link>
    </p>

    <SyntaxHighlighter language="jsx" style={okaidia}>
      {snippet}
    </SyntaxHighlighter>
  </>
);
