import React from "react";
import ReactMarkdown from 'react-markdown';
import Codepen from '../codepen/Codepen'

const SectionItem = ({data}) => {
  if (!data.exampleHash) {
    return (
      <div key={data.title}>
      <h3>{data.title}</h3>
      <hr />
      <h4>Description</h4>
      <ReactMarkdown source={data.description} />
    </div>
    )
  } else {
  return (
    <div key={data.title}>
      <h3>{data.title}</h3>
      <hr />
      <h4>Description</h4>
      <ReactMarkdown source={data.description} />
      <h4>Example</h4>
      <Codepen
        hash={data.exampleHash}
        name={data.title}
      />
    </div>
  );
}
};

export default SectionItem;