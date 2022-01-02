import React from 'react';
import { NavLink } from 'react-router-dom';
import SidebarAdmin from '../Components/SidebarAdmin';

const ListeClientsAdmin = () => {
    return (
        <div className='container'>
        <div className='navbar'>  <div id="navbar_link">
          <NavLink exact to="/ProfilAdmin">
            Tableau de bord &gt;
          </NavLink>
          <NavLink exact to="/Admin/ListeClients">
           Liste des clients
          </NavLink>
        </div></div>
        <div className='colonne'>
            <SidebarAdmin/>
            <div className='contenu'> CONTENU</div>
        </div>
        </div>
    );
};

export default ListeClientsAdmin;