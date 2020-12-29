import React, { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./users.css";
import Header from "../../generalComponents/header/header";
import Footer from "../../generalComponents/footer/footer";

const UsersList = () => {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    const userList = async () => {
      let response = await fetch("http://localhost:5000/user/userlist");

      let user = await response.json();
      setData(user);
    };
    userList();
  }, []);

  return (
    <div>
      <Header />
      <div>
        <h1 className="text-center">User list</h1>

        <div className=" table-responsive py-5 user-container">
          <table className="table table-bordered table-hover text-center">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Name</th>
                <th scope="col">E-mail</th>
                <th scope="col">Phone</th>
                <th scope="col">Verification</th>
              </tr>
            </thead>
            <tbody>
              {data.map((user, index) => (
                <tr key={index}>
                  <td>{user.username} </td>
                  <td>{user.email} </td>
                  <td>{user.phone} </td>
                  <td>{user.verified} </td>
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

export default UsersList;
