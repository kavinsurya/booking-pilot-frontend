import React, { useEffect, useState } from "react";
import "./HomePageImage";
import Carousel from "react-bootstrap/Carousel";

export function HomePageImage  ()  {
  const [data, setData] = useState([]);
  useEffect(() => {
    const movieImage = async () => {
      let response = await fetch("http://localhost:5000/movie/movies");
      let user = await response.json();
      setData(user);
    };
    movieImage();
  }, []);
  return (
    <div>
      <Carousel className="homepage-carousel">
        {data.map((movie, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              srcSet={movie.poster}
              alt=" "
              height="675px"
              width="100%"
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};


