import React from "react";
import "./footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div class="container">
        <div class="footer-content">
          <div class="about-me">
            <h3>Про мене</h3>
          </div>
          <div class="logo">
            <span className="logo">Phone</span>
            <span className="text">Shop</span>
          </div>
          <div class="copyright">
            &copy; 2023 Антон Баранський, курсова робота. Усі права захищені.
          </div>
        </div>
      </div>
    </footer>
  );
}
