import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Historique from "../Components/Historique";
import Vide from "../Components/Vide";
import SidebarClient from "../Components/SidebarClient";

const HistoriqueClient = () => {
  const [recherche, setrecherche] = useState("");
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
            <input placeholder="Rechercher..." autoFocus 
            onChange={(e) => setrecherche(e.target.value)}></input>
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
