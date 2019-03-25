import React from "react";
import Feature from "../feature/Feature";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkSquareAlt } from "@fortawesome/free-solid-svg-icons";

const SectionItem = ({ section }) => {
  if (!section) return;
  return (
    <div className="section">
      <h2 id={section.tag} name={section.tag}>
        {section.title}{" "}
        {section.specUrl && (
          <a
            target="_blank"
            rel="noopener noreferrer"
            title="Go to specification"
            href={section.specUrl}
          >
            <FontAwesomeIcon icon={faExternalLinkSquareAlt} />
          </a>
        )}
      </h2>

      {section.features && section.features.map(feature => (
        <Feature key={feature.title} feature={feature} />
      ))}
    </div>
  );
};

export default SectionItem;
