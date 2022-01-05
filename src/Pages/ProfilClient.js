import React from "react";
import SidebarClient from "../Components/SidebarClient";
import "../Styles/ProfilClient.scss";
import commande1 from "../Images/Retraitdepot.jpg";
import commande2 from "../Images/Transfert.jpg";
import commande3 from "../Images/DemandePret.jpg";
import { NavLink } from "react-router-dom";

const ProfilClient = () => {
  // const {nom = 'Jhon', prenom = 'DOE'} = data;
  return (

    <div className="container" id="profil-client">
      <div className="navbar">
        <h2>Tableau de bord</h2>
      </div>
      <div className="colonne">
        <SidebarClient />
        <div className="contenu">
          <h1>Bonjour Jhon, Que souhaitez vous faire ? </h1>
          <div className="commandes">
            <div className="commande">
              <NavLink exact to="/User/DepotRetrait">
                <img
                  src={commande1}
                  alt="Retrait et Virement"
                  id="img-retrait"
                />
                <h3>Virement ou Versement</h3>
              </NavLink>
            </div>
            <div className="commande">
              <NavLink exact to="/User/Transfert">
                <img src={commande2} alt="Transfert" />
                <h3>Transfert d'Argent</h3>
              </NavLink>
            </div>
            <div className="commande">
              <NavLink exact to="/User/DemandePret">
                <img src={commande3} alt="Demande de pret" />
                <h3>Demande de prêt Banquaire </h3>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilClient;
