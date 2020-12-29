import { React } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import "./adminHomepage.css";
import Button from "react-bootstrap/Button";
const AdminList = () => {
  return (
    <div className="adminpage-content">
    <div class="container">
        <p>Hover over the card to see the drop shadow added</p>

        <div class="card-deck">
          <div class="card adminListing-card mb-4">
            <div class="card-body">
              <h5 class="card-title">Users</h5>
              <p class="card-text">
                Click view to see the whole users in the booking pilot app.
              </p>
              <Link to="/UsersList" style={{ textDecoration: "none" }}>
                <Button variant="outline-primary">View</Button>{" "}
              </Link>
            </div>
          </div>
          <div class="card adminListing-card mb-4">
            <div class="card-body">
              <h5 class="card-title">Theatre Agent</h5>
              <p class="card-text">
                Click view to see the whole Theatres in the booking pilot app.
              </p>
              <Link to="/AgentList" style={{ textDecoration: "none" }}>
                <Button variant="outline-primary">View</Button>{" "}
              </Link>
            </div>
          </div>
          <div class="card adminListing-card mb-4">
            <div class="card-body">
              <h5 class="card-title">Theatres</h5>
              <p class="card-text">
                Click view to see the whole Theatres in the booking pilot app.
              </p>
              <Link to="/TheatreList" style={{ textDecoration: "none" }}>
                <Button variant="outline-primary">View</Button>{" "}
              </Link>
            </div>
          </div>     
          <div class="card adminListing-card mb-4">
            <div class="card-body">
              <h5 class="card-title">Movies</h5>
              <p class="card-text">
                Click view to see the whole users in the booking pilot app.
              </p>

              <Link to="/movies" style={{ textDecoration: "none" }}>
                <Button variant="outline-primary">View</Button>{" "}
              </Link>
            </div>
          </div>
        </div>
      </div> 
     
    </div>
  );
};

export default AdminList;
