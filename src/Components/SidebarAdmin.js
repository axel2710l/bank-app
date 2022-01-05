import React from "react";
// import { NavLink } from "react-router-dom";
import "../index.scss";
import Avatar from "../Images/Avatar.png";

const SidebarAdmin = () => {
  return (
    <div className="sidebar">
      <div className="photo">
        <img src={Avatar} alt="photo de profil" />
      </div>
      <h3>Jhon Doe</h3>
      <p>id: xxx-xxx-xxx</p>
      <p className="email">test@test.com</p>
      
     
      <button>Déconnexion</button>
    </div>
  );
};

export default SidebarAdmin;
