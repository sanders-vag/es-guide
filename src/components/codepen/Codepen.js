import React from "react";
import Row from "react-bootstrap/Row";

import "./Codepen.css";

const Codepen = ({ hash, name }) => {
  return (
    <p
      className="codepen"
      data-height="280"
      data-theme-id="0"
      data-default-tab="js,result"
      data-slug-hash={hash}
      data-pen-title="variables"
    >
      <span>
        See the Pen{" "}
        <a href={`https://codepen.io/sanders-vag/pen/${hash}`}>{name}</a> by
        mimacom on <a href="https://codepen.io">CodePen</a>.
      </span>
    </p>
  );
};

export default Codepen;
