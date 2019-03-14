import React from "react";
import ReactMarkdown from "react-markdown";

import Codepen from "../codepen/Codepen";

import "./SectionItem.css";

const SectionItem = ({ data }) => {
  if (!data.exampleHash) {
    return (
      <div>
        <a name={data.tag}><h3>{data.title}</h3></a>
        <hr />
        <h4>Description</h4>
        <ReactMarkdown source={data.description} />
      </div>
    );
  } else {
    return (
      <div>
        <a name={data.tag}><h3>{data.title}</h3></a>
        <hr />
        <h4>Description</h4>
        <ReactMarkdown source={data.description} />
        <h4>Example</h4>
        <div className="example">
          <Codepen hash={data.exampleHash} name={data.title} />
        </div>
      </div>
    );
  }
};

export default SectionItem;
