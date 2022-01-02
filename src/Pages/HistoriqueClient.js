import React from 'react';
import { NavLink } from 'react-router-dom';
import SidebarClient from '../Components/SidebarClient';

const HistoriqueClient = () => {
    return (
        <div className='container'>
        <div className='navbar'>  <div id="navbar_link">
          <NavLink exact to="/Profil">
            Tableau de bord &gt;
          </NavLink>
          <NavLink exact to="/User/Historique">
           Historique
          </NavLink>
        </div></div>
        <div className='colonne'>
            <SidebarClient/>
            <div className='contenu'> CONTENU</div>
        </div>
        </div >
    );
};

export default HistoriqueClient;