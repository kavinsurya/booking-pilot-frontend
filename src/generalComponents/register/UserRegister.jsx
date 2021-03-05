import React from "react";
import "./Register.css";

import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

export function UserRegister() {
  return (
    <div>
      <Header />
      <div className="register-body" style={{ backgroundColor: "#416475" }}>
        <div className="login-box">
          <img
            className="img-register"
            src="https://image.freepik.com/free-vector/cute-astronaut-with-popcorn-cartoon-vector-icon-illustration-science-food-icon_138676-1979.jpg"
            height="100px"
            width="100px"
            alt=""
            srcSet=""
          />
          <h2>Register</h2>
          <form method="POST">
            <div className="user-box">
              <input type="text" name="username" id="username" required />
              <label>Username</label>
            </div>
            <div className="user-box">
              <input type="text" name="email" id="email" required />
              <label>E-mail</label>
            </div>

            <div className="user-box">
              <input type="password" name="password" id="password" required />
              <label>Password</label>
            </div>

            <div className="user-box">
              <input type="tel" name="phone" id="phone" required />
              <label>Phone</label>
            </div>
            <div>
              <p className="login">
                Already member?
                <a className="anchor-login" href="/Login">
                  Login
                </a>
              </p>
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
