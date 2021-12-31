import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../index.scss";
import image from "../Images/accueil.png";
import logo from "../Images/Logo.png";

const Accueil = () => {
  return (
    <div className="container">
      <div className="navbar_accueil">
        <img src={logo}></img>
        <div className="btn_accueil">
          <NavLink exact
                to="/Inscription"
                 id="inscrition_accueil">
            Inscription
          </NavLink> 
          <NavLink exact
                to="/Connexion"
                  id="connexion_accueil">
            Connexion
          </NavLink>
        </div>
      </div>
      <h1>
            Bienvenue dans <span>REACT BANK!</span>
          </h1>
          <img className="img_accueil" src={image}></img>
      <div className="accueil">
      
        <div className="text_accueil">
          <h3>
            Gérez votre compte, effectuez des transactions et profitez de nos prêts en toute sécurité.
          </h3>
          <NavLink exact
                to="/Inscription"
                 id="commencer">Commencer</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Accueil;
