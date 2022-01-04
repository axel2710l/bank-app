import React from "react";
import { NavLink } from "react-router-dom";
import ClientDetail from "../Components/ClientDetail";
import SidebarAdmin from "../Components/SidebarAdmin";

const ListeClientsAdmin = () => {
  return (
    <div className="container">
      <div className="navbar">
        <div id="navbar_link">
          <NavLink exact to="/ProfilAdmin">
            Tableau de bord &gt;
          </NavLink>
          <NavLink exact to="/Admin/ListeClients">
            Liste des clients
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
            <ClientDetail />
            <ClientDetail />
            <ClientDetail />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListeClientsAdmin;
