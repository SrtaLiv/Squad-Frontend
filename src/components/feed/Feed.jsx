import React, { useContext, useEffect, useState } from "react";
import GroupCard from "../groupCard/GroupCard";
import customAxios from "../CustomAxios";
import "./feed.scss";

const Feed = () => {
  const [groups, setGroups] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const response = await customAxios.get("/groups");
        setGroups(response.data.data);

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
        <GroupCard key={group.ulid} group={group} />
      ))}
    </div>
  );
};

export default Feed;
