import React from "react";
import "./header.scss";
import logo from "../../assets/phone-logo.svg";
import basket from "../../assets/basket.svg";

export default function Header() {
  return (
    <header className="header">
      <div>
        <a href="#">
          <span className="logo">Phone</span>
          <span className="text">Shop</span>
        </a>
      </div>
      <div className="header-info">
        <button className="cart-button">Корзина</button>
        <button className="login-button">Увійти</button>
        <img className="account-photo" src={""} alt="Фото акаунта" />
      </div>
    </header>
  );
}
