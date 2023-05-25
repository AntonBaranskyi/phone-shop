import React from "react";
import Header from "../components/Header";
import "./style_basket.scss";
import BasketItem from "../components/BasketItem";
import { useSelector } from "react-redux";
import uniqid from "uniqid";

export default function BasketPage() {
  const { items, totalPrice } = useSelector((state) => state.basket);

  if (items.length === 0) {
    return (
      <>
        <Header />
        <h1 style={{ textAlign: "center", fontSize: "30px" }}>
          Корзина порожня!
        </h1>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="cart-container">
        <h2 className="cart-title">Корзина</h2>
        <ul className="cart-items">
          {items.map((item) => {
            return <BasketItem key={uniqid()} {...item} />;
          })}
        </ul>
        <p className="cart-total">Загальна сума: {totalPrice} грн</p>
      </div>
    </>
  );
}
