import { React, useState } from "react";
import "./login.css";
import { useHistory } from 'react-router-dom'
import Header from "../generalComponents/header/header";
import Footer from "../generalComponents/footer/footer";
const Login = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const history = useHistory();

  const loginFunction = async (event) => {
    event.preventDefault();
    let data = {
      email: email,
      password: password
    }

    let url = 'http://localhost:5000/user/login'
    let response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
    let Fetchdata = await response.json();

    if (Fetchdata.status === 200) {
      alert('Login success!!');
      localStorage.setItem('token', Fetchdata.token);
      history.replace('/Homepage');
    }
    if (Fetchdata.status === 401) {
      alert('Unauthorized!! please check the email and password');

    }
    setEmail("");
    setPassword("");
  }



  return (
    <div>
      <Header />
      <div className="login-body" style={{ backgroundColor: "#416475" }} >
        <div className="login-box">
          <img className="img-login"
            src="https://image.freepik.com/free-vector/cute-astronaut-with-popcorn-cartoon-vector-icon-illustration-science-food-icon_138676-1979.jpg"
            height="100px" width="100px" alt="" srcSet="" />
          <h2>Login</h2>
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
              <label >Password</label>

              <p className="sign-up">
                Don't have an account? <a className="anchor-sign-up" href="/Register">Create One</a>
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

  )
};






export default Login;
