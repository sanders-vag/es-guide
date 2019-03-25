import React, { Fragment } from "react";

const Toc = ({ data }) => {
  
  if (!data) return;

  return (
    <Fragment>
      <h2>Table of contents</h2>
      <ul className='section-list'>
        {data.map(es => (
          <li key={es.title}>
            <a href={`#${es.tag}`}>{es.title}</a>
            {buildSecondLevel(es.features)}
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

const buildSecondLevel = features => {
  if (!features || features.length === 0) return;

  return (
    <ul className='features-list'>
      {features.map(feature => (
        <li key={feature.title}>
          <a href={`#${feature.tag}`}>{feature.title}</a>
        </li>
      ))}
    </ul>
  );
};

export default Toc;
