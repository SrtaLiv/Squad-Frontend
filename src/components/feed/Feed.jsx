import React, { useContext } from "react";
import GroupCard from "../groupCard/GroupCard";
import "./feed.scss";

const Feed = () => {
  // const {currentUser} = useContext

  //temporal
  const groups = [
    {
      id: 0,
      name: "Oliviaaa",
      title: "Programacion 2 ayuda!!",
      userId: 0,
      cantUser: 3,
      profilePic: "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
      time: 2.3,
    },
    {
      id: 1,
      name: "Santi",
      title: "Estudiar para el final de TMC",
      userId: 1,
      profilePic: "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
      subject: "Programacion 3",
      time: "2 horas",
    },
    {
      id: 2,
      name: "John",
      title: "Preparación para el proyecto final",
      userId: 2,
      profilePic: "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
      subject: "Inteligencia Artificial",
      time: "3 horas",
    },
    {
      id: 3,
      name: "Maria",
      title: "Revisión de conceptos para el examen",
      userId: 3,
      profilePic: "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
      subject: "Física",
      time: "1.5 horas",
    },
  ];

  return (
    <div className="feed">
      {groups.map((group) => (
        <GroupCard group={group} key={group.id} name={group.name} />
      ))}
    </div>
  );
};

export default Feed;
