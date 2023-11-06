import React from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Home/Carousel";
import { slides } from "../components/Home/data";

const Home = () => {

  return (
    <div>
      <Navbar />
      <div className="w-[90%] m-auto  pt-11 sm:w-[75%]" >
        <Carousel slides={slides} />
      </div>
      
   </div>
  );
};

export default Home;
