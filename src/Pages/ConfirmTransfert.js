import React from 'react';
import { NavLink } from 'react-router-dom';
import SidebarClient from '../Components/SidebarClient';

const ConfirmTransfert = () => {
    return (
        <div className="container">
        <div className="navbar">
          <div id="navbar_link">
            <NavLink exact to="/Profil">
              Tableau de bord &gt;
            </NavLink>
            <NavLink exact to="/User/Transfert">
              Transfert &gt;
            </NavLink>
            <NavLink exact to="/User/Transfert/Confirm">
              Confirmer le transfert 
            </NavLink>
          </div>
        </div>
        <div className="colonne">
          <SidebarClient />
          <div className="contenu">
            <h1 className="depot_titre">
            Veuillez préciser la somme que vous voulez transférer
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
              <button className="deposer">Transférer</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ConfirmTransfert;

