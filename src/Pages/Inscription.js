import React from "react";
import "../index.scss";
import "../Styles/Inscription.scss";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import image from "../Images/Inscription.png";
import { signup } from "../utils/auth";
import { click } from "@testing-library/user-event/dist/click";
import { getAuth } from "firebase/auth";
import { useHistory } from "react-router-dom";

const Inscription =  () => {
  const history = useHistory();
  useEffect(() => {
    // recupérer les infos current user
    console.log(getAuth().currentUser);
    // history.push("/Profil");
  }, [])
  async function sign(){
    await signup();
    console.log('urrentUser :');
    console.log(getAuth().currentUser);
  }
  return (
    <div id="inscription" className="container inscription">
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="form-insc">
        <div className="title">
          <h1>Veuillez remplir vos Insormations!</h1>
        </div>

        <form>
          {/* <div className="nom-prenom ">
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
          </div> */}
          <div className="full-width">
            <input type="number" name="solde" placeholder="Solde Initial" />
          </div>
          <div className="full-width">
            <input
              type="password"
              name="pin-code"
              placeholder="Code PIN (4 chiffres) "
            />
          </div>
          <div className="full-width">
            <input
              type="password"
              name="confirm-pin"
              placeholder="Confirmez votre code PIN "
            />
          </div>
  
          <div className="full-width sign-in">
            <p>
            IMPORTANT! <br/>
            Gardez minutieusement votre <span style={{color: "red"}}>code PIN</span> 
             
            </p>
          </div>
        </form>
        <div className="full-width">
            <button className="btn"  >Confirmer</button>
          </div>
      </div>
    </div>
  );
};

export default Inscription;
