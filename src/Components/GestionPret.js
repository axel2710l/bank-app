import { Timestamp } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { updateClient, updatePret } from "../utils/addData";
import { getClientWithId } from "../utils/getData";
import { useAuth } from "../context/authContex";
const GestionPret = ({ data = {} }) => {
  const { currentUser } = useAuth();
  const { client, horaire, montant, salaire, id } = data;
  const [clientData, setClientData] = useState({
    nom: "Test",
  });
  useEffect(() => {
    async function fetch() {
      const clientResult = await getClientWithId(client);
      setClientData(clientResult);
    }

    fetch();
  }, []);
  const onAccepter = async () => {
    const pretUpdate = {
      employe: currentUser.dislpayName,
      confirme: true,
      clientExSolde: solde,
      clientNvSolde: solde + montant,
    };
    const update = await updatePret(id, pretUpdate);
    const clientUpdate = await updateClient(client, { solde: solde + montant });
  };
  const { nom, solde } = clientData;
  return (
    <div className="component">
      <p className="mail">{nom}</p>
      <p className="mail">{salaire + " DA"}</p>
      <p className="mail">{horaire.toDate().toDateString()}</p>
      <p>{montant + "DA"}</p>
      <div className="btn_pret">
        <button className="accepter" onClick={onAccepter}>
          Accepter
        </button>
      </div>
    </div>
  );
};

export default GestionPret;
