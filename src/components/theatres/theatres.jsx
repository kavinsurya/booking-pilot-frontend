import React, { useState, useEffect } from "react";


const Theatres = () => {
  const [data, setData] = useState([]);




  useEffect(() => {
    const getProducts = async () => {
      let response = await fetch("http://localhost:5000/theatre/theatreList");
      let productData = await response.json();
      console.log(productData);
      setData(productData.data);
    
    };
    getProducts();
  }, []);
return(<h1>kavin</h1>)
};

export default Theatres;
