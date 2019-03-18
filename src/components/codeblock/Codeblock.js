import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

const Codeblock = ({ value }) => {
  return <SyntaxHighlighter language="javascript">{value}</SyntaxHighlighter>;
};

export default Codeblock;
