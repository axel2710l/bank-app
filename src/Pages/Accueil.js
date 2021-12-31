import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import "../index.scss";
import Inscription from "../Pages/Inscription";
import Connexion from "../Pages/Connexion";
import image from "../Images/accueil.png";
import logo from "../Images/Logo.png";

const Accueil = () => {
  const [connexion, setconnexion] = useState(false);
  const [inscription, setinscription] = useState(false);
  return (
    <>
      {inscription ? (
        <Inscription />
      ) : connexion ? (
        <Connexion />
      ) : (
        <div className="container">
          <div className="navbar_accueil">
            <img className="logo" src={logo}></img>
            <div className="boutons_accueil">
              <button className="btn_accueil" id="inscrition_accueil">
                Inscription
              </button>
              <button className="btn_accueil" id="connexion accueil">
                Connexion
              </button>
            </div>
          </div>
          <div>
            <div className="text_accueil">
              <h1>
                Bienvenue dans <span>REACT BANK!</span>
              </h1>
              <h2>
                Gérez votre compte et effectuez des transactions en toute
                sécurité.
              </h2>
              <button
                className="btn"
                onClick={() => {
                  setinscription(true)
                }}
              >
                Commencer
              </button>
            </div>
            <img className="image_accueil" src={image}></img>
          </div>
        </div>
      )}
    </>
  );
};

export default Accueil;
