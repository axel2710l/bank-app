import React from "react";
import { NavLink } from "react-router-dom";
import GestionPret from "../Components/GestionPret";
import SidebarAdmin from "../Components/SidebarAdmin";

const PretAdmin = () => {
  return (
    <div className="container">
      <div className="navbar">
        {" "}
        <div id="navbar_link">
          <NavLink exact to="/ProfilAdmin">
            Tableau de bord &gt;
          </NavLink>
          <NavLink exact to="/Admin/Pret">
            Demandes de prêt
          </NavLink>
        </div>
      </div>
      <div className="colonne">
        <SidebarAdmin />
        <div className="contenu">
          <div className="recherche_container">
            <input placeholder="Rechercher..." autoFocus></input>
          </div>
          <div className="component_container">
            <GestionPret />
            <GestionPret />
            <GestionPret />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PretAdmin;
