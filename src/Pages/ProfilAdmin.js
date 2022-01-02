import React from 'react';
import { NavLink } from "react-router-dom";
import SidebarAdmin from "../Components/SidebarAdmin";
import Historique from "../Images/Historique.png"
import PretAdmin from "../Images/PretAdmin.jpg"
import ListeClients from "../Images/ListeClients.jpg"

const ProfilAdmin = () => {
    return (
        <div className="container">
      <div className="navbar">
      <div id="navbar_link">
          <NavLink exact to="/ProfilAdmin">
            Tableau de bord 
          </NavLink>
        </div>
      </div>
      <div className="colonne">
        <SidebarAdmin />
        <div className="contenu"> 
        <h1>Bienvenue, que voulez-vous faire ?</h1>
        <div className="container_choix"> 
        <NavLink exact to="/Admin/Historique">
          <img src={Historique} className='choix1'></img>
            <h2>Voir l'historique des transactions</h2>
          </NavLink>
          <NavLink exact to="/Admin/Pret">
          <img src={PretAdmin}></img>
            <h2>Gérer les demandes de prêt</h2>
          </NavLink>
          <NavLink exact to="/Admin/ListeClients" >
          <img src={ListeClients} className='choix3'></img>
            <h2>Voir la liste détaillée des clients</h2>
          </NavLink>
          </div>
        </div>
      </div>
    </div>
    );
};

export default ProfilAdmin;