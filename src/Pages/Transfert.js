import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import UserTransfert from "../Components/UserTransfert";
import Vide from "../Components/Vide";
import SidebarClient from "../Components/SidebarClient";
import { getClients } from "../utils/getData";
import { useAuth } from "../context/authContex";

const Transfert = () => {
  const [clients, setClients] = useState();
  useEffect(() => {
    async function fetch() {
      const clients = await getClients();
      setClients(clients);
    }
    fetch();
  }, []);
  const { currentUser } = useAuth();

  const mapObj = clients
    ? clients.map((client) => {
        if (client.id !== currentUser.uid) {
          return <UserTransfert data={client} />;
        }
      })
    : null;

  return (
    <div className="container">
      <div className="navbar">
        <div id="navbar_link">
          <NavLink exact to="/Profil">
            Tableau de bord &gt;
          </NavLink>
          <NavLink exact to="/User/Transfert">
            Transfert
          </NavLink>
        </div>
      </div>
      <div className="colonne">
        <SidebarClient />
        <div className="contenu">
          <div className="recherche_container">
            <input placeholder="Rechercher..." autoFocus></input>
          </div>
          <div className="component_container">{mapObj}</div>
        </div>
      </div>
    </div>
  );
};

export default Transfert;
