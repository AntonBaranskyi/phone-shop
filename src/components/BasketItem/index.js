import React from "react";
import { useDispatch } from "react-redux";
import { deletePhone } from "../../redux/slices/basketSlice";

export default function BasketItem({ name, price, imageUrl, id, count }) {
  const dispatch = useDispatch();
  return (
    <li className="cart-item">
      <img className="cart-item-image" src={imageUrl} alt="phone" />
      <div className="cart-item-details">
        <h4 className="cart-item-name">{name}</h4>
        <p className="cart-item-price">{price} грн</p>
        <p className="cart-item-price">{count} штук</p>
      </div>
      <button
        onClick={() => dispatch(deletePhone(id))}
        className="cart-item-remove"
      >
        Видалити
      </button>
    </li>
  );
}
