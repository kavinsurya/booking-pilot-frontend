import React from 'react'

import { Header } from "../header/Header";
import { HomePageImage } from "./HomePageImage/HomePageImage";
import { HomePageImg } from "./HomePageImage/HomePageImg";
import {  Footer} from "../footer/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
export function HomePage() {
    

    return (
       <div>
         <Header/>
         <HomePageImage/>
         <HomePageImg/>
         <Footer/>
       </div>
    )
}
