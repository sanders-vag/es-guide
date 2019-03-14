import React from "react";
import ReactMarkdown from 'react-markdown';
import Codepen from '../codepen/Codepen'

const SectionItem = ({data}) => {
  return (
    <div key={data.title}>
      <h3>{data.title}</h3>
      <hr />
      <h4>Description</h4>
      <ReactMarkdown source={data.description} />
      <h4>Example</h4>
      <Codepen
        url={data.exampleUrl}
        name={data.title}
      />
    </div>
  );
};

export default SectionItem;