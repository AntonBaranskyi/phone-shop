import React from "react";
import { useDispatch } from "react-redux";
import { addPhoneItem } from "../../redux/slices/basketSlice";
import { useNavigate } from "react-router-dom";

export default function ListItem(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { name, imageUrl, price, id } = props;
 const onAddPhoneBasket = () => {
    const phoneItem = {
      name,
      imageUrl,
      price,
      id,
    };

    dispatch(addPhoneItem(phoneItem));
  };
  return (
    <>
      <div
        style={{ textDecoration: "none", color: "black" }}
        onClick={() => navigate(`/phone/${id}`)}
      >
        <div className="wrapper-item">
          <img src={imageUrl} alt="iphone" />
          <div>{name}</div>
          <div>{price} UAN</div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onAddPhoneBasket();
            }}
          >
            Додати в кошик
          </button>
        </div>
      </div>
    </>
  );
}
