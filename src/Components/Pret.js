import React, { useState } from "react";
import { useAuth } from "../context/authContex";
import { addPret } from "../utils/addData";
import "../index.scss";

const Pret = () => {
  const { currentUser } = useAuth();
  const [salaire, setSalaire] = useState();
  const [montant, setMontant] = useState();
  const handleSalaire = (e) => {
    setSalaire(e.target.valueAsNumber);
  };
  const handleMontant = (e) => {
    setMontant(e.target.valueAsNumber);
  };
  const pret = async () => {
    if (currentUser) {
      const pretData = {
        client: currentUser.uid,
        montant,
        salaire,
      };
      await addPret(pretData);
      alert("Done");
    }
  };

  return (
    <div>
      <h1>Formulaire de prêt</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          pret();
        }}
      >
        <div className="full-width">
          <input
            type="number"
            name="montant"
            className="depotretrait"
            placeholder="Montant de pret"
            onChange={handleMontant}
          />
          <input
            type="number"
            name="salaire"
            className="depotretrait"
            placeholder="Votre salaire actuel "
            onChange={handleSalaire}
          />
        </div>
          <input className="btn_pret_confirmer" type="submit" value={"Confirmer"} />
      </form>
    </div>
  );
};

export default Pret;
