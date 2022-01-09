import React, { useState } from "react";
import { useAuth } from "../context/authContex";
import { addPret } from "../utils/addData";

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
            placeholder="Montant de pret"
            onChange={handleMontant}
          />
        </div>

        <div className="full-width">
          <input
            type="number"
            name="salaire"
            placeholder="Votre salaire actuel "
            onChange={handleSalaire}
          />
        </div>

        <div className="full-width">
          <input className="btn" type="submit" value={"Confirmer"} />
        </div>
      </form>
    </div>
  );
};

export default Pret;
