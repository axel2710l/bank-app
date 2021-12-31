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
                to="/sign-up"
                 id="inscrition_accueil">
            Inscription
          </NavLink> 
          <NavLink exact
                to="/sign-in"
                  id="connexion_accueil">
            Connexion
          </NavLink>
        </div>
      </div>
      <h1 className="bienvenue">
            Bienvenue dans <span>REACT BANK!</span>
          </h1>
      <div className="accueil">
        <div className="text_accueil">
          <h3>
            Gérez votre compte, effectuez des transactions et profitez de nos prêts en toute sécurité.
          </h3>
          <NavLink exact
                to="/sign-up"
                 id="commencer">Commencer</NavLink>
        </div>
        <img src={image}></img>
      </div>
    </div>
  );
};

export default Accueil;
