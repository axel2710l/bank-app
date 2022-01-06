import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../index.scss";
import image from "../Images/accueil.png";
import logo from "../Images/Logo.png";
import { signup } from "../utils/auth";
import { getAuth } from "firebase/auth";


const Accueil = () => {
  const [connected, setConnected] = useState(false)


  const sign= () => {

    const user = signup().then((result) => {console.log(result)})

    console.log(user);

  }
  //  function sign(){
  //    console.log('start');

  //   const user =  signup()
  //   console.log(getAuth().currentUser)
  //   if (user.solde==='') {
  //     //go to 'solde initial'
  //   }else{
  //     //go to 'Profil' with parameter: user
  //   }
  // }
  return (
    <div className="container">
      <div className="navbar_accueil">
        <img src={logo}></img>
        <div className="btn_accueil">
        <button  id="inscrition_accueil" onClick={()=> {sign()}}> Inscription</button>
         <button  id="connexion_accueil" onClick={()=> {sign()}}> Connexion</button>
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
          <button  id="commencer" onClick={()=> {sign()}} >Commencer</button>
        </div>
        <img src={image}></img>
      </div>
    </div>
  );
};

export default Accueil;
