import React from "react";
import "./Movies.css";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";

export function Movies() {
  return (
    <div>
      <Header />
      <div className="movielist-body">
        <Container className="container">
          <div
            className="movie_card"
            style={{
              background: `url(https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRfPemKBxZs8dFE4Z0Yib0i9fEiUVriLxqHj0JHsD6ICvSwLgEV)`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="info_section">
              <div className="movie_header">
                <img className="locandina" srcSet="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRfPemKBxZs8dFE4Z0Yib0i9fEiUVriLxqHj0JHsD6ICvSwLgEV" alt="Master" />
                <h1>Master</h1>
                <h4>2020, Lokesh</h4>
                <span className="minutes">178 mins</span>
                <p className="type">Action</p>
              </div>
              <div className="movie_desc">
                <p className="text">Master</p>

                <div>
                  <Button className="movie-buttons" variant="outline-warning">
                    <a
                      href="https://www.youtube.com/watch?v=UTiXQcrLlv4"
                      target="_blank"
                      rel="noreferrer"
                      className="trailer-link"
                    >
                      {" "}
                      Trailer
                    </a>
                  </Button>{" "}
                  <Link to="/Theatres" style={{ textDecoration: "none" }}>
                    <Button className="movie-buttons" variant="outline-warning">
                      Book now
                    </Button>{" "}
                  </Link>
                </div>
              </div>
            </div>
            <div className="blur_back ave_back"></div>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
}
