import React from "react";
import { NavLink } from "react-router-dom";
import SidebarClient from "../Components/SidebarClient";
// import DepotRetrait from "../Images/DepotRetrait.jpg"
// import Transfert from "../Images/Transfert.jpg"
// import DemandePret from "../Images/DemandePret.jpg"
import commande1 from "../Images/DepotRetrait.jpg";
import commande2 from "../Images/Transfert.jpg";
import commande3 from "../Images/DemandePret.jpg";
import "../Styles/ProfilClient.scss";
import { getAuth } from "firebase/auth";
import { useEffect } from "react";

const ProfilClient = () => {
  useEffect(() => {
    // recupérer les infos current user
    console.log(getAuth().currentUser);

  }, [])
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
                <h3>Déposer ou retirer de l'argent</h3>
              </NavLink>
            </div>
            <div className="commande">
              <NavLink exact to="/User/Transfert">
                <img src={commande2} alt="Transfert" />
                <h3>Transfert d'Argent </h3>
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

// import { NavLink } from "react-router-dom";

// const ProfilClient = () => {
//   // const {nom = 'Jhon', prenom = 'DOE'} = data;
//   return (

// <div className="container" id="profil-client">
//   <div className="navbar">
//     <h2>Tableau de bord</h2>
//   </div>
//   <div className="colonne">
//     <SidebarClient />
//     <div className="contenu">
//       <h1>Bonjour Jhon, Que souhaitez vous faire ? </h1>
//       <div className="commandes">
//         <div className="commande">
//           <NavLink exact to="/User/DepotRetrait">
//             <img
//               src={commande1}
//               alt="Retrait et Virement"
//               id="img-retrait"
//             />
//             <h3>Virement ou Versement</h3>
//           </NavLink>
//         </div>
//         <div className="commande">
//           <NavLink exact to="/User/Transfert">
//             <img src={commande2} alt="Transfert" />
//             <h3>Transfert d'Argent</h3>
//           </NavLink>
//         </div>
//         <div className="commande">
//           <NavLink exact to="/User/DemandePret">
//             <img src={commande3} alt="Demande de pret" />
//             <h3>Demande de prêt Banquaire </h3>
//           </NavLink>
//         </div>
//         </div>
//     </div>
//   </div>
// </div>
