import "./addMovie.css";
import { React, useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../../generalComponents/header/header";
import Footer from "../../generalComponents/footer/footer";

const AddMovie = () => {
  let [movieName, setMovieName] = useState("");
  let [director, setDirector] = useState("");
  let [musicDirector, setMusicDirector] = useState("");
  let [cast, setCast] = useState("");
  let [producer, setProducer] = useState("");
  let [img, setImg] = useState("");
  let [poster, setPoster] = useState("");
  let [description, setdescription] = useState("");
  let [year, setYear] = useState("");
  let [trailer, setTrailer] = useState("");
  let [duration, setDuration] = useState("");

  const history = useHistory();
  const addMovie = async (event) => {
    event.preventDefault();
    let data = {
      name: movieName,
      director: director,
      musicDirector: musicDirector,
      cast: cast,
      producer: producer,
      img: img,
      poster: poster,
      description: description,
      year: year,
      trailer: trailer,
      duration: duration,
    };

    let url = "http://localhost:5000/movie/addMovie";
    let response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let Fetchdata = await response.json();

    if (Fetchdata.status === 200) {
      alert("Movie added successfully");
      history.replace("/HomepageAdmin");
    }
    setMovieName("");
    setDirector("");
    setMusicDirector("");
    setCast("");
    setProducer("");
    setImg("");
    setPoster("");
    setdescription("");
    setYear("");
    setTrailer("");
    setDuration("");
  };

  return (
    <div>
      <Header />
      <div className="body">
        <div className="container addMovie-container">
          <h1 className="heading">Add Theatre</h1>

          <form onSubmit={addMovie} method="POST">
            <div className="group">
              <input
                id="movieName"
                className="movieName addTheatre-input"
                type="text"
                onChange={(e) => setMovieName(e.target.value)}
                required
              />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label className="addTheatre-label">Movie Name</label>
            </div>

            <div className="group">
              <input
                id="director"
                className="director addTheatre-input"
                type="text"
                onChange={(e) => setDirector(e.target.value)}
                required
              />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label className="addTheatre-label">Director Name</label>
            </div>
            <div className="group">
              <input
                id="musicDirector"
                className="musicDirector addTheatre-input"
                type="text"
                onChange={(e) => setMusicDirector(e.target.value)}
                required
              />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label className="addTheatre-label"> Music Director</label>
            </div>

            <div className="group">
              <input
                id="producer"
                className="producer addTheatre-input"
                type="text"
                onChange={(e) => setProducer(e.target.value)}
                required
              />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label className="addTheatre-label">Producer</label>
            </div>
            <div className="group">
              <input
                id="cast"
                className="cast addTheatre-input"
                type="text"
                onChange={(e) => setCast(e.target.value)}
                required
              />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label className="addTheatre-label">Cast</label>
            </div>

            <div className="group">
              <input
                id="cast"
                className="cast addTheatre-input"
                type="text"
                onChange={(e) => setDuration(e.target.value)}
                required
              />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label className="addTheatre-label">Duration</label>
            </div>

            <div className="group">
              <input
                id="cast"
                className="cast addTheatre-input"
                type="text"
                onChange={(e) => setYear(e.target.value)}
                required
              />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label className="addTheatre-label">Year</label>
            </div>

            <div className="group">
              <textarea
                id="cast"
                className="cast addTheatre-input"
                type="text"
                onChange={(e) => setdescription(e.target.value)}
                required
              />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label className="addTheatre-label">Description</label>
            </div>

            <div className="group">
              <input
                id="cast"
                className="cast addTheatre-input"
                type="text"
                onChange={(e) => setImg(e.target.value)}
                required
              />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label className="addTheatre-label">
                Image *(Please type image url)
              </label>
            </div>

            <div className="group">
              <input
                id="cast"
                className="cast addTheatre-input"
                type="text"
                onChange={(e) => setPoster(e.target.value)}
                required
              />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label className="addTheatre-label">
                Poster *(Please type image url 1280*600)
              </label>
            </div>

            <div className="group">
              <input
                id="cast"
                className="cast addTheatre-input"
                type="text"
                onChange={(e) => setTrailer(e.target.value)}
                required
              />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label className="addTheatre-label">Trailer/teaser link</label>
            </div>
            <div className="group">
              <button className="btn-trans">Add</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddMovie;
