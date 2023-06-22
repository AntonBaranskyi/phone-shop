import React from "react";
import star from "../../assets/star.svg";
import "./style.scss";
import { useDispatch } from "react-redux";
import { addPhoneItem } from "../../redux/slices/basketSlice";

export default function SinglePhoneInfo({ imageUrl, name, price, stars, id }) {
  const dispatch = useDispatch();
  const onAddPhoneItem = () => {
    const item = {
      name,
      imageUrl,
      price,
      id,
    };
    dispatch(addPhoneItem(item));
  };
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
        <button onClick={onAddPhoneItem}>Додати в кошик</button>
      </div>
    </div>
  );
}
