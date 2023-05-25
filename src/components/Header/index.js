import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/slices/authSlice";

export default function Header() {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state.auth);
  const { totalCount } = useSelector((state) => state.basket);
  console.log(auth);

  return (
    <header className="header">
      <div>
        <Link to="/">
          <span className="logo">Phone</span>
          <span className="text">Shop</span>
        </Link>
      </div>
      <div className="header-info">
        <Link to="/basket">
          <button className="cart-button">
            Корзина <span className="basketSpan">{totalCount}</span>
          </button>
        </Link>
        {auth ? (
          <Link to="/">
            <button onClick={() => dispatch(logout())} className="login-button">
              Вийти
            </button>
          </Link>
        ) : (
          <Link to="/login">
            <button className="login-button"> Увійти</button>
          </Link>
        )}

        {auth && (
          <img
            className="account-photo"
            src={auth.picture}
            alt="Фото акаунта"
          />
        )}
      </div>
    </header>
  );
}
