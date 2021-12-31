import React from "react";
import { NavLink } from "react-router-dom";
import "../index.scss";
import Avatar from "../Images/Avatar.png";

const SidebarClient = () => {
  return (
    <div className="sidebar">
      <div className="photo">
        <img src={Avatar} alt="photo de profil" />
      </div>
      <h3>Jhon Doe</h3>
      <p>id: xxx-xxx-xxx</p>
      <p className="email">test@test.com</p>
      <h3>Votre solde</h3>
      <p className="solde">52.000 DA</p>
      <NavLink exact to="/User/Historique" id="historique">
        Votre historique
      </NavLink>
      <button>Déconnexion</button>
    </div>
  );
};

export default SidebarClient;
