import React, { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./theatre.css";
import Header from "../../generalComponents/header/header";
import Footer from "../../generalComponents/footer/footer";
import Button from "react-bootstrap/Button";
const TheatreList = () => {
  const [data, setData] = useState([]);

  console.log(data);
  const accept = async (id) => {
    alert(id);
    let data = {
      admin_verification: "verified",
    };

    let url = `http://localhost:5000/admin/theatreVerification/${id}`;

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
      admin_verification: "rejected",
    };

    let url = `http://localhost:5000/admin/theatreVerification/${id}`;

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
    const theatreList = async () => {
      let response = await fetch("http://localhost:5000/theatre/theatreList");

      let theatre = await response.json();
      setData(theatre);
    };
    theatreList();
  }, []);

  return (
    <div>
      <Header />
      <div>
        <h1 className="text-center">Theatre list</h1>

        <div className=" table-responsive py-5 theatre-container">
          <table className="table table-bordered table-hover text-center">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Theatre Name</th>
                <th scope="col">Manager Name</th>
                <th scope="col">Technology</th>
                <th scope="col">City</th>
                <th scope="col">Movie</th>
                <th scope="col">Number</th>
                <th scope="col">Admin Verification</th>
              </tr>
            </thead>
            <tbody>
              {data.map((theatre, index) => (
                <tr key={index}>
                  <td className="verification-td">{theatre.theatre_name} </td>
                  <td className="verification-td">{theatre.managerName} </td>
                  <td className="verification-td">{theatre.technology} </td>
                  <td className="verification-td">{theatre.city} </td>
                  <td className="verification-td">{theatre.movie} </td>
                  <td className="verification-td">{theatre.number} </td>

                  <td>
                    {theatre.admin_verification === "verified" ? (
                      <div>
                        <Button
                          className="verification-btn"
                          variant="success"
                          disabled
                        >
                          Verified
                        </Button>
                        <Button
                          className="verification-btn"
                          onClick={() => reject(theatre._id)}
                          variant="danger"
                        >
                          Reject
                        </Button>
                      </div>
                    ) : theatre.admin_verification === "rejected" ? (
                      <div>
                        <Button
                          className="verification-btn"
                          variant="danger"
                          disabled
                        >
                          Rejected
                        </Button>
                        <Button
                         variant="success"
                          className="verification-btn"
                          onClick={() => accept(theatre._id)}
                        >
                          Accept
                        </Button>
                      </div>
                    ) : (
                      <div>
                        <Button
                          variant="success"
                          onClick={() => accept(theatre._id)}
                          className="verification-btn"
                        >
                          Accept
                        </Button>
                        <Button
                          variant="danger"
                          onClick={() => reject(theatre._id)}
                          className="verification-btn"
                        >
                          Reject
                        </Button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TheatreList;
