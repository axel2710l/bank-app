import React, { useState } from "react";
import "../index.scss";
import "../Styles/Inscription.scss";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import image from "../Images/connexion.png";
import { signup } from "../utils/auth";
import { click } from "@testing-library/user-event/dist/click";
import { getAuth } from "firebase/auth";
import { useHistory } from "react-router-dom";
import { updateClient } from "../utils/addData";

const Inscription = () => {
  const history = useHistory();
  const [data, setData] = useState({});
  useEffect(() => {
    // recupérer les infos current user
    console.log(getAuth().currentUser);
    // history.push("/Profil");
  }, []);
  const handleSolde = (event) => {
    const solde = event.target.valueAsNumber;
    setData({ ...data, solde });
    console.log(getAuth().currentUser.uid);
  };
  const handleStatut = (event) => {
    console.log(event.target.value);
    const statut = event.target.value;
    setData({ ...data, statut });
  };
  const handleCode = (event) => {
    const code = event.target.value;

    setData({ ...data, code });
  };

  return (
    <div id="inscription" className="container inscription">
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="form-insc">
        <div className="title">
          <h1>Veuillez remplir vos Insormations!</h1>
        </div>

        <form
          onSubmit={() => {
            history.push("/Profil");
            alert(data);
            console.log(data);
            updateClient(getAuth().currentUser.uid, data);
          }}
        >
          {/* <div className="nom-prenom ">
            <div className="half-width">
              <input type="text" name="nom" id="nom" placeholder="Nom" />
            </div>
            <div className="half-width">
              <input
                type="text"
                name="prenom"
                id="prenom"
                placeholder="Prénom"
              />
            </div>
          </div> */}
          <div className="full-width">
            <input
              type="number"
              name="solde"
              placeholder="Solde Initial"
              onChange={handleSolde}
            />
          </div>
          <div className="full-width">
            <label>Selectionnez votre statut</label>
            <select
              name="pin-code"
              placeholder="Votre statut "
              onChange={handleStatut}
            >
              <option value="">---Choisissez---</option>

              <option value="Entreprise">Entreprise</option>
              <option value="Etudiant">Etudiant</option>
              <option value="Employé">Employé</option>
            </select>
            {/* <input
              type="select"
              name="pin-code"
              placeholder="Votre statut "
              onChange={handleStatut}
            /> */}
          </div>
          <div className="full-width">
            <input
              type="password"
              name="pin-code"
              placeholder="Code PIN (4 chiffres) "
              onChange={handleCode}
            />
          </div>
          <div className="full-width">
            <input
              type="password"
              name="confirm-pin"
              placeholder="Confirmez votre code PIN "
            />
          </div>

          <div className="full-width sign-in">
            <p>
              IMPORTANT! <br />
              Gardez minutieusement votre{" "}
              <span style={{ color: "red" }}>code PIN</span>
            </p>
          </div>
          <div className="full-width">
            <input className="btn" type="submit" value={"Confrimer"} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Inscription;
