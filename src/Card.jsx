import React from "react";
import burger from "./assets/cardImg.avif"

function Card({name , location , cuisine , rating , image}) {
  return (
    <>
      <div className="card">
        <img src={image} alt="" />
        <h3>{name}</h3>
        <div className="rating">
          
          
          <p>{rating}</p>
        </div>
        <p className="type">{cuisine}</p>
        <p className="city">{location}</p>
      </div>
    </>
  );
}

export default Card;