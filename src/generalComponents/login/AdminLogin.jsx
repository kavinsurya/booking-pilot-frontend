import React from "react";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

export function AdminLogin() {
  return (
    <div>
      <Header />
      <div className="login-body " style={{ backgroundColor: "#416475" }}>
        <div className="login-box">
          <img
            className="img-login"
            src="https://cdn1.iconfinder.com/data/icons/microsoft-product-2/512/40_Microsoft_Admin-128.png"
            height="100px"
            width="100px"
            alt=""
            srcSet=""
          />
          <h2>Admin Panel</h2>

          <form method="POST">
            <div className="user-box">
              <input type="text" name="email" id="email" required />
              <label>E-mail</label>
            </div>
            <div className="user-box">
              <input type="password" name="password" id="password" required />
              <label>Password</label>
            </div>
            <button href="">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Login
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
