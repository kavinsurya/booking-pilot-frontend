import { React, useState } from "react";
import "../register.css";
import { useHistory } from "react-router-dom";
import Footer from "../../generalComponents/footer/footer";
import Header from "../../generalComponents/header/header";
const AgentRegister = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [username, setUsername] = useState("");
  let [phone, setPhone] = useState("");
  let [gst_no, setgstNo] = useState("");

  const history = useHistory();
  const signFunction = async (event) => {
    event.preventDefault();
    let data = {
      username: username,
      email: email,
      password: password,
      phone: phone,
      gst_no: gst_no,
      role: "Agent",
      AccountVerified: "",
      AdminVerified: ""
    };


    let url = 'http://localhost:5000/agent/register'
    let response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let Fetchdata = await response.json();

    if (Fetchdata.status === 200) {
      alert("Registration successfull");

      history.replace("/login/agent")
    }
    setEmail("");
    setPassword("");
    setUsername("");
    setPhone("");
    setgstNo("");

  };


  return (
    <div>
      <Header />
      <div className="register-body" style={{ backgroundColor: "#416475" }}>
        <div className="login-box">
          <img className="img-register"
            src="https://image.freepik.com/free-vector/cute-astronaut-with-popcorn-cartoon-vector-icon-illustration-science-food-icon_138676-1979.jpg"
            height="100px" width="100px" alt="" srcSet="" />
          <h2>Register</h2>
          <form onSubmit={signFunction} method="POST">
            <div className="user-box">
              <input
                type="text"
                name="username"
                id="username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                required
              />
              <label>Username</label>
            </div>
            <div className="user-box">
              <input
                type="email"
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
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
              <label>Password</label>
            </div>

            <div className="user-box">
              <input
                type="tel"
                name="phone"
                id="phone"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                required
              />
              <label>Phone</label>
            </div>
            <div className="user-box">
              <input
                type="text"
                name="gst_no"
                id="gst_no"
                onChange={(e) => setgstNo(e.target.value)}
                value={gst_no}
                required
              />
              <label>GST Nmuber</label>
            </div>

            <div>
              <p className="login">
                Already member?
              <a className="anchor-login" href="/login/agent">
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
};

export default AgentRegister;
