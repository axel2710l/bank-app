import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import GestionPret from "../Components/GestionPret";
import SidebarAdmin from "../Components/SidebarAdmin";
import Vide from "../Components/Vide";
import { getPrets } from "../utils/getData";

const PretAdmin = () => {
  const [prets, setPrets] = useState();
  const [recherche, setrecherche] = useState("");
  useEffect(() => {
    async function fetch() {
      const mesPrets = await getPrets();
      console.log("haahha");
      console.log(mesPrets);
      setPrets(mesPrets);
    }
    fetch();
  }, []);
  const mapPrets = prets
    ? prets.map((pret) => {
        if (!pret.confirme) {
          return <GestionPret key={pret.id} data={pret} />;
        }
      })
    : <Vide/>;
    //FILTRER RECHERCHE


  return (
    <div className="container">
      <div className="navbar">
        <div id="navbar_link">
          <NavLink exact to="/ProfilAdmin">
            Tableau de bord &gt;
          </NavLink>
          <NavLink exact to="/Admin/Pret">
            Demandes de prêt
          </NavLink>
        </div>
      </div>
      <div className="colonne">
        <SidebarAdmin />
        <div className="contenu">

          <div className="component_container">{mapPrets}</div>
        </div>
      </div>
    </div>
  );
};

export default PretAdmin;
