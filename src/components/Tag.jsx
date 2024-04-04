import React, { useState } from "react";
import { capFirst } from "../utils/stringUtils";

const Tag = ({ value, isSelected, onClick }) => {
  
  // const [selected, setSelected] = useState(false);

  // const handleClick = () => {
  //   setSelected(!selected);
  //   if (!selected) {
  //     setTags([...tags, value]);
  //   } else {
  //     setTags(tags.filter((tag) => tag !== value));
  //   }
  // };

  return (
    <button className={`filterBadge ${isSelected ? "selected" : ""}`} onClick={onClick}>
      {capFirst(value)}
    </button>
  );
};

export default Tag;
