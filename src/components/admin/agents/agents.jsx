import React, { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./agents.css";
import Header from "../../generalComponents/header/header";
import Footer from "../../generalComponents/footer/footer";
import Button from "react-bootstrap/Button";
const AgentList = () => {
  const [data, setData] = useState([]);

  console.log(data);

  const accept = async (id) => {
    alert(id);
    let data = {
      AdminVerified: "verified",
    };

    let url = `http://localhost:5000/admin/agentVerification/${id}`;

    let response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let Fetchdata = await response.json();

    if (Fetchdata.status === 200) {
      alert("Theatre verified successfully");
      window.location.reload(false);
    }
  };

  const reject = async (id) => {
    alert(id);
    let data = {
      AdminVerified: "rejected",
    };

    let url = `http://localhost:5000/admin/agentVerification/${id}`;

    let response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let Fetchdata = await response.json();

    if (Fetchdata.status === 200) {
      alert("Theatre  rejected");
      window.location.reload(false);
    }
  };

  useEffect(() => {
    const userList = async () => {
      let response = await fetch("http://localhost:5000/agent/agentList");

      let user = await response.json();
      setData(user);
    };
    userList();
  }, []);

  return (
    <div>
      <Header />

      <div>
        <h1 className="text-center">Agent list</h1>

        <table className="table table-striped text-center">
          <thead className="thead-dark">
            <tr>
              <th scope="col">User Name</th>
              <th scope="col">E-mail</th>
              <th scope="col">GST number</th>
              <th scope="col">Phone number</th>

              <th scope="col">Admin Verification</th>
              <th scope="col">Account Verification</th>
            </tr>
          </thead>
          <tbody>
            {data.map((agent, index) => (
              <tr key={index}>
                <td>{agent.username} </td>
                <td>{agent.email} </td>
                <td>{agent.gst_no} </td>
                <td>{agent.phone} </td>
                <td>
                  {" "}
                  {agent.AdminVerified === "verified" ? (
                    <div>
                      <Button className="verification-btn"
                          variant="success"  disabled>Verified</Button>
                      <Button className="verification-btn"
                          variant="danger"  onClick={() => reject(agent._id)}>Reject</Button>
                    </div>
                  ) : agent.AdminVerified === "rejected" ? (
                    <div>
                     <Button  className="verification-btn"
                          variant="danger" disabled>Rejected</Button>
                      <Button className="verification-btn"
                          variant="success" onClick={() => accept(agent._id)}>Accept</Button>
                    </div>
                  ) : (
                    <div>
                     <Button className="verification-btn"
                          variant="success" onClick={() => accept(agent._id)}>Accept</Button>
                      <Button  className="verification-btn"
                          variant="danger" onClick={() => reject(agent._id)}>Reject</Button>
                    </div>
                  )}
                </td>
                <td>{agent.AccountVerified} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Footer />
    </div>
  );
};

export default AgentList;
