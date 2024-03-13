import React, { useContext, useEffect, useState } from "react";
import GroupCard from "../groupCard/GroupCard";
import "./feed.scss";

const Feed = () => {
  const [groups, setGroups] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const token = "4|ddxnKELSNe6qSYowdmq9uXJUsGIhqIEL7wGVGrMbd447670c";
        const response = await fetch("http://squad.ddns.net/api/v1/groups", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch groups");
        }

        const data = await response.json();
        setGroups(data.data); // Assuming data is an array of group objects
      } catch (error) {
        setError(error.message);
      }
    };

    fetchGroups();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="feed">
      {groups.map((group) => (
        // <GroupCard key={group.id} group={group} />
        <GroupCard group={group} key={group.ulid}/>
      ))}
    </div>
  );
};

export default Feed;
