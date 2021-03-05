import React from "react";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

export function AgentLogin() {
  return (
    <div>
      <Header/>
      <div className="login-body" style={{ backgroundColor: "#416475" }}>
        <div className="login-box">
          <img
            className="img-login"
            src="https://image.freepik.com/free-vector/cute-astronaut-with-popcorn-cartoon-vector-icon-illustration-science-food-icon_138676-1979.jpg"
            height="100px"
            width="100px"
            alt=""
            srcSet=""
          />
          <h2>Agent Login</h2>
          <form method="POST">
            <div className="user-box">
              <input type="text" name="email" id="email" required />
              <label>E-mail</label>
            </div>
            <div className="user-box">
              <input type="password" name="password" id="password" required />
              <label>Password</label>

              <p className="sign-up">
                Don't have an account?{" "}
                <a className="anchor-sign-up" href="/Register/agent">
                  Create One
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
      <Footer/>
    </div>
  );
}
