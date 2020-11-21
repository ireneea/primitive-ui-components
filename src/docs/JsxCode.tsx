import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";

export const JsxCode = ({ snippet }: { snippet: string }) => {
  return (
    <SyntaxHighlighter language="jsx" style={okaidia}>
      {snippet}
    </SyntaxHighlighter>
  );
};
