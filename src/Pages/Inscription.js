import React from "react";
// import "../index.scss";
import "../Styles/Inscription.scss";
import { NavLink } from "react-router-dom";

import image from "../Images/Inscription.png";

const Inscription = () => {
  return (
    <div id="inscription" className="container inscription">
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="form-insc">
        <div className="title">
          <h1>Inscrivez vous !</h1>
        </div>

        <form>
          <div className="nom-prenom ">
            <div className="half-width">
              <input type="text" name="nom" id="nom" placeholder="Nom" />
            </div>
            <div className="half-width">
              <input
                type="text"
                name="prenom"
                id="prenom"
                placeholder="Prénom"
              />
            </div>
          </div>
          <div className="full-width">
            <input type="text" name="email" placeholder="E-mail" />
          </div>
          <div className="full-width">
            <input
              type="password"
              name="password"
              placeholder="Mot de passe "
            />
          </div>
          <div className="full-width">
            <input
              type="password"
              name="confirm-password"
              placeholder="Confirmez votre mot de passe "
            />
          </div>
          <div className="full-width">
            <button className="btn">S'inscrire</button>
          </div>
          <div className="full-width sign-in">
            <p>
              Vous êtes déja inscrit?{" "}
              <NavLink exact to="/sign-in" id="connexion_accueil">
                Connectez vous!
              </NavLink>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Inscription;
