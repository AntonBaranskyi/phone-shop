import React from "react";
import star from "../../assets/star.svg";
import "./style.scss";

export default function SinglePhoneInfo({ imageUrl, name, price, stars }) {
  return (
    <div className="single-wrapper">
      <img src={imageUrl} alt="IPhone" />

      <div className="star-wrapper">
        <h3>{name}</h3>
        <img className="star" src={star} alt="star" />
        <span>{stars}</span>
      </div>

      <div className="single-wrapper-busket">
        <h4>Від {price} грн</h4>
        <button>Додати в кошик</button>
      </div>
    </div>
  );
}
