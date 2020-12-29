import { React } from "react";
import "./home.css";
import Header from "../generalComponents/header/header";
import Footer from "../generalComponents/footer/footer";

import "bootstrap/dist/css/bootstrap.min.css";
import ImgSlider from "./carousel";

import HomepageImage from "./image";

const Homepage = () => {
  return (
    <div>
      <Header />
      <ImgSlider />
   
      <HomepageImage />
      <Footer />
    </div>
  );
};

export default Homepage;
