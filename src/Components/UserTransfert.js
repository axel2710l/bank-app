import React from "react";
import { NavLink } from "react-router-dom";

const UserTransfert = ({ data = {} }) => {
  const { nom = "Test Test", email = "test", id } = data;
  return (
    <div className="component">
      <p className="clients">{nom.split(" ")[0]}</p>
      <p className="clients">{nom.split(" ")[1]}</p>
      <p className="mail">{email}</p>
      <div className="btn_pret">
        <NavLink
          exact
          to={{ pathname: "/User/Transfert/Confirm", state: { user: id } }}
          id="transferer_btn"
        >
          Transférer
        </NavLink>
      </div>
    </div>
  );
};

export default UserTransfert;
