import React from "react";
import SidebarAdmin from "../Components/SidebarAdmin";
import '../Styles/ProfilClient.scss'
import commande1 from '../Images/historiqueTransactions.png'
import commande3 from '../Images/ListeClients.jpg'
import commande2 from '../Images/DemandePret.jpg'
import { NavLink } from "react-router-dom";

const ProfilAdmin = () => {
  return (
    <div className="container" id="profil-client">
      <div className="navbar">
        <h2>Tableau de bord</h2>
      </div>
      <div className="colonne">
        <SidebarAdmin />
        <div className="contenu">
            <h1>Bonjour Jhon, Que souhaitez vous faire ? </h1>
            <div className="commandes">
                
                <div className="commande">
                <NavLink exact to="/Admin/Historique">
                    <img src={commande1} alt="Historique des transactions" id="img-transactions" />
                    <h3>Historique des transactions</h3>
                    </NavLink>
                </div>
                
                
                
                <div className="commande">
                <NavLink exact to="/Admin/Pret">
                    <img src={commande2} alt="Gerer les demandes de pret" />
                    <h3>Gérer les Demandes de Pret</h3>
                    </NavLink>
                </div>
                
                
                <div className="commande">
                <NavLink exact to="/Admin/ListeClients">
                    <img src={commande3} alt="Liste des clients " id="img-liste" />
                    <h3>Liste des Clinents </h3>
                    </NavLink>
                </div>
                
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilAdmin;
