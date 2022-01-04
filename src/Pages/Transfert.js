import React from "react";
import { NavLink } from "react-router-dom";
import UserTransfert from '../Components/UserTransfert'
import Vide from "../Components/Vide";
import SidebarClient from "../Components/SidebarClient";

const Transfert = () => {
  return (
    <div className="container">
      <div className="navbar">
        <div id="navbar_link">
          <NavLink exact to="/Profil">
            Tableau de bord &gt;
          </NavLink>
          <NavLink exact to="/User/Transfert">
            Transfert
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
            <UserTransfert/>
            <UserTransfert/>
            <UserTransfert/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transfert;
