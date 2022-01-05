import React from "react";

const GestionPret = () => {
  return (
    <div className="component">
      <p className="mail">test@test.com</p>
      <p>Prêt demandé le 05/01/2022</p>
      <div className="btn_pret">
        <button className='plusinfo'>Plus d'informations</button>
        <button className="accepter">Accepter</button>
        <button className="refuser">Refuser</button>
      </div>
    </div>
  );
};

export default GestionPret;
