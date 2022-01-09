import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import SidebarClient from "../Components/SidebarClient";
import { useAuth } from "../context/authContex";
import { addRetrait, addVersement } from "../utils/addData";
import { getClientWithId } from "../utils/getData";

const DepotRetrait = () => {
  const { currentUser } = useAuth();
  const [code, setCode] = useState();
  const [montant, setMontant] = useState();
  const retrait = async () => {
    if (!(code && montant)) alert("Veuillez remplir les deux champs");
    else {
      const { code: clientCode, solde } = await getClientWithId(
        currentUser.uid
      );
      if (code === clientCode) {
        const retraitData = {
          client: currentUser.uid,
          clientExSolde: solde,
          clientNvSolde: solde + montant,
          montant,
        };
        await addRetrait(retraitData);
      } else {
        alert("le code est erroné");
      }
    }
  };
  const versement = async () => {
    if (!(code && montant)) alert("Veuillez remplir les deux champs");
    else {
      const { code: clientCode, solde } = await getClientWithId(
        currentUser.uid
      );
      if (code === clientCode) {
        const VersementsData = {
          client: currentUser.uid,
          clientExSolde: solde,
          clientNvSolde: solde + montant,
          montant,
        };
        await addVersement(VersementsData);
      } else {
        alert("le code est erroné");
      }
    }
  };
  return (
    <div className="container">
      <div className="navbar">
        <div id="navbar_link">
          <NavLink exact to="/Profil">
            Tableau de bord &gt;
          </NavLink>
          <NavLink exact to="/User/DepotRetrait">
            Dépôt / Retrait
          </NavLink>
        </div>
      </div>
      <div className="colonne">
        <SidebarClient />
        <div className="contenu">
          <h1 className="depot_titre">
            Veuillez préciser la somme que vous voulez retirer ou déposer
          </h1>
          <div className="depot">
            <input
              type="number"
              name="somme"
              className="ajouternomtache"
              autoFocus
              placeholder="00.00"
              className="depotretrait"
              onChange={(e) => {
                setMontant(e.target.valueAsNumber);
              }}
            ></input>
            {"  "}
            <span>DA</span>
            <input
              type="text"
              name="id"
              className="ajouternomtache"
              placeholder="code du compte"
              className="depotretrait"
              onChange={(e) => {
                setCode(e.target.value);
              }}
            ></input>
            <div className="btn">
              <button className="retirer" onClick={retrait}>
                Retirer
              </button>
              <button className="deposer" onClick={versement}>
                Déposer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepotRetrait;
