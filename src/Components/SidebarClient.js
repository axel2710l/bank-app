import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../index.scss";
import Avatar from "../Images/Avatar.png";
import { useAuth } from "../context/authContex";
import { getClientWithId } from "../utils/getData";

const SidebarClient = ({}) => {
  const [clientData, setClientData] = useState({
    nom: "Loading",
    id: "Loading",
    solde: 12211,
    email: "45sfwefecadcca",
  });
  const { currentUser } = useAuth();
  useEffect(() => {
    async function fetch() {
      const result = await getClientWithId(currentUser.uid);
      setClientData(result);
    }
    fetch();
  }, [currentUser]);
  const { nom, id, solde, email } = clientData;
  const bestId = (id) => {
    console.log(id);
    if (id) return id.slice(0, 3) + "-" + id.slice(3, 6) + "-" + id.slice(6, 9);
    return "Loading...";
  };
  return (
    <div className="sidebar">
      <div className="photo">
        <img src={Avatar} alt="photo de profil" />
      </div>
      <h3>{nom}</h3>
      <p>{"id: " + bestId(id)}</p>
      <p className="email">{email}</p>
      <h3>Votre solde</h3>
      <p className="solde">{solde + " DA"}</p>
      <NavLink exact to="/User/Historique" id="historique">
        Votre historique
      </NavLink>
      <button>Déconnexion</button>
    </div>
  );
};

export default SidebarClient;
