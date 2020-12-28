import { React, useState } from "react";
import "./contactUS.css";

import Header from "../../generalComponents/header/header";
import Footer from "../../generalComponents/footer/footer";

const Contact = () => {
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [email, setEmail] = useState("");
  let [message, setMessage] = useState("");

  const submitForm = async (event) => {
   
    event.preventDefault();
    let data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      message: message,
      role:localStorage.getItem("userRole")
    };

    let url = "http://localhost:5000/contact";
    let response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
   

    if (response.status === 200) {
      debugger
      alert("mail sent s success!!");

    }

    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div>
      <Header />
      <div className="contact-body">
        <div className="contact-form">
          <div className="first-container">
            <div className="info-container">
              <div>
                {" "}
                <img className="icon" alt="" />
                <h3>Lets Talk</h3>
                <p>+91 9790234646</p>
              </div>
              <div>
                <img className="icon" alt="" />
                <h3>General Support</h3>
                <p>kavinguvi@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="second-container">
            <h2>Send Us A Message</h2>
            <form onSubmit={submitForm} method="POST">
              <div className="form-group">
                <label htmlFor="name-input">Tell us your name*</label>
                <input
                  id="name-input"
                  type="text"
                  placeholder="First name"
                  required="required"
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Last name"
                  required="required"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email-input">Enter your email*</label>
                <input
                  id="email-input"
                  type="email"
                  placeholder="Eg. example@email.com"
                  required="required"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message-textarea">Message</label>
                <textarea
                  id="message-textarea"
                  placeholder="Write us a message"
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <button>Send message</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
