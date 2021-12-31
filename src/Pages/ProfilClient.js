import React from 'react';
import SidebarClient from "../Components/SidebarClient";
const ProfilClient = () => {
    return (
        <div className='container'>
        <div className='navbar'><h2>Tableau de bord</h2></div>
        <div className='colonne'>
            <SidebarClient/>
            <div className='contenu'> CONTENU</div>
        </div>
        </div >
    );
};

export default ProfilClient;