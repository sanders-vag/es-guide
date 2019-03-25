import React from "react";

import SectionItem from "../section-item/SectionItem";

const SectionList = ({ sections }) => {
  if (!sections) return;

  return (
    <div className="section-list">
      {sections.map(section => (
        <SectionItem section={section} key={section.title} />
      ))}
    </div>
  );
};

export default SectionList;
