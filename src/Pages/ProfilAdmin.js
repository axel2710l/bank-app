import React from "react";
import { NavLink } from "react-router-dom";
import SidebarAdmin from "../Components/SidebarAdmin";
import commande1 from "../Images/Historique.png";
import commande2 from "../Images/PretAdmin.jpg";
import commande3 from "../Images/ListeClients.jpg";
import { useAuth } from "../context/authContex";
const ProfilAdmin = () => {
  const { currentUser } = useAuth();
  return (
    <div className="container" id="profil-client">
      <div className="navbar">
        <div id="navbar_link">
          <NavLink exact to="/Profil">
            Tableau de bord
          </NavLink>
        </div>
      </div>
      <div className="colonne">
        <SidebarAdmin />
        <div className="contenu">
          <h1>{`Bonjour ${
            currentUser.displayName.split(" ")[0]
          }, Que souhaitez vous faire ? `}</h1>
          <div className="commandes">
            <div className="commande">
              <NavLink exact to="/Admin/Historique">
                <img
                  src={commande1}
                  alt="Historique des transactions"
                  id="img-transactions"
                />
                <h3>Voir l'Historique des transactions</h3>
              </NavLink>
            </div>
            <div className="commande">
              <NavLink exact to="/Admin/Pret">
                <img src={commande2} alt="demandes de Pret" />
                <h3>Gérer les demandes de Pret</h3>
              </NavLink>
            </div>
            <div className="commande">
              <NavLink exact to="/Admin/ListeClients">
                <img
                  src={commande3}
                  alt="Liste détaillée des clients"
                  id="img-liste"
                />
                <h3>Liste détaillée des clients </h3>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilAdmin;
