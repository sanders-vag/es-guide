import React, { Fragment } from "react";

const Toc = ({ sourceMap }) => {
  const arrayValues = [...sourceMap.values()];
  if (!arrayValues) return;

  return (
    <Fragment>
      <h2>Table of contents</h2>
      <ul>
        {arrayValues.map(es => (
          <li key={es.title}>
            <a href="">{es.title}</a>
            {buildSecondLevel(es.features)}
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

const buildSecondLevel = features => {
  if (!features) return;

  return (
    <ul>
      {features.map(feature => (
        <li key={feature.title}>
          <a href="">{feature.title}</a>
        </li>
      ))}
    </ul>
  );
};

export default Toc;
