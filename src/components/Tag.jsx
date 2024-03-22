import React, { useState } from "react";

const Tag = ({ value, tags, setTags }) => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!selected);
    if (!selected) {
      setTags([...tags, value]);
    } else {
      setTags(tags.filter((tag) => tag !== value));
    }
  };

  return (
    <button className={`filterBadge ${selected ? "selected" : ""}`} onClick={handleClick}>
      {value}
    </button>
  );
};

export default Tag;
