import React from "react";

const Codepen = ({url, name}) => {
  return (
    <p
      className="codepen"
      data-height="265"
      data-theme-id="0"
      data-default-tab="js,result"
      data-slug-hash="ZPrOew"
      style={
        ({ height: `265px` },
        { "box-sizing": "border-box" },
        { display: "flex" },
        { "align-items": "center" },
        { "justify-content": "center" },
        { border: "2px solid black" },
        { margin: "1em 0" },
        { padding: `1em` })
      }
      data-pen-title="variables"
    >
      <span>
        See the Pen{" "}
        <a href={url}>{name}</a> by mimacom
        on <a href="https://codepen.io">CodePen</a>.
      </span>
    </p>
  );
};

export default Codepen;