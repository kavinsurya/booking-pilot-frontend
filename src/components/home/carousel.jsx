import React, { useEffect, useState } from "react";
import "./home.css";
import Carousel from 'react-bootstrap/Carousel';


const ImgSlider = () => {

  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    const userList = async () => {
      let response = await fetch("http://localhost:5000/movie/movies");
      let user = await response.json();
      setData(user);
    };
    userList();
  }, []);
    return (
      <div> 
        <Carousel className="homepage-carousel" >
  {data.map((movie, index) => (
               <Carousel.Item  key={index}>
    <img
      className="d-block w-100"
      srcSet={movie.wide_img}
      alt=" "
      height="500px"
      width="100%"
    />
  </Carousel.Item>))}

 
</Carousel>
      </div>        
    )
}






export default ImgSlider;
