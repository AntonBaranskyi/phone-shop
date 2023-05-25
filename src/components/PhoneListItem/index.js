import React from "react";
import { Link } from "react-router-dom";

export default function ListItem(props) {
  const { name, imageUrl, price, id } = props;
  return (
    <Link
      style={{ textDecoration: "none", color: "black" }}
      to={`/phone/${id}`}
    >
      <div className="wrapper-item">
        <img src={imageUrl} alt="iphone" />
        <div>{name}</div>
        <div>{price} UAN</div>
        <button>Додати в кошик</button>
      </div>
    </Link>
  );
}
