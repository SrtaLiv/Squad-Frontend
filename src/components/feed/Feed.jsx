import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import GroupCard from "../groupCard/GroupCard";
import customAxios from "../CustomAxios";
import Backdrop from "../backdrop/Backdrop";
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
      {groups ? (
        groups.map((group) => (
          <Link to={`/groups/${group.ulid}`} key={group.ulid} style={{ textDecoration: "none", color: "inherit" }}>
            <GroupCard key={group.ulid} group={group} />
          </Link>
        ))
      ) : (
        <Backdrop></Backdrop>
      )}
    </div>
  );
};

export default Feed;
