import React from "react";
import { NavLink } from "react-router-dom";
import SidebarClient from "../Components/SidebarClient";

const DepotRetrait = () => {
  return (
    <div className="container">
      <div className="navbar">
        <div id="navbar_link">
          <NavLink exact to="/Profil">
            Tableau de bord &gt;
          </NavLink>
          <NavLink exact to="/User/DepotRetrait">
            Dépôt / Retrait
          </NavLink>
        </div>
      </div>
      <div className="colonne">
        <SidebarClient />
        <div className="contenu">
          <h1 className="depot_titre">
            Veuillez préciser la somme que vous voulez retirer ou déposer
          </h1>
          <div className="depot">
            <input
              type="text"
              name="somme"
              className="ajouternomtache"
              autoFocus
              placeholder="00.00"
              className='depotretrait'
            ></input>{"  "}
            <span>DA</span>
            <input
              type="text"
              name="id"
              className="ajouternomtache"
              placeholder="id du compte"
              className='depotretrait'
            ></input>
            <div className="btn">
            <button className="retirer">Retirer</button>
            <button className="deposer">Déposer</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepotRetrait;
