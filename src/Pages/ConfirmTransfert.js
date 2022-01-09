import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import SidebarClient from "../Components/SidebarClient";
import { getClientWithId } from "../utils/getData";
import { useAuth } from "../context/authContex";
import { addVirement } from "../utils/addData";
const ConfirmTransfert = () => {
  const { currentUser } = useAuth();
  const [montant, setMontant] = useState();
  const [code, setCode] = useState();

  const location = useLocation();
  const { user } = location.state;
  const virement = async () => {
    const clientRec = await getClientWithId(user);

    if (currentUser) {
      if (code && montant) {
        const clientEm = await getClientWithId(currentUser.uid);

        if (code === clientEm.code) {
          const virementData = {
            clientEm: clientEm.id,
            clientEmExSolde: clientEm.solde,
            clientEmNvSolde: clientEm.solde - montant,
            clientRec: clientRec.id,
            clientRecExSolde: clientRec.solde,
            clientRecNvSolde: clientRec.solde + montant,
            montant,
          };
          await addVirement(virementData);
          alert("Done");
        } else {
          alert("Code erroné");
        }
      } else {
        alert("Veuillez remplir tous les champs");
      }
    }
  };
  return (
    <div className="container">
      {console.log(user)}
      <div className="navbar">
        <div id="navbar_link">
          <NavLink exact to="/Profil">
            Tableau de bord &gt;
          </NavLink>
          <NavLink exact to="/User/Transfert">
            Transfert &gt;
          </NavLink>
          <NavLink exact to="/User/Transfert/Confirm">
            Confirmer le transfert
          </NavLink>
        </div>
      </div>
      <div className="colonne">
        <SidebarClient />
        <div className="contenu">
          <h1 className="depot_titre">
            Veuillez préciser la somme que vous voulez transférer
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
              <button className="deposer" onClick={virement}>
                Transférer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmTransfert;
