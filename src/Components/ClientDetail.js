import React from "react";
import Avatar from '../Images/Avatar.png'

const ClientDetail = ({data ={}}) => {
  
  return (
    <div className="component">
      <img src={Avatar}></img>
      <p className="clients">{data.nom.split(' ')[0]}</p>
      <p className="clients">{data.nom.split(' ')[1]}</p>
      <p className="mail">{data.email}</p>
      <p className="clients">{data.solde + ' DA'}</p>
    </div>
  );
};

export default ClientDetail;
