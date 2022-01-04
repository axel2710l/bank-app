import React from "react";
import { NavLink } from "react-router-dom";

const UserTransfert = () => {
  return (
    <div className="component">
      <p className="clients">BOB</p>
      <p className="clients">TEST</p>
      <p className="mail">bob@test.com</p>
      <div className="btn_pret">
        <NavLink exact
                to="/User/Transfert/Confirm"
                  id="transferer_btn">Transférer</NavLink>
      </div>
    </div>
  );
};

export default UserTransfert;
