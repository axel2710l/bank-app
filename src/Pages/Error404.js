import React from 'react';
import { NavLink } from "react-router-dom";
import "../index.scss";

const Error404 = () => {
    return (
        <div className='error404'>
            <h1>Il semblerait que la page que vous recherchez n'éxiste pas </h1>
            <NavLink exact
                to="/"
                 >
            Revenir à l'accueil
          </NavLink> 
        </div>
    );
};

export default Error404;