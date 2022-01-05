import React from "react";
import { NavLink } from "react-router-dom";
import Pret from '../Components/Pret'
import Vide from "../Components/Vide";
import SidebarClient from "../Components/SidebarClient";

const DemandePret = () => {
  return (
    <div className="container">
      <div className="navbar">
        <div id="navbar_link">
          <NavLink exact to="/Profil">
            Tableau de bord &gt;
          </NavLink>
          <NavLink exact to="/User/DemandePret">
           Demande de prêt
          </NavLink>
        </div>
      </div>
      <div className="colonne">
        <SidebarClient />
        <div className="contenu">
          <div className="component_container">
            <Pret/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemandePret;
