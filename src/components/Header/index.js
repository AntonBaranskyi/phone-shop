import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="header">
      <div>
        <Link to="/">
          <span className="logo">Phone</span>
          <span className="text">Shop</span>
        </Link>
      </div>
      <div className="header-info">
        <button className="cart-button">Корзина</button>
        <button className="login-button">Увійти</button>
        <img className="account-photo" src={""} alt="Фото акаунта" />
      </div>
    </header>
  );
}
