import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// import AuthGuard from "../components/AuthGuard";
import Navbar from "../components/Navbar";
import Tag from "../components/Tag";
import Backdrop from "../components/Backdrop";
import Loader from "../components/Loader";

import logo from "../assets/logo.png";
import "../styles/forms.scss";
import "../styles/createGroup.scss";

const CreateGroup = () => {
  const [groupData, setGroupData] = useState({
    title: "",
    description: "",
    privacy: "",
    maxMembers: 0,
    idCarrera: 0,
    tags: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGroupData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTagChange = (newTags) => {
    setGroupData((prevData) => ({
      ...prevData,
      tags: newTags,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(groupData);
  };

  return (
    <>

      <Navbar>
        <div className="icon-btn void"></div>
        <div className="navbar-logo">
          <img src={logo} alt="SQUAD" />
        </div>
        <Link to="/" className="icon-btn">
          <i className="fa-solid fa-xmark"></i>
        </Link>
      </Navbar>

      <div className="container">
        <div className="header">
          <h2>
            <i className="fa-solid fa-user-group"></i> Crear nuevo grupo
          </h2>
        </div>

        <form className="newGroupForm" onSubmit={handleSubmit}>
          <div className="input-group">
            <label className="input-title">
              <i className="fa-solid fa-quote-left"></i> Titulo
            </label>
            <input type="text" name="title" value={groupData.title} onChange={handleChange} className="input-control" required></input>
          </div>

          <div className="input-group">
            <label className="input-title">
              <i className="fa-solid fa-building-columns"></i> Facultad
            </label>
            <select className="input-control" required>
              <option>Facultad de ciencias exactas</option>
              <option>Facultad de ciencias economicas</option>
            </select>
          </div>

          <div className="input-group">
            <label className="input-title">
              <i className="fa-solid fa-graduation-cap"></i> Carrera
            </label>
            <select name="idCarrera" value={groupData.idCarrera} onChange={handleChange} className="input-control">
              <option value="1">Ingenieria en sistemas</option>
              <option value="2">TUDAI</option>
            </select>
          </div>

          <div className="input-group">
            <label className="input-title">
              <i className="fa-solid fa-quote-left"></i> Descripcion
            </label>
            <textarea name="description" value={groupData.description} onChange={handleChange} className="input-control textarea" required></textarea>
          </div>

          <label className="input-title">
            <i className="fa-solid fa-tag"></i> Tags
          </label>
          <div className="tagSelection">
            <Tag value="cursada" tags={groupData.tags} setTags={handleTagChange}>Cursada</Tag>
            <Tag value="parcial" tags={groupData.tags} setTags={handleTagChange}>Parcial</Tag>
            <Tag value="final" tags={groupData.tags} setTags={handleTagChange}>Final</Tag>
            <Tag value="online" tags={groupData.tags} setTags={handleTagChange}>Online</Tag>
            <Tag value="presencial" tags={groupData.tags} setTags={handleTagChange}>Presencial</Tag>
            <Tag value="hibrido" tags={groupData.tags} setTags={handleTagChange}>Hibrido</Tag>
          </div>

          <div className="input-group">
            <label className="input-title">
              <i className="fa-solid fa-eye"></i> Privacidad
            </label>
            <select name="privacy" onChange={handleChange} className="input-control">
              <option value="open">Abierto</option>
              <option value="closed">Cerrado</option>
              <option value="private">Privado</option>
            </select>
          </div>

          <div className="input-group">
            <label className="input-title">
              <i className="fa-solid fa-user"></i> Limite de miembros
            </label>
            <input type="number" name="maxMembers" className="input-control"></input>
          </div>

          <button className="btn" type="submit">
            <i className="fa-regular fa-plus"></i> Crear nuevo grupo
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateGroup;
