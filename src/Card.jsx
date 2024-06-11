import React from "react";
import burger from "./assets/cardImg.avif"

function Card({name , location , cuisine , rating , image}) {
  const getStarRating = (rating) => {
    let stars = "";
    for(let i =0; i< rating; i++){
      stars +=  "⭐";
    }
    return stars;
  };
  return (
    <>
      <div className="card">
        <img src={image} alt="" />
        <h3>{name}</h3>

        <div className="rating">
          <p>{getStarRating(rating)}</p>
        </div>

        <p className="type">{cuisine}</p>
        <p className="city">{location}</p>
      </div>
    </>
  );
}

export default Card;