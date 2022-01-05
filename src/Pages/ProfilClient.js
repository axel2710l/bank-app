import React from "react";
import { NavLink } from "react-router-dom";
import SidebarClient from "../Components/SidebarClient";
import DepotRetrait from "../Images/DepotRetrait.jpg"
import Transfert from "../Images/Transfert.jpg"
import DemandePret from "../Images/DemandePret.jpg"

const ProfilClient = () => {
  return (
    <div className="container">
      <div className="navbar">
      <div id="navbar_link">
          <NavLink exact to="/Profil">
            Tableau de bord 
          </NavLink>
        </div>
      </div>
      <div className="colonne">
        <SidebarClient />
        <div className="contenu"> 
        <h1>Bienvenue, que voulez-vous faire ?</h1>
        <div className="container_choix"> 
        <NavLink exact to="/User/DepotRetrait" >
          <img src={DepotRetrait}></img>
            <h2>Déposer ou retirer de l'argent</h2>
          </NavLink>
          <NavLink exact to="/User/Transfert" >
          <img src={Transfert}></img>
            <h2>Transférer de l'argent à un autre client</h2>
          </NavLink>
          <NavLink exact to="/User/DemandePret" >
          <img src={DemandePret}></img>
            <h2>Effectuer une demande de prêt</h2>
          </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilClient;
