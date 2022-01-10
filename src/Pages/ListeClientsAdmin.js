import React, { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import ClientDetail from "../Components/ClientDetail";
import SidebarAdmin from "../Components/SidebarAdmin";
import Vide from "../Components/Vide";
import { getClients } from "../utils/getData";

const ListeClientsAdmin = () => {
  const [recherche, setrecherche] = useState("");
  const [clients, setClients] = useState();
  useEffect(() => {
    async function fetch() {
      const clients = await getClients();
      setClients(clients);
    }
    fetch();
  }, []);
  const mesClient =clients ? clients
  .filter((client) => {
    if (recherche == "") {
      return client;
    } else if (client.nom.toLowerCase().includes(recherche.toLowerCase()))
      return client;
  })
  .sort((a, b) => a.nom.localeCompare(b.nom)).map((res)=>{
    return <ClientDetail data = {res} />
  }) : <Vide/>
  //Filtrer les recherches

  return (
    <div className="container">
      <div className="navbar">
        <div id="navbar_link">
          <NavLink exact to="/ProfilAdmin">
            Tableau de bord &gt;
          </NavLink>
          <NavLink exact to="/Admin/ListeClients">
            Liste des clients
          </NavLink>
        </div>
      </div>
      <div className="colonne">
        <SidebarAdmin />
        <div className="contenu">
          <div className="recherche_container">
            <input placeholder="Rechercher..." autoFocus
              onChange={(e) => setrecherche(e.target.value)}></input>
          </div>
          <div className="component_container">
{mesClient}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListeClientsAdmin;
