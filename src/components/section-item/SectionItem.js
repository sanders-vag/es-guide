import React, { Fragment } from "react";
import ReactMarkdown from "react-markdown";

import Codepen from "../codepen/Codepen";

import "./SectionItem.css";

const SectionItem = ({ data }) => {
  return (
    <div>
      <a id={data.tag} name={data.tag}>
        <h3>{data.title}</h3>
      </a>
      <hr />
      <h4>Description</h4>
      <ReactMarkdown source={data.description} />
      {data.exampleHash && (
        <Fragment>
          <h4>Example</h4>
          <div className="example">
            <Codepen hash={data.exampleHash} name={data.title} />
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default SectionItem;
