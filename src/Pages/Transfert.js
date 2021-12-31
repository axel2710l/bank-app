import React from 'react';
import SidebarClient from '../Components/SidebarClient';

const Transfert = () => {
    return (
        <div className='container'>
        <div className='navbar'><h2>Transfert</h2></div>
        <div className='colonne'>
            <SidebarClient/>
            <div className='contenu'> CONTENU</div>
        </div>
        </div >
    );
};

export default Transfert;