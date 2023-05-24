import React from "react";

export default function ListItem(props) {
  const { name, imageUrl, price } = props;
  return (
    <div className="wrapper-item">
      <img src={imageUrl} alt="iphone" />
      <div>{name}</div>
      <div>{price} UAN</div>
      <button>Додати в кошик</button>
    </div>
  );
}
