import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import TransactionAdmin from "../Components/TransactionAdmin";
import Vide from "../Components/Vide";
import SidebarAdmin from "../Components/SidebarAdmin";

const HistoriqueAdmin = () => {
  const [recherche, setrecherche] = useState("");
  //Filtrer les recherches
  // .filter((client) => {
  //   if (recherche == "") {
  //     return client;
  //   } else if (client.nom.toLowerCase().includes(recherche.toLowerCase()))
  //     return client;
  // })
  // .sort((a, b) => a.nom.localeCompare(b.nom))
  return (
    <div className="container">
      <div className="navbar">
        <div id="navbar_link">
          <NavLink exact to="/ProfilAdmin">
            Tableau de bord &gt;
          </NavLink>
          <NavLink exact to="/Admin/Historique">
            Historique des transactions
          </NavLink>
        </div>
      </div>
      <div className="colonne">
        <SidebarAdmin />
        <div className="contenu">
          <div className="recherche_container">
            <input placeholder="Rechercher..." autoFocus
             onChange={(e) => setrecherche(e.target.value)}></input>
          </div>
          <div className="component_container">
            <TransactionAdmin />
            <TransactionAdmin />
            <TransactionAdmin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoriqueAdmin;
