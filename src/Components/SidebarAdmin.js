import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../index.scss";
import Avatar from "../Images/Avatar.png";
import { useAuth } from "../context/authContex";
import { getEmployerWithId } from "../utils/getData";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import{signout} from '../utils/auth' 
const SidebarAdmin = () => {
  const history = useHistory()
  const [adminData, setAdminData] = useState({
    nom: "Loading",
    id: "Loading",
    email: "loading",
  });
  const { currentUser } = useAuth();

  useEffect(() => {
    async function fetch() {
      console.log(currentUser);
      const result = await getEmployerWithId(currentUser.uid);
      setAdminData(result);
    }
    fetch();
  }, [currentUser]);
  const bestId = (id) => {
    console.log(id);
    if (id) return id.slice(0, 3) + "-" + id.slice(3, 6) + "-" + id.slice(6, 9);
    return "Loading...";
  };
  const { nom = "Loading", id = "Loading", email = "Loading" } = adminData;

  return (
    <div className="sidebar">
      <div className="photo">
        <img src={Avatar} alt="photo de profil" />
      </div>
      <h3>{nom}</h3>
      <p>Admin</p>
      <p>{"id " + bestId(id)}</p>
      <p className="email">{email}</p>
      <button onClick={()=>{
        signout()
        history.push('/')
      }}>Déconnexion</button>
    </div>
  );
};

export default SidebarAdmin;
