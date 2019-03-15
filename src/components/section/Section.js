import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkSquareAlt } from "@fortawesome/free-solid-svg-icons";

import SectionItem from "../section-item/SectionItem";

const Section = ({ data }) => {
  return (
    <div>
      {data.map(es => (
        <div key={es.title}>
          <a id={es.tag} name={es.tag}>
            <h2>
              {es.title}{" "}
              {es.specUrl && 
              <a
                target="_blank"
                title="Go to specification"
                href={es.specUrl}
              >
                <FontAwesomeIcon icon={faExternalLinkSquareAlt} />
              </a>}
            </h2>
          </a>
          {es.features.map(feature => (
            <SectionItem key={feature.title} data={feature} />
          ))}{" "}
        </div>
      ))}
    </div>
  );
};

export default Section;
