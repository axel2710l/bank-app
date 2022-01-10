import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import UserTransfert from "../Components/UserTransfert";
import Vide from "../Components/Vide";
import SidebarClient from "../Components/SidebarClient";
import { getClients } from "../utils/getData";
import { useAuth } from "../context/authContex";

const Transfert = () => {
  const [recherche, setrecherche] = useState("");
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
    ? clients
        .filter((client) => {
          if (recherche == "") {
            return client;
          } else if (client.nom.toLowerCase().includes(recherche.toLowerCase()))
            return client;
        })
        .sort((a, b) => a.nom.localeCompare(b.nom))
        .map((client) => {
          if (client.id !== currentUser.uid) {
            return <UserTransfert data={client} />;
          }
        })
    : <Vide/>;

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
            <input
              placeholder="Rechercher..."
              autoFocus
              onChange={(e) => setrecherche(e.target.value)}
            ></input>
          </div>
          <div className="component_container">{mapObj}</div>
        </div>
      </div>
    </div>
  );
};

export default Transfert;
