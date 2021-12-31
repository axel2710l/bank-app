import React from 'react';
import SidebarClient from '../Components/SidebarClient';

const HistoriqueClient = () => {
    return (
        <div className='container'>
        <div className='navbar'><h2>Historique</h2></div>
        <div className='colonne'>
            <SidebarClient/>
            <div className='contenu'> CONTENU</div>
        </div>
        </div >
    );
};

export default HistoriqueClient;