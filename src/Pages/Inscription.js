import React from "react";
import "../index.scss";
import "../Inscription.scss";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import image from "../Images/Inscription.png";
import { signup } from "../utils/auth";
import { click } from "@testing-library/user-event/dist/click";
import { getAuth } from "firebase/auth";

const Inscription =  () => {
  useEffect(() => {
    // recupérer les infos current user
    console.log(getAuth().currentUser);
  }, [])
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
  
          <div className="full-width sign-in">
            <p>
              Vous êtes déja inscrit?{" "}
              <NavLink exact to="/sign-in" id="connexion_accueil">
                Connectez vous!
              </NavLink>
            </p>
          </div>
        </form>
        <div className="full-width">
            <button className="btn" onClick={()=> {signup()}} >S'inscrire</button>
          </div>
      </div>
    </div>
  );
};

export default Inscription;
