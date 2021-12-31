import React from 'react';
import SidebarClient from '../Components/SidebarClient';

const DepotRetrait = () => {
    return (
        <div className='container'>
        <div className='navbar'><h2>Dépôt/Retrait</h2></div>
        <div className='colonne'>
            <SidebarClient/>
            <div className='contenu'> CONTENU</div>
        </div>
        </div >
    );
};

export default DepotRetrait;