import React from "react";
import { NavLink } from "react-router-dom";
import Historique from "../Components/Historique";
import Vide from "../Components/Vide";
import SidebarClient from "../Components/SidebarClient";

const HistoriqueClient = () => {
  return (
    <div className="container">
      <div className="navbar">
        <div id="navbar_link">
          <NavLink exact to="/Profil">
            Tableau de bord &gt;
          </NavLink>
          <NavLink exact to="/User/Historique">
            Historique
          </NavLink>
        </div>
      </div>
      <div className="colonne">
        <SidebarClient />
        <div className="contenu">
          <div className="recherche_container">
            <input placeholder="Rechercher..." autoFocus></input>
          </div>
          <div className="component_container">
            <Historique />
            <Historique />
            <Historique />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoriqueClient;
