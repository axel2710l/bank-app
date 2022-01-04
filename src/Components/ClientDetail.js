import React from "react";
import Avatar from '../Images/Avatar.png'

const ClientDetail = () => {
  return (
    <div className="component">
      <img src={Avatar}></img>
      <p className="clients">DOE</p>
      <p className="clients">Jhon</p>
      <p className="mail">test@test.com</p>
      <p className="clients">52000 DA</p>
    </div>
  );
};

export default ClientDetail;
