import React from 'react';
import { NavLink } from 'react-router-dom';
import SidebarClient from '../Components/SidebarClient';

const Transfert = () => {
    return (
        <div className='container'>
        <div className='navbar'>
        <div id="navbar_link">
          <NavLink exact to="/Profil">
            Tableau de bord &gt;
          </NavLink>
          <NavLink exact to="/User/Transfert">
            Transfert
          </NavLink>
        </div>
        </div>
        <div className='colonne'>
            <SidebarClient/>
            <div className='contenu'> CONTENU</div>
        </div>
        </div >
    );
};

export default Transfert;