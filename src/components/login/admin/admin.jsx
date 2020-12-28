import { React, useState } from "react";
import "../login.css";
import { useHistory } from "react-router-dom";

import Header from "../../generalComponents/header/header";
import Footer from "../../generalComponents/footer/footer";
const Login = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const history = useHistory();

  const loginFunction = async (event) => {
    event.preventDefault();
    let data = {
      mail: email,
      password: password,
    };

    let url = "http://localhost:5000/admin/login";
    let response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let Fetchdata = await response.json();

    if (Fetchdata.status === 200) {
      alert("Login success!!");
      localStorage.setItem("token", Fetchdata.token);
      history.replace("/HomepageAdmin");
    }
    setEmail("");
    setPassword("");
  };

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

          <form onSubmit={loginFunction} method="POST">
            <div className="user-box">
              <input
                type="text"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label>E-mail</label>
            </div>
            <div className="user-box">
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
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
};

export default Login;
