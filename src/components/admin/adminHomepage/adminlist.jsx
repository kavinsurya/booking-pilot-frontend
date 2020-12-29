import { React } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import "./adminHomepage.css";
import Button from "react-bootstrap/Button";
const AdminList = () => {
  return (
    <div classname="container">
      <div classname="card-deck">
        <div classname="card">
          <div classname="card-body">
            <h5 classname="card-title">Users</h5>
            <p classname="card-text">
              Click view to see the whole users in the booking pilot app.
            </p>
            <Link to="/UsersList" style={{ textDecoration: "none" }}>
              <Button variant="outline-primary">View</Button>{" "}
            </Link>
          </div>
        </div>
        <div classname="card">
          <div classname="card-body">
            <h5 classname="card-title">Theatre Agent</h5>
            <p classname="card-text">
              Click view to see the whole Theatre Agent in the booking pilot app.
            </p>
            <Link to="/AgentList" style={{ textDecoration: "none" }}>
              <Button variant="outline-primary">View</Button>{" "}
            </Link>
          </div>
        </div>
        <div classname="card">
          <div classname="card-body">
            <h5 classname="card-title">Theatres</h5>
            <p classname="card-text">
              Click view to see the whole Theatres in the booking pilot app.
            </p>
            <Link to="/TheatreList" style={{ textDecoration: "none" }}>
              <Button variant="outline-primary">View</Button>{" "}
            </Link>
          </div>
        </div>

        <div classname="card">
          <div classname="card-body">
            <h5 classname="card-title">Movies</h5>
            <p classname="card-text">
              Click view to see the whole Movies in the booking pilot app.
            </p>

            <Link to="/movies" style={{ textDecoration: "none" }}>
              <Button variant="outline-primary">View</Button>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminList;
