import React from 'react';
import SidebarClient from '../Components/SidebarClient';

const DemandePret = () => {
    return (
        <div className='container'>
        <div className='navbar'><h2>Demande de prêt</h2></div>
        <div className='colonne'>
            <SidebarClient/>
            <div className='contenu'> CONTENU</div>
        </div>
        </div >
    );
};

export default DemandePret;